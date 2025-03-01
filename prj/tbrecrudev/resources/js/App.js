import './App.css';
import { Routes, Route } from 'react-router-dom';
import { RegApp } from './pages/registration/RegApp';
import { LoginApp } from './pages/login/LoginApp';
import { CMShome } from './pages/CMS/CMShome';
import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          50: '#FFE8D9',
          100: '#FFD1B3',
          200: '#FFB380',
          300: '#FF944D',
          400: '#FF7F26',
          500: '#FF7300',
          600: '#E66800',
          700: '#CC5C00',
          800: '#B34F00',
          900: '#803800',
        },
      },
    },
  },
});

function App() {
  return (
    <CssVarsProvider theme={theme}>
      <div className='App'>
        <Routes>
          <Route path='/' element={<RegApp />} />
          <Route path='/login' element={<LoginApp/>} />
          <Route path='/cms-cabinet/*' element={<CMShome />} /> {/* Используем /* для вложенных маршрутов */}
        </Routes>
      </div>
    </CssVarsProvider>
  );
}

export default App;