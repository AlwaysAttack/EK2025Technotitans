import './LoginApp.css'; // Создайте файл LoginApp.css для стилей формы входа
import './../../index.css';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Link } from '@inertiajs/react'; // Исправленный импорт

const LoginApp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Здесь можно добавить логику для отправки данных на сервер
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Remember Me:', rememberMe);
    };

    return (
        <div className="container">
            <Box className="loginBlank">
                <Typography level='h2'>ВХОД</Typography>

                <form onSubmit={handleSubmit}>
                    <FormControl sx={{ marginBottom: 2 }}>
                        <FormLabel>Логин (Email)</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            placeholder="Введите ваш email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </FormControl>

                    <FormControl sx={{ marginBottom: 2 }}>
                        <FormLabel>Пароль</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="Введите ваш пароль"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </FormControl>

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent:'center', marginBottom: 2 }}>
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            label="Запомнить меня"
                        />
                    </Box>

                    <Link href="/main">
                    <Button  type="submit" fullWidth>
                        Войти
                    </Button>
                    </Link>

                    <Typography sx={{ marginTop: 2, textAlign: 'center' }}>
                        Нет аккаунта? <Link href="/registerp">Зарегистрироваться</Link>
                    </Typography>
                </form>
            </Box>
        </div>
    );
};

export default LoginApp ;