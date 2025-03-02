import { useForm } from '@inertiajs/react'; // Импортируем useForm из Inertia.js
import { useState } from 'react';
import { Box, IconButton, Stack, Typography, Button, Divider, Input, Select, Option, FormLabel } from '@mui/joy';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Link } from '@inertiajs/react';

const CreateActionEventPage = () => {
    const { data, setData, post, processing, errors } = useForm({
        title: '',
        description: '',
        date: '',
        start_time: '',
        end_time: '',
        type: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        post('/downloading'); // Отправляем данные на маршрут /downloading
    };

    return (
        <div className="CMSPageContainer">
            <Box className="headerPlanner">
                <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Link href="/cms-cabinet/planner">
                        <IconButton><ArrowBackIosNew /></IconButton>
                    </Link>
                    <Typography level='h4'>Создать событие</Typography>
                </Stack>
            </Box>

            <Divider />

            <form onSubmit={handleSubmit}>
                <Stack spacing={2} sx={{ marginTop: "15px" }}>
                    <Input
                        placeholder="Название"
                        value={data.title}
                        onChange={(e) => setData('title', e.target.value)}
                        required
                    />

                    <Input
                        placeholder="Описание"
                        value={data.description}
                        onChange={(e) => setData('description', e.target.value)}
                        required
                    />

                    <FormLabel>Дата события</FormLabel>
                    <Input
                        type="date"
                        value={data.date}
                        onChange={(e) => setData('date', e.target.value)}
                        required
                    />

                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography>Начало</Typography>
                        <Input
                            type="time"
                            value={data.start_time}
                            onChange={(e) => setData('start_time', e.target.value)}
                            required
                        />
                        <Typography>Конец</Typography>
                        <Input
                            type="time"
                            value={data.end_time}
                            onChange={(e) => setData('end_time', e.target.value)}
                            required
                        />
                    </Stack>

                    <Select
                        placeholder="Тип события"
                        value={data.type}
                        onChange={(e, newValue) => setData('type', newValue)}
                        required
                    >
                        <Option value="Общий">Общий</Option>
                        <Option value="Рабочий">Рабочий</Option>
                        <Option value="Свободный-рабочий">Свободный-рабочий</Option>
                    </Select>

                    <Button type="submit" disabled={processing}>
                        {processing ? 'Отправка...' : 'Опубликовать'}
                    </Button>
                </Stack>
            </form>
        </div>
    );
};

export default CreateActionEventPage;