import React, { useState } from 'react';
import { Box, Typography, Button, Input, Stack, Divider } from '@mui/joy';
import { useDropzone } from 'react-dropzone';

const CMSGeneral = () => {
    const [eventName, setEventName] = useState('');
    const [eventDescription, setEventDescription] = useState('');
    const [eventDate, setEventDate] = useState('');
    const [logo, setLogo] = useState(null);
    const [photos, setPhotos] = useState([]);

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
        console.log('Название:', eventName);
        console.log('Описание:', eventDescription);
        console.log('Дата:', eventDate);
        console.log('Логотип:', logo);
        console.log('Фотографии:', photos);
    };

    return (
        <Box sx={{ padding:'50px', width:'75vw' }}>

            <Typography level='h4'>Основные настройки</Typography>

            <Divider></Divider>

            <Stack spacing={2} sx={{ marginTop: 2 }}>
                {/* Название мероприятия */}
                <Box>
                    <Typography level="h6">Название</Typography>
                    <Input
                        value={eventName}
                        onChange={(e) => setEventName(e.target.value)}
                        fullWidth
                        placeholder="Введите название мероприятия"
                    />
                </Box>

                {/* Описание мероприятия */}
                <Box>
                    <Typography level="h6">Описание</Typography>
                    <Input
                        value={eventDescription}
                        onChange={(e) => setEventDescription(e.target.value)}
                        fullWidth
                        multiline
                        rows={4}
                        placeholder="Введите описание мероприятия"
                    />
                </Box>

                {/* Дата проведения */}
                <Box>
                    <Typography level="h6">Дата проведения</Typography>
                    <Input
                        value={eventDate}
                        onChange={(e) => setEventDate(e.target.value)}
                        fullWidth
                        placeholder="Введите дату проведения"
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

            <Button variant="solid" sx={{ marginTop: 3 }} onClick={handleSave}>
                Сохранить изменения
            </Button>
        </Box>
    );
};

export default CMSGeneral;