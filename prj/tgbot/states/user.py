from aiogram.fsm.state import State, StatesGroup


class User_States(StatesGroup):
    start_menu = State()
    menu = State()
    choose_event = State()
    choose_action = State()
    send_notify = State()
