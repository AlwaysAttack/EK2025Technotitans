import { Link } from '@inertiajs/react';
import './sidebar.css';
import List from "@mui/joy/List";
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import Avatar from '@mui/joy/Avatar'; // Импортируем Avatar для круглого логотипа
import { Divider } from '@mui/joy';

const Sidebar = () => {
    return (
        <div className="sidebar_div">
            {/* Заголовок с логотипом */}
            <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: 2, 
                marginBottom: 2,
                paddingLeft:"15px"
            }}>
                <Avatar
                    src="/path/to/your/logo.png" // Укажите путь к вашему логотипу
                    alt="Логотип"
                    sx={{ width: 56, height: 56 }} // Размер логотипа
                />
                <Typography level='h3' href='/80yo'>80-летие Победы в Великой Отечественной войне</Typography>
            </Box>

            <Divider></Divider>

            <div className="sidebar">
                {/* Переходы по страничкам управления мероприятием */}
                <List>
                    {/* Основные */}
                    <ListItem>
                        <Link href="/" style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton>
                                <ListItemContent>
                                    ОСНОВНЫЕ
                                </ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Контактные данные */}
                    <ListItem>
                        <Link href="/cms-cabinet/contacts" style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton>
                                <ListItemContent>
                                    КОНТАКТНЫЕ ДАННЫЕ
                                </ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* События */}
                    <ListItem>
                        <Link href="/cms-cabinet/planner" style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton>
                                <ListItemContent>
                                    СОБЫТИЯ
                                </ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Работники */}
                    <ListItem>
                        <Link href="/cms-cabinet/employees" style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton>
                                <ListItemContent>
                                    РАБОТНИКИ
                                </ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Партнеры */}
                    <ListItem>
                        <Link href="/cms-cabinet/partners" style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton>
                                <ListItemContent>
                                    ПАРТНЕРЫ
                                </ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>

                    {/* Аналитика */}
                    <ListItem>
                        <Link href="/cms-cabinet/analytics" style={{ textDecoration: 'none', width: '100%' }}>
                            <ListItemButton>
                                <ListItemContent>
                                    АНАЛИТИКА
                                </ListItemContent>
                            </ListItemButton>
                        </Link>
                    </ListItem>
                </List>
            </div>
        </div>
    );
};

export default Sidebar;