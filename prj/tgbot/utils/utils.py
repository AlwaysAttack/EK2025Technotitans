from typing import Dict
from aiogram import Bot

import logging
from data.consts import *


async def send_notify(bot: Bot, users_by_msg: Dict[str, str]):
    count_notify_users = 0

    blocks = 0
    deactivate = 0
    another = 0

    for msg, users_ids in users_by_msg.items():
        for user_id in users_ids:
            try:
                await bot.send_message(user_id, msg)
                count_notify_users += 1
            except Exception as e:
                e = str(e)
                if e == BLOCKED:
                    blocks += 1
                elif e == DELETED:
                    deactivate += 1
                elif e == NOT_FOUND:
                    pass
                else:
                    another += 1


    logging.info(f"Заблокировано {blocks}, деактивировано {deactivate}, по другим причинам {another}")

    return count_notify_users
