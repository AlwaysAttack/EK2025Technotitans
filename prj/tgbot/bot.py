from sys import path
import asyncio
import websockets
from logging import getLogger, basicConfig, INFO, info
from aiogram import Bot, Dispatcher

from redis.asyncio.client import Redis
from aiogram.fsm.storage.redis import RedisStorage


from data import config
from handlers import user


path.append("..")
logger = getLogger(__name__)

bot = Bot(token=config.BOT_TOKEN)
redis = Redis(host="localhost")
storage = RedisStorage(redis=redis)
dp = Dispatcher(storage=storage)

active_connections = set()


async def handle_websocket_connection(websocket):
    active_connections.add(websocket)
    try:
        async for message in websocket:
            await bot.send_message(chat_id=1660979386, text=f"*Доступно новое событие*: {message}", parse_mode='Markdown')
    finally:
        active_connections.remove(websocket)


async def start_websocket_server():
    async with websockets.serve(handle_websocket_connection, "localhost", 8765):
        print("WebSocket сервер запущен на ws://localhost:8765")
        await asyncio.Future()


async def main() -> None:
    basicConfig(
        level=INFO,
        format="%(asctime)s - [%(levelname)s] -  %(name)s - (%(filename)s).%(funcName)s(%(lineno)d) - %(message)s",
        #filename=f"logs/{date.today()}.log",
    )

    info("Starting bot")

    dp.include_router(user.router)

    websocket_task = asyncio.create_task(start_websocket_server())

    await bot.delete_webhook(drop_pending_updates=True)
    try:
        await dp.start_polling(bot)
    finally:
        websocket_task.cancel()
        try:
            await websocket_task
        except asyncio.CancelledError:
            print("WebSocket сервер остановлен")


if __name__ == "__main__":
    loop = asyncio.get_event_loop()

    asyncio.ensure_future(main())

    loop.run_forever()
