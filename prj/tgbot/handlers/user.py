from aiogram import Router
from aiogram.types import Message
from aiogram.filters import Command, CommandStart, CommandObject
from aiogram.fsm.context import FSMContext
import logging

from keyboards.keyboards import get_kb, back_kb, send_notify_kb
from states.user import User_States
from utils.async_mysql import AsyncMySQL

router = Router()
db = AsyncMySQL()


@router.startup()
async def on_startup():
    await db.create_pool()


@router.shutdown()
async def on_shutdown():
    await db.close()


@router.message(CommandStart())
async def start(msg: Message, state: FSMContext, command: CommandObject):
    await msg.answer('Привет')
    user_id = int(command.args) if command.args else None
    if user_id:
        tg_user_id = await db.user_id_exists(user_id)
        if not tg_user_id:
            print(await db.add_tg_user_id_to_user(user_id, msg.chat.id))
            await msg.answer('Вы успешно привязали аккунт и будете получать сюда уведомления с платформы Texevents')
            await state.update_data(id=int(command.args))
        else:
            if tg_user_id == -1:
                await msg.answer('Вы пытаетесь привязать телеграмм к несуществующему аккаунту')
            else:
                await msg.answer('Ваш телеграмм уже привязан к профилю на сайте')

    if await db.get_role_user((await state.get_data())['id']) == 1:
        await state.set_state(User_States.menu)
        await msg.answer('Вы можете отправлять уведомления группе людей, учавствующих в событии ваших мероприятий.',
                         reply_markup=send_notify_kb)


@router.message(Command("menu"))
async def get_menu(msg: Message, state: FSMContext):
    if msg.text == '🔔Отправка уведомлений':
        await msg.answer('Выберите мероприятие для отправки уведомления', reply_markup=await get_kb('events'))
        await state.set_state(User_States.choose_event)
    else:
        await not_understend(msg, state)


@router.message(User_States.menu)
async def get_menu(msg: Message, state: FSMContext):
    if msg.text == '🔔Отправка уведомлений':
        await msg.answer('Выберите мероприятие для отправки уведомления', reply_markup=await get_kb('events'))
        await state.set_state(User_States.choose_event)
    else:
        await not_understend(msg, state)


@router.message(User_States.choose_event)
async def choose_event(msg: Message, state: FSMContext):
    texts = await db.get_events(1)
    if msg.text in texts:
        await msg.answer('Выберите событие для отправки уведомления', reply_markup=await get_kb('actions', msg.text))
        await state.set_state(User_States.choose_action)
        await state.update_data(event=msg.text)
    elif msg.text == '🔙Назад':
        await state.set_state(User_States.menu)
        await msg.answer('☰Меню', reply_markup=send_notify_kb)
    else:
        await not_understend(msg, state)


@router.message(User_States.choose_action)
async def choose_action(msg: Message, state: FSMContext):
    texts = await db.get_actions(1)
    if msg.text in texts:
        await msg.answer('Введите текст уведомления', reply_markup=back_kb)
        await state.set_state(User_States.send_notify)
        await state.update_data(action=msg.text)
    elif msg.text == '🔙Назад':
        await state.set_state(User_States.choose_event)
        await msg.answer('Выберите мероприятие для отправки уведомления', reply_markup=await get_kb('events'))
    else:
        await not_understend(msg, state)


@router.message(User_States.send_notify)
async def send_notify(msg: Message, state: FSMContext):
    if msg.text == '🔙Назад':
        await state.set_state(User_States.choose_action)
        data = await state.get_data()
        await msg.answer('Выберите событие для отправки уведомления', reply_markup=await get_kb('actions', data['event']))
        return
    data = await state.get_data()
    print(data)
    # actions = (await db.get_events(2))[data['event']]
    for tg_user_id in await db.get_members_for_action(data['action']):
        if tg_user_id:
            await msg.bot.send_message(tg_user_id,
                                       f'🔔Поступило уведомление от организатора🔔\n\n'
                                     f'*Мероприятиe*: {data["event"]}\n'
                                     f'*Cобытие*: {data["action"]}\n\n'
                                     f'{msg.text}',
                                     parse_mode='Markdown')

    await msg.answer('Уведомление отправлено успешно')
    await state.set_state(User_States.choose_action)
    data = await state.get_data()
    await msg.answer('Выберите событие для отправки уведомления', reply_markup=await get_kb('actions', data['event']))



@router.message()
async def not_understend(msg: Message, state: FSMContext):
    state_user = await state.get_state()
    logging.info(
        f"Пользователь {msg.chat.full_name} (@{msg.chat.username}, state: {state_user}) написал: {msg.text}"
    )

    await msg.answer("Я вас не понял")
