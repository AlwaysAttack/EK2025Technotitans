import React, { useState } from 'react';
import { Box, Typography, Button, Input, Stack, Divider, IconButton } from '@mui/joy'; // Добавлен IconButton
import { Link } from '@inertiajs/react';
import { ArrowBackIosNew } from '@mui/icons-material'; // Добавлен импорт иконки

const CMSContacts = () => {
    // Состояния для хранения данных
    const [city, setCity] = useState('80-летие Победы в Великой Отечественной войне');
    const [organizer, setOrganizer] = useState('Гольский Даниил Антонович');
    const [phone, setPhone] = useState('+7 (952) 173-37-04');
    const [email, setEmail] = useState('dgolsky07@gmail.com');

    // Функция для сохранения данных (можно адаптировать под вашу логику)
    const handleSave = () => {
        const contactData = {
            city,
            organizer,
            phone,
            email,
        };
        console.log('Данные для сохранения:', contactData);
        // Здесь можно добавить логику для отправки данных в бэкенд
    };

    return (
        <Box sx={{ padding: '50px', width: '75vw' }}>
            <Stack
                direction="row"
                spacing={0.5}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Link href="/main">
                    <IconButton><ArrowBackIosNew /></IconButton>
                </Link>
                <Typography level='h4'>Контактные данные</Typography>
            </Stack>
            <Divider sx={{ marginY: 2 }} />

            <Stack spacing={2} sx={{ marginTop: 2 }}>
                {/* Город */}
                <Box>
                    <Typography level="h6">Город</Typography>
                    <Input
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        fullWidth
                        placeholder="Город"
                    />
                </Box>

                {/* Место на карте */}
                <Box>
                    <Typography level="h6">!Поддержка теперь в Telegram!</Typography>
                    <a href='https://t.me/+jb6UxvvANDZiMjcy'>
                    <Button variant="outlined" sx={{ mt: 1 }}>
                        ПОДДЕРЖКА
                    </Button>
                    </a>
                </Box>

                {/* Организатор */}
                <Box>
                    <Typography level="h6">Организатор</Typography>
                    <Input
                        value={organizer}
                        onChange={(e) => setOrganizer(e.target.value)}
                        fullWidth
                        placeholder="Организатор"
                    />
                </Box>

                {/* Номер телефона */}
                <Box>
                    <Typography level="h6">Номер телефона</Typography>
                    <Input
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        fullWidth
                        placeholder="Номер телефона"
                    />
                </Box>

                {/* Электронная почта */}
                <Box>
                    <Typography level="h6">Электронная почта</Typography>
                    <Input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        fullWidth
                        placeholder="Электронная почта"
                    />
                </Box>
            </Stack>

            {/* Кнопка для сохранения */}
            <Button variant="solid" sx={{ marginTop: 3 }} onClick={handleSave}>
                Сохранить изменения
            </Button>
        </Box>
    );
};

export default CMSContacts;