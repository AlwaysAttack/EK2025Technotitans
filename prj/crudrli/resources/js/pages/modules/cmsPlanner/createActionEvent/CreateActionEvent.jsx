import './CreateActionEvent.css';
import { useState } from 'react';
import { Box, IconButton, Stack, Typography, Button, Divider, Input, Select, Option, FormLabel } from '@mui/joy';
import { ArrowBackIosNew } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const CreateActionEventPage = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState(''); // Состояние для хранения даты
    const [eventTime, setEventTime] = useState({ start: '', end: '' });
    const [eventType, setEventType] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Создаем FormData для отправки данных
        const formData = new FormData();
        formData.append('title', eventName);
        formData.append('description', eventDescription);
        formData.append('date', eventDate); // Добавляем дату в FormData
        formData.append('time', `${eventTime.start} – ${eventTime.end}`);
        formData.append('type', eventType);

        try {
            const response = await fetch('https://your-server-endpoint.com/api/events', {
                method: 'POST',
                body: formData, // Отправляем FormData
                // Заголовки не нужны, так как FormData автоматически устанавливает multipart/form-data
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log('Success:', result);
        } catch (error) {
            console.error('Error:', error);
        }
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
                    <Link to="/cms-cabinet/planner">
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
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        required
                    />

                    <Input
                        placeholder="Описание"
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        required
                    />

                    {/* Поле для выбора даты */}
                    <FormLabel>Дата события</FormLabel>
                    <Input
                        type="date"
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        required
                    />

                    <Stack direction="row" spacing={2} alignItems="center">
                        <Typography>Начало</Typography>
                        <Input
                            type="time"
                            value={eventTime.start}
                            onChange={(e) => setEventTime({ ...eventTime, start: e.target.value })}
                            required
                        />
                        <Typography>Конец</Typography>
                        <Input
                            type="time"
                            value={eventTime.end}
                            onChange={(e) => setEventTime({ ...eventTime, end: e.target.value })}
                            required
                        />
                    </Stack>

                    <Select
                        placeholder="Тип события"
                        value={eventType}
                        onChange={(e, newValue) => setEventType(newValue)}
                        required
                    >
                        <Option value="Общий">Общий</Option>
                        <Option value="Рабочий">Рабочий</Option>
                        <Option value="Свободный-рабочий">Свободный-рабочий</Option>
                    </Select>

                    <Button type="submit">Опубликовать</Button>
                </Stack>
            </form>
        </div>
    );
};

export default CreateActionEventPage;