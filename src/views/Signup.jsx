import './Signup.css'
import React from 'react';
import { Lock } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { handleSignup, handleLogin } from '../controllers/loginController.js';

function Signup() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();

    const Signup = async (e) => {
        e.preventDefault();
        try {
            let success = await handleSignup(username, password, confirmPassword);
            if (success) {
                await handleLogin(username, password);
                navigate('/dashboard');
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            document.getElementById('errorMessage').innerText = error.message || 'Error desconocido durante el inicio de sesión';
            document.getElementById('errorMessage').style.visibility = 'visible';
        }

    };

    return (
        <div className="signup-wrapper">
            <div className='signup-container'>
                <Lock ></Lock>
                <h1>Crear cuenta</h1>
                <p style={{ 'color': '#818181ff' }}>Introduce los datos solicitados para crear una cuenta</p>
                <form className='signup-form' onSubmit={Signup}>

                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" placeholder='jonhdoe' value={username} onChange={(e) => setUsername(e.target.value)} required />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder='introduce una contraseña' value={password} onChange={(e) => setPassword(e.target.value)} required />

                    <label htmlFor="password"> Repetir Contraseña</label>
                    <input type="password" id="password" name="password" placeholder='contraseña repetida' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />


                    <button type="submit" id='signupButton'>signup</button>
                </form>
                <p id='errorMessage'></p>
            </div>
        </div >
    );
}

export default Signup;