import aiomysql

from data import config

class AsyncMySQL:
    def __init__(self):
        self.host = "localhost"
        self.port = 3306
        self.user = config.DB_USER
        self.password = config.DB_PASSWORD
        self.db = config.DB_DATABASE
        self.pool = None

    async def create_pool(self):
        self.pool = await aiomysql.create_pool(
            host=self.host,
            port=self.port,
            user=self.user,
            password=self.password,
            db=self.db,
            autocommit=True
        )

    async def close(self):
        if self.pool:
            self.pool.close()
            await self.pool.wait_closed()

    async def user_id_exists(self, user_id: int):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute("SELECT tg_user_id FROM profiles WHERE id = %s", (user_id, ))
                result = await cur.fetchall()
                return result[0]['tg_user_id']

    async def add_tg_user_id_to_user(self, user_id: int, tg_user_id: int):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute("UPDATE profiles SET tg_user_id=%s WHERE id = %s", (tg_user_id, user_id))
                result = await cur.fetchall()
                return result


    async def get_role_user(self, user_id: int):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute("SELECT role FROM profiles WHERE id = %s", (user_id, ))
                result = await cur.fetchall()
                return result[0]['role']

    async def get_events(self, fields: int):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                if fields == 2:
                    request = "SELECT name, actions FROM events"
                else:
                    request = 'SELECT name FROM events'
                await cur.execute(request)
                res = await cur.fetchall()
                if fields == 2:
                    res = [(r['name'], tuple(map(int, r['actions'].split(', ')))) for r in res]
                    res = dict(res)
                else:
                    res = [r['name'] for r in res]
                return res

    async def get_actions(self, fields: int, event_id: str = ''):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                if fields == 2:
                    request = "SELECT name, type FROM actions"
                else:
                    request = 'SELECT name FROM actions'
                if event_id:
                    request += ' WHERE event_id=%s'
                    await cur.execute(request, (event_id, ))
                else:
                    await cur.execute(request)
                res = await cur.fetchall()
                if fields == 2:
                    res = [(r['name'], r['type']) for r in res]
                    res = dict(res)
                else:
                    res = [r['name'] for r in res]
                return res

    async def get_members_for_action(self, action_id: int):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute('SELECT tg_user_id FROM profiles where tg_user_id IS NOT NULL')
                res = await cur.fetchall()
                res = [r['tg_user_id'] for r in res]
                return res

    async def get_events_ids(self, fields: int):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute('SELECT id, name FROM events')
                res = await cur.fetchall()
                return res

    async def get_event_id(self, event: str):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute('SELECT id FROM events WHERE name=%s', (event, ))
                res = await cur.fetchall()
                return res[0]['id']

    async def get_tg_user_id(self, user_id: int):
        async with self.pool.acquire() as conn:
            async with conn.cursor(aiomysql.DictCursor) as cur:
                await cur.execute('SELECT tg_user_id FROM profiles WHERE id=%s', (user_id, ))
                res = await cur.fetchall()
                return res[0]['tg_user_id']
