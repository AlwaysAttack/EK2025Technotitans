//import { Link } from '@inertiajs/react'; // Используем Link для навигации
import Header from "../modules/header/Header";
import Sidebar from "../modules/sidebar/Sidebar";
import './CMSHome.css';
import CMSGeneral from "../modules/cmsGeneral/CMSGeneral";
import CMSPlanner from "../modules/cmsPlanner/CMSPlanner";
import CreateActionEventPage from "../modules/cmsPlanner/createActionEvent/CreateActionEvent";
import { Box, Divider } from "@mui/joy";

// Основной компонент для отображения статичных элементов и контента
const CMSLayout = ({ children }) => {
  return (
    <div className="cmsHome">
      <Header />
      <Box sx={{
        display: 'flex',
        alignItems: 'stretch',
      }}>
        <Sidebar />
        {/* Divider для разделения Sidebar и основного контента */}
        <Divider orientation="vertical" />
        {/* Основная область контента */}
        <Box sx={{ flexGrow: 1, padding: '20px', height: '85vh' }}>
          {children} {/* Вложенные страницы отображаются здесь */}
        </Box>
      </Box>
    </div>
  );
};

const CMShome = () => {
  return (
    <CMSLayout>
      {/* Здесь можно отображать контент в зависимости от текущей страницы */}
      <CMSGeneral /> {/* По умолчанию */}
    </CMSLayout>
  );
};

export default CMShome;