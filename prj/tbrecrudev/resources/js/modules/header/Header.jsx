import './header.css';
import { CssVarsProvider } from '@mui/joy/styles';
import Sheet from '@mui/joy/Sheet';
import Stack from '@mui/joy/Stack';
import TEXEvents from './../../img/img/texevents.png';
import PlusIco from './../../img/svg/light_plus.svg';
import checklistIco from './../../img/svg/checklist.svg';
import chatoutlineIco from './../../img/svg/chat-outline.svg';
import Add from '@mui/icons-material/Add';

import Chat from '@mui/icons-material/Chat';
import Checklist from '@mui/icons-material/Checklist';
import { Link } from '@inertiajs/react'; // Импортируем Link из Inertia.js
import Button from '@mui/joy/Button';

const Header = () => {
    return (
        <Sheet className="header">
            {/* Используем href вместо to */}
            <Link href="/cms-cabinet" className='TEXEvents_Img'>
                <img src={TEXEvents} alt="TEXEvents Logo" />
            </Link>
            <Stack className="menu"
                direction="row"
                spacing={4}
                sx={{
                    justifyContent: "center",
                    alignItems: "center",
                }}>

                <Button variant="plain" color="neutral" startDecorator={<Chat fontSize="lg"></Chat>}>
                    <span>сообщения</span>
                </Button>
                <Button variant="plain" color="neutral" startDecorator={<Checklist fontSize="lg" />}>
                    <span>мероприятия</span>
                </Button>

                <Button className='newEvent' href=''startDecorator={<Add fontSize="lg" />}>
                    <span>новое мероприятие</span>
                </Button>
            </Stack>
        </Sheet>
    );
}

export default Header;