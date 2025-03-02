import React from 'react';
import { Box, Typography, Button, Stack, Divider, Card, IconButton } from '@mui/joy';
import { ArrowBackIosNew } from '@mui/icons-material';
import CardPlannerTemplate from './modules/card-modules/CardPlannerTemplate'; // Импортируем ваш компонент карточки
import { Link } from '@inertiajs/react';

// Пример данных для заявок, участников и ролей
const applications = [
    { id: 1, name: 'Иван Иванов', role: 'Волонтер' },
    { id: 2, name: 'Мария Петрова', role: 'Организатор' },
];

const participants = [
    { id: 1, name: 'Алексей Смирнов', role: 'Участник' },
    { id: 2, name: 'Елена Кузнецова', role: 'Участник' },
];

const roles = [
    { id: 1, title: 'Продавец билетиков', count: 25 },
    { id: 2, title: 'Организатор', count: 10 },
];

// Компонент для секции "Заявки"
const ApplicationsSection = ({ applications }) => (
    <Box sx={{ width: '50%' }}>
        <Typography level="h5" sx={{ marginBottom: 2 }}>
            Заявки
        </Typography>
        <Stack spacing={2}>
            {applications.map((app) => (
                <CardPlannerTemplate key={app.id} />
            ))}
        </Stack>
        <Button variant="outlined" sx={{ marginTop: 2 }}>
            Смотреть все
        </Button>
    </Box>
);

// Компонент для секции "Участники"
const ParticipantsSection = ({ participants }) => (
    <Box sx={{ width: '50%' }}>
        <Typography level="h5" sx={{ marginBottom: 2 }}>
            Участники
        </Typography>
        <Stack spacing={2}>
            {participants.map((participant) => (
                <CardPlannerTemplate key={participant.id} />
            ))}
        </Stack>
        <Button variant="outlined" sx={{ marginTop: 2 }}>
            Смотреть все
        </Button>
    </Box>
);

// Компонент для секции "Роли"
const RolesSection = ({ roles }) => (
    <Box>
        <Typography level="h5" sx={{ marginBottom: 2 }}>
            Роли
        </Typography>
        <Stack spacing={2}>
            {roles.map((role) => (
                <Card key={role.id} sx={{ padding: 2, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography level="body1">
                        {role.title} - {role.count} мест
                    </Typography>
                    <Button variant="outlined">
                        Добавить участника
                    </Button>
                </Card>
            ))}
        </Stack>
    </Box>
);

const CMSWorkers = () => {
    return (
        <Box sx={{ padding: '50px', width: '75vw' }}>
            {/* Заголовок */}
            <Box className="headerPlanner">
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
                    <Typography level='h4'>Участники</Typography>
                </Stack>
            </Box>
            <Divider sx={{ marginY: 2 }} />

            {/* Секция: Заявки и участники */}
            <Stack direction="row" spacing={4} sx={{ marginBottom: 4 }}>
                <ApplicationsSection applications={applications} />
                <ParticipantsSection participants={participants} />
            </Stack>

            <Divider sx={{ marginY: 4 }} />

            {/* Секция: Роли */}
            <RolesSection roles={roles} />
        </Box>
    );
};

export default CMSWorkers;