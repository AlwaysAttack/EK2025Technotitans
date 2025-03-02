from aiogram.types import KeyboardButton
from aiogram.utils.keyboard import ReplyKeyboardBuilder
#from dotmap import DotMap


builder = ReplyKeyboardBuilder()
builder.add(KeyboardButton(text='🔙Назад'))
back_kb = builder.as_markup(resize_keyboard=True, input_field_placeholder='Введите текст уведомления')

builder = ReplyKeyboardBuilder()
builder.add(KeyboardButton(text='🔔Отправка уведомлений'))
send_notify_kb = builder.as_markup(resize_keyboard=True)


async def get_kb(type: str, event: str = ''):
    from handlers.user import db

    input_field_placeholder = 'Выберите '
    if type == 'events':
        events = await db.get_events(1) + ['🔙Назад']
        input_field_placeholder += 'мероприятие'
    else:
        event_id = await db.get_event_id(event)
        events = await db.get_actions(1, event_id) + ['🔙Назад']
        input_field_placeholder += 'событие'

    builder = ReplyKeyboardBuilder()
    for event in events:
        builder.add(KeyboardButton(text=event))
    builder.adjust(1)

    return builder.as_markup(
        resize_keyboard=True, input_field_placeholder=input_field_placeholder
    )

