import '../css/app.css';
import './bootstrap';
//import App from './App.js';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import { createRoot } from 'react-dom/client';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.jsx`,
            import.meta.glob('./Pages/**/*.jsx'),
        ),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import { RegApp } from './pages/registration/RegApp';
// import { LoginApp } from './pages/login/LoginApp';
// import { CMShome } from './pages/CMS/CMShome';
// import { CssVarsProvider, extendTheme } from '@mui/joy/styles';

// const theme = extendTheme({
//   colorSchemes: {
//     light: {
//       palette: {
//         primary: {
//           50: '#FFE8D9',
//           100: '#FFD1B3',
//           200: '#FFB380',
//           300: '#FF944D',
//           400: '#FF7F26',
//           500: '#FF7300',
//           600: '#E66800',
//           700: '#CC5C00',
//           800: '#B34F00',
//           900: '#803800',
//         },
//       },
//     },
//   },
// });

// function App() {
//   return (
//     <CssVarsProvider theme={theme}>
//       <div className='App'>
//         <Routes>
//           <Route path='/' element={<RegApp />} />
//           <Route path='/login' element={<LoginApp/>} />
//           <Route path='/cms-cabinet/*' element={<CMShome />} /> {/* Используем /* для вложенных маршрутов */}
//         </Routes>
//       </div>
//     </CssVarsProvider>
//   );
// }

// export default App;