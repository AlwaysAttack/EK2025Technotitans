import { Link } from "@inertiajs/react";
//import { Link } from 'react-router-dom';
import './CMSPlanner.css'
import Divider from '@mui/joy/Divider';

import CardPlannerTemplate from '../card-modules/CardPlannerTemplate';
import Sheet from '@mui/joy/Sheet';
import { Box, IconButton, Stack, Typography, Button, List } from '@mui/joy';
import { FavoriteBorder, Menu, ArrowBackIosNew, ArrowForwardIos }  from '@mui/icons-material';


const CMSPlanner = () => {
    return (  
        <Box className="CMSPageContainer">
            
            <Box className="headerPlanner">
                <Typography level='h4'>Планировщик</Typography>

                <Stack
                direction="row"x
                spacing={2}
                sx={{
                  justifyContent: "flex-end",
                  alignItems: "center",
                }}>
                    <IconButton><ArrowBackIosNew/></IconButton>
                    <Typography level='h4'>9 мая</Typography>
                    <IconButton><ArrowForwardIos/></IconButton>
                </Stack>


                <Stack
                direction="row"
                spacing={0.5}
                sx={{
                  justifyContent: "center",
                  alignItems: "center",
                }}>
                <Link to="/cms-cabinet/create-event">
                <Button>Добавить событие</Button>
                </Link>   
                
                <IconButton><Menu/></IconButton>

                </Stack>
            </Box>

            <Divider></Divider>

            <List className="containerPlanner">
  
            <CardPlannerTemplate></CardPlannerTemplate>
            
            <CardPlannerTemplate></CardPlannerTemplate>

            </List>
        </Box>
    );
}
 
export default CMSPlanner;