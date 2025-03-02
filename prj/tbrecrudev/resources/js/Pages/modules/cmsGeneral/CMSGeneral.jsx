import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Input, Stack, Divider } from '@mui/joy';
import { useDropzone } from 'react-dropzone';
import { Link } from '@inertiajs/react';

const CMSGeneral = ({ event }) => {
    // Инициализация состояний на основе переданного event
    const [eventName, setEventName] = useState(event?.name || '');
    const [eventDescription, setEventDescription] = useState(event?.description || '');
    const [eventDate, setEventDate] = useState(event?.date || '');
    const [startTime, setStartTime] = useState(event?.start_time || '');
    const [endTime, setEndTime] = useState(event?.end_time || '');
    const [eventType, setEventType] = useState(event?.type || '');
    const [logo, setLogo] = useState(event?.logo || null);
    const [photos, setPhotos] = useState(event?.photos || []);

    // Обновление состояний при изменении event
    useEffect(() => {
        setEventName(event?.name || '');
        setEventDescription(event?.description || '');
        setEventDate(event?.date || '');
        setStartTime(event?.start_time || '');
        setEndTime(event?.end_time || '');
        setEventType(event?.type || '');
        setLogo(event?.logo || null);
        setPhotos(event?.photos || []);
    }, [event]);

    const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setLogo(acceptedFiles[0]);
        },
    });

    const { getRootProps: getPhotosRootProps, getInputProps: getPhotosInputProps } = useDropzone({
        accept: 'image/*',
        onDrop: (acceptedFiles) => {
            setPhotos([...photos, ...acceptedFiles.slice(0, 5 - photos.length)]);
        },
    });

    const handleSave = () => {
        // Логика для сохранения изменений
        const updatedEvent = {
            name: eventName,
            description: eventDescription,
            date: eventDate,
            start_time: startTime,
            end_time: endTime,
            type: eventType,
            logo: logo,
            photos: photos,
        };
        console.log('Обновленный event:', updatedEvent);
    };

    return (
        <Box sx={{ padding: '50px', width: '75vw' }}>
            <Typography level='h4'>Описание события---{event.title}</Typography>
            <Divider></Divider>

            <Stack spacing={2} sx={{ marginTop: 2 }}>
                {/* Название мероприятия */}
                <Box>
                    <Typography level="h6">Название</Typography>
                    <Input
                        value={event.title}
                        onChange={(e) => setEventName(e.target.value)}
                        fullWidth
                        placeholder="Название мероприятия"
                    />
                </Box>

                {/* Описание мероприятия */}
                <Box>
                    <Typography level="h6">Описание</Typography>
                    <Input
                        value={event.description}
                        onChange={(e) => setEventDescription(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Описание мероприятия"
                    />
                </Box>

                {/* Дата проведения */}
                <Box>
                    <Typography level="h6">Дата проведения</Typography>
                    <Input
                        value={event.date}
                        onChange={(e) => setEventDate(e.target.value)}
                        fullWidth
                        placeholder="Дата проведения"
                    />
                </Box>

                {/* Время начала */}
                <Box>
                    <Typography level="h6">Время начала</Typography>
                    <Input
                        value={event.start_time}
                        onChange={(e) => setStartTime(e.target.value)}
                        fullWidth
                        placeholder="Время начала (например, 14:00)"
                    />
                </Box>

                {/* Время окончания */}
                <Box>
                    <Typography level="h6">Время окончания</Typography>
                    <Input
                        value={event.end_time}
                        onChange={(e) => setEndTime(e.target.value)}
                        fullWidth
                        placeholder="Время окончания (например, 18:00)"
                    />
                </Box>

                {/* Тип мероприятия */}
                <Box>
                    <Typography level="h6">Тип мероприятия</Typography>
                    <Input
                        value={event.type}
                        onChange={(e) => setEventType(e.target.value)}
                        fullWidth
                        placeholder="Тип мероприятия"
                    />
                </Box>
            </Stack>

            <Divider sx={{ marginY: 3 }} />

            <Typography level="h4">Галерея</Typography>

            <Stack spacing={2} sx={{ marginTop: 2 }}>
                {/* Логотип */}
                <Box>
                    <Typography level="h6">Логотип</Typography>
                    <Box
                        {...getLogoRootProps()}
                        sx={{
                            border: '2px dashed #ccc',
                            borderRadius: '4px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: logo ? '#e0f7fa' : '#f5f5f5',
                        }}
                    >
                        <input {...getLogoInputProps()} />
                        {logo ? (
                            <Typography>Выбран файл: <strong>{logo.name}</strong></Typography>
                        ) : (
                            <Typography>Перетащите файл сюда или нажмите для выбора</Typography>
                        )}
                    </Box>
                </Box>

                {/* Фотографии */}
                <Box>
                    <Typography level="h6">Фотографии</Typography>
                    <Box
                        {...getPhotosRootProps()}
                        sx={{
                            border: '2px dashed #ccc',
                            borderRadius: '4px',
                            padding: '20px',
                            textAlign: 'center',
                            cursor: 'pointer',
                            backgroundColor: photos.length ? '#e0f7fa' : '#f5f5f5',
                        }}
                    >
                        <input {...getPhotosInputProps()} />
                        {photos.length ? (
                            <Typography>Выбрано файлов: <strong>{photos.length}</strong></Typography>
                        ) : (
                            <Typography>Перетащите файлы сюда или нажмите для выбора</Typography>
                        )}
                    </Box>
                </Box>
            </Stack>
            <Link href='/main'>
            <Button variant="solid" sx={{ marginTop: 3 }} >
                На главную
            </Button>
            </Link>
        </Box>
    );
};

export default CMSGeneral;