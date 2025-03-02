import React from 'react';
import './UserEventPage.css';
import Header from './modules/header/Header';
import {
  Box,
  Typography,
  Button,
  List,
  ListItem,
  ListItemContent,
  Divider,
  Card,
  Stack,
  Avatar
} from '@mui/joy';
import Banner from './img/img/adadadad.jpg'; // Проверьте путь к изображению
import VSLetImg from './img/img/VSLetImg.png'; // Проверьте путь к изображению
import { Link } from '@inertiajs/react';

import PlaceIcon from '@mui/icons-material/Place';
import Public from '@mui/icons-material/Public';
import ScheduleIcon from '@mui/icons-material/Schedule';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import CardPlannerTemplate from './modules/card-modules/CardPlannerTemplate'; // Проверьте путь к компоненту

const UserEventPage = () => {
  const events = [
    { title: 'Открытие', time: '7:00', description: 'Начало мероприятия' },
    { title: 'Бессмертный полк', time: '9:00', description: 'Шествие в честь памяти' },
    { title: 'Парад Победы', time: '10:00', description: 'Торжественный парад' }
  ];

  return (
    <Box sx={{ margin: '0 auto' }}>
      <Header />
      <img className='Banner' src={Banner} alt="Баннер мероприятия" />

      <Box sx={{ paddingInline: "100px" }}>
        <Link href="/main" sx={{ mt: 10, mb: 6, display: 'flex', textAlign: 'center' }}>
          <Typography level='body-sm'>Вернуться назад</Typography>
        </Link>

        <Stack direction="row" sx={{ display: "flex", gap: 2 }}>
          {/* Левая часть */}
          <Stack direction="column" spacing={2} sx={{ justifyContent: "flex-start", alignItems: "center", paddingInline: 5, width: "80%" }}>
            <Avatar src={VSLetImg} sx={{ width: "250px", height: "250px" }} />
            <Typography level="h3" sx={{ mb: 2, textAlign: "center" }}>
              80-летие Победы в Великой Отечественной войне
            </Typography>
            <Button variant="solid" sx={{ mb: 2 }}>
              Записаться на мероприятие
            </Button>
          </Stack>

          {/* Правая часть */}
          <Box sx={{ width: "100%" }}>
            <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
              <Card sx={{ flex: 1 }}>
                <Typography level="h4" sx={{ mb: 2 }}>
                  Основная информация
                </Typography>

                {/* Место */}
                <ListItem>
                  <ListItemContent>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <Public sx={{ color: 'text.secondary' }} />
                      <Typography level="body1">
                        г. Москва
                      </Typography>
                    </Stack>
                  </ListItemContent>
                </ListItem>

                {/* Кнопка "Показать на карте" */}
                <ListItem>
                  <ListItemContent>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <PlaceIcon sx={{ color: 'text.secondary' }} />
                      <Button variant="plain" sx={{ width: "fit-content" }}>
                        Показать на карте
                      </Button>
                    </Stack>
                  </ListItemContent>
                </ListItem>

                {/* Время */}
                <ListItem>
                  <ListItemContent>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <ScheduleIcon sx={{ color: 'text.secondary' }} />
                      <Typography level="body1">
                        8 мая - 9 мая, 7:00 - 22:00
                      </Typography>
                    </Stack>
                  </ListItemContent>
                </ListItem>

                {/* Кнопка "Свободные заявки на волонтёрство" */}
                <ListItem>
                  <ListItemContent>
                    <Stack direction="row" spacing={1} alignItems="center">
                      <VolunteerActivismIcon sx={{ color: 'text.secondary' }} />
                      <Button variant="plain" sx={{ width: "fit-content" }}>
                        Свободные заявки на волонтёрство
                      </Button>
                    </Stack>
                  </ListItemContent>
                </ListItem>
              </Card>

              <Card sx={{ flex: 1 }}>
                <Typography level="h4" sx={{ mb: 2 }}>
                  Контактные данные
                </Typography>
                <Typography level="body1" sx={{ mb: 1 }}>
                  Гольский Даниил
                </Typography>
                <Typography level="body1" sx={{ mb: 1 }}>
                  +79521733733
                </Typography>
                <Typography level="body1">
                  dgolsky07@gmail.com
                </Typography>
              </Card>
            </Box>

            <Card sx={{ mb: 4 }}>
              <Typography level="h4">Описание мероприятия</Typography>
              <Typography level="body1">
                80-летие Победы в Великой Отечественной войне — это не просто дата в календаре, это великий символ мужества, стойкости и единства нашего народа. Это день, когда мы с гордостью вспоминаем подвиги наших дедов и прадедов, отстоявших мир и свободу ценой невероятных усилий и жертв.
              </Typography>
            </Card>
          </Box>
        </Stack>

        {/* ПЕРЕХОД 1 */}
        <Divider sx={{ my: 4 }} />

        {/* Секция: Свободные заявки на волонтёрство */}

        <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
          <Box sx={{ width: '50%' }}>
            <Typography level="h4" sx={{ mb: 2 }}>
              План мероприятия
            </Typography>
          </Box>

          <Card sx={{ width: '50%', padding: 2 }}>
            <Typography level="h5" sx={{ mb: 2 }}>
              Список событий
            </Typography>
            <List>
              {events.map((event, index) => (
                <CardPlannerTemplate key={index} event={event} />
              ))}
            </List>
          </Card>
        </Stack>

        {/* ПЕРЕХОД 2 */}
        <Divider sx={{ my: 4 }} />

        {/* Секция: План мероприятия */}

        <Stack direction="row" spacing={4} sx={{ mb: 4 }}>
          <Box sx={{ width: '50%' }}>
            <Typography level="h4" sx={{ mb: 2 }}>
              Свободные заявки на волонтёрство
            </Typography>
          </Box>

          <Card sx={{ width: '50%', padding: 2 }}>
            <Typography level="h5" sx={{ mb: 2 }}>
              Доступные вакансии
            </Typography>
            <List>
              <ListItem key="worker1">
                <ListItemContent>
                  <Typography level="body1">
                    <strong>Разнорабочие</strong> — Набор открыт
                  </Typography>
                </ListItemContent>
              </ListItem>
              <ListItem key="worker2">
                <ListItemContent>
                  <Typography level="body1">
                    <strong>Уборщик</strong> — Набор открыт
                  </Typography>
                </ListItemContent>
              </ListItem>
              <ListItem key="worker3">
                <ListItemContent>
                  <Typography level="body1">
                    <strong>Экскурсоводы</strong> — Набор открыт
                  </Typography>
                </ListItemContent>
              </ListItem>
            </List>
            <Button variant="solid" sx={{ mt: 2 }}>
              Подать заявку
            </Button>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default UserEventPage ;