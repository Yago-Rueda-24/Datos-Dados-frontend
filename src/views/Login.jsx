import './Login.css'
import { Eye, EyeOff, Mail, Lock } from "lucide-react"
function Login() {
    return (
        <div className="login-wrapper">
            <div className='login-container'>
                <Lock ></Lock>
                <h1>Iniciar sesión</h1>
                <p style={{ 'color': '#818181ff' }}>Introduce tus credenciales para iniciar sesión</p>
                <form className='login-form'>

                    <label htmlFor="username">Nombre de usuario</label>
                    <input type="text" id="username" name="username" placeholder='jonh@example.com' required />

                    <label htmlFor="password">Contraseña</label>
                    <input type="password" id="password" name="password" placeholder='password segura' required />

                    <button type="submit">Login</button>
                </form>
            </div>
        </div >

    );
}
export default Login;