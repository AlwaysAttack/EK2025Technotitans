import { Link } from '@inertiajs/react';
import './CMSPlanner.css';
import Divider from '@mui/joy/Divider';
import CardPlannerTemplate from '../card-modules/CardPlannerTemplate';
import { Box, IconButton, Stack, Typography, Button, List } from '@mui/joy';
import { FavoriteBorder, Menu, ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import { useState } from 'react';

const CMSPlanner = ({ events }) => {
    const [currentDate, setCurrentDate] = useState(new Date());

    const handlePreviousDate = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() - 1);
        setCurrentDate(newDate);
    };

    const handleNextDate = () => {
        const newDate = new Date(currentDate);
        newDate.setDate(newDate.getDate() + 1);
        setCurrentDate(newDate);
    };

    const handleMenuClick = () => {
        console.log('Меню открыто');
    };

    return (
        <Box className="CMSPageContainer">
            <Box className="headerPlanner" sx={{
    display: 'flex',
    justifyContent: 'space-between',
}}>
                
                <Typography level='h4'>Планировщик</Typography>

                <Stack
                    direction="row"
                    spacing={2}
                    sx={{
                        justifyContent: "flex-end",
                        alignItems: "center",
                    }}>
                    <IconButton onClick={handlePreviousDate}>
                        <ArrowBackIosNew />
                    </IconButton>

                    <Typography level='h4'>
                        {currentDate.toLocaleDateString()}
                    </Typography>

                    <IconButton onClick={handleNextDate}>
                        <ArrowForwardIos />
                    </IconButton>
                </Stack>

                <Stack
                    direction="row"
                    spacing={0.5}
                    sx={{
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                    <Link href="/cms-cabinet/create-event">
                        <Button >Добавить событие</Button>
                    </Link>

                    <IconButton onClick={handleMenuClick}>
                        <Menu />
                    </IconButton>
                </Stack>
            </Box>

            <Divider></Divider>

            <List className="containerPlanner">
                {events.map((event) => (
                    <CardPlannerTemplate
                        key={event.id}
                        eventId={event.id}
                        title={event.title}
                        time={event.start_time + ' - ' + event.end_time}
                    />
                ))}
            </List>
        </Box>
    );
}

export default CMSPlanner;