import { Route, Routes, Outlet } from "react-router-dom";
import Header from "../../modules/header/Header";
import Sidebar from "../../modules/sidebar/Sidebar";
import './CMSHome.css';
import CMSGeneral from "../../modules/cmsGeneral/CMSGeneral";
import CMSPlanner from "../../modules/cmsPlanner/CMSPlanner";
import CreateActionEventPage from "../../modules/cmsPlanner/createActionEvent/CreateActionEvent";
import { Box, Typography, Divider } from "@mui/joy";

// Основной компонент для отображения статичных элементов и контента
const CMSLayout = () => {
  return (
    <div className="cmsHome">
      <Header />
      <Box sx={{
        display: 'flex',
        alignItems: 'stretch',
      }}>
        <Sidebar />
        {/* Outlet для отображения вложенных маршрутов */}
        <Divider orientation="vertical"/>
        <Box sx={{ flexGrow: 1, padding: '20px', height:'85vh' }}>
          <Outlet />
        </Box>
      </Box>
    </div>
  );
};

const CMShome = () => {
  return (
    <Routes>
    {/* Основной маршрут с Layout (Header и Sidebar) */}
    <Route path="/" element={<CMSLayout />}>
    {/* Вложенные маршруты для отображения в основной области */}
    <Route index element={<CMSGeneral />} /> {/* По умолчанию */}
    <Route path="planner" element={<CMSPlanner />} />
     <Route path="create-event" element={<CreateActionEventPage />} />
    </Route>
    </Routes>
  );
};

export { CMShome };