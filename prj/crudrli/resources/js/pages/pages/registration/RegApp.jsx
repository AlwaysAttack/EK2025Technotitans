import './RegApp.css';
import './../../index.css';
import { useState } from 'react';
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import Checkbox from '@mui/joy/Checkbox';
import Box from '@mui/joy/Box';
import Typography from '@mui/joy/Typography';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/joy';

const RegApp = () => {
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
            <Box className="regBlank">
                <Typography level='h2'>РЕГИСТРАЦИЯ</Typography>

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

                      

                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 2 }}>
                        <Checkbox
                            checked={rememberMe}
                            onChange={(e) => setRememberMe(e.target.checked)}
                            label="Запомнить меня"
                        />
                    </Box>

                    <Button type="submit" fullWidth>
                        Зарегистрироваться
                    </Button>

                    <Typography sx={{ marginTop: 2, textAlign: 'center' }}>
                        Уже есть аккаунт? <Link to="/login">Войти</Link>
                    </Typography>
                </form>
            </Box>
        </div>
    );
};

export { RegApp };