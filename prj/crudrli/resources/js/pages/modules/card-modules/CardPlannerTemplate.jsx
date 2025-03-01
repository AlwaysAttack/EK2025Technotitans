import './CardPlanner.css'

import { Box, IconButton, Stack, Typography, Button, Sheet, Card} from '@mui/joy';
import { WorkOutline, PeopleAlt, PersonAddAlt, MoreHoriz, ArrowForwardIos}  from '@mui/icons-material';

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

import { Link } from 'react-router-dom';
import { Icon } from '@mui/material';

const CardPlannerTemplate = () => {
    return ( 
        /* переход на событие <Link> */
        <Link>
        
        <Card invertedColors size="lg" orientation="horizontal" color="neutral" 
        sx={{alignItems: 'center', justifyContent: 'space-between'}}> 
        <Stack direction="row"
  spacing={3}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}>
        <PeopleAlt></PeopleAlt>
        <Box>
            <Typography>Время</Typography>
            <Typography>Время</Typography>
        </Box>
        </Stack>
        <Stack direction="row"
  spacing={1}
  sx={{
    justifyContent: "center",
    alignItems: "center",
  }}>

        <Dropdown>
        <MenuButton variant="plain"><MoreHoriz/>
        </MenuButton>
        <Menu variant="soft">
            <MenuItem>Изменить</MenuItem>
            <MenuItem>Удалить</MenuItem>
        </Menu>
        </Dropdown>
        <ArrowForwardIos/>

        </Stack>

        </Card>

        </Link>
    );
}
 
export default CardPlannerTemplate;