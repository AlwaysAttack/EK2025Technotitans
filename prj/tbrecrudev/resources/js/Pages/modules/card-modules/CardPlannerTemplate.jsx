import './CardPlanner.css';
import { Box, IconButton, Stack, Typography, Card } from '@mui/joy';
import { PeopleAlt, MoreHoriz, ArrowForwardIos, Delete } from '@mui/icons-material';
import { Link } from '@inertiajs/react';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

const CardPlannerTemplate = ({ eventId, title, time, onDelete }) => {
    return (
        <Card invertedColors size="lg" orientation="horizontal" color="neutral"
            sx={{ alignItems: 'center', justifyContent: 'space-between' }}>
            <Stack direction="row"
                spacing={3}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>
                <PeopleAlt />
                <Box>
                    <Typography>{title}</Typography>
                    <Typography>{time}</Typography>
                </Box>
            </Stack>
            <Stack direction="row"
                spacing={1}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                <Dropdown>
                    <MenuButton variant="plain"><MoreHoriz />
                    </MenuButton>
                    <Menu variant="soft">
                        <MenuItem>Изменить</MenuItem>
                        <MenuItem onClick={() => onDelete(eventId)}>Удалить</MenuItem>
                    </Menu>
                </Dropdown>

                <Link href={`/event/${eventId}`}>
                    <IconButton>
                        <ArrowForwardIos />
                    </IconButton>
                </Link>
            </Stack>
        </Card>
    );
};

export default CardPlannerTemplate;