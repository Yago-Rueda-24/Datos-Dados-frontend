import './Login.css'
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
import { useState } from 'react';
import { handleLogin } from '../controllers/loginController';
import { useNavigate } from 'react-router-dom';
function Login() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const log = async (e) => {
        e.preventDefault();
        try {
            await handleLogin(username, password);
            navigate('/dashboard');
        } catch (error) {
            console.error('Error during login:', error.message);
            document.getElementById('errorMessage').innerText = error.message || 'Error desconocido durante el inicio de sesión';
            document.getElementById('errorMessage').style.visibility = 'visible';
        }

    };

    return (
        <div className="login-wrapper">
            <div className='login-container'>
                <Lock ></Lock>
                <h1 style={{ 'color': '#83563f' }} >Iniciar sesión</h1>
                <p style={{ 'color': '#818181ff' }}>Introduce tus credenciales para iniciar sesión</p>
                <form className='login-form' onSubmit={log}>

                    <label className='input' htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" placeholder='jonhdoe' value={username} onChange={(e) => setUsername(e.target.value)} required />

                    <label className='input' htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder='password segura' value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <button type="submit" id='loginButton'>Login</button>
                </form>
                <p id='errorMessage'></p>
            </div>
        </div >

    );
}
export default Login;