import { loginRequest, signupRequest } from "../api/loginAPI";


export async function handleLogin(username, password) {
    // Aquí puedes validar o transformar si hace falta
    try {
        const token = await loginRequest(username, password);
        localStorage.setItem('token', token);
        console.log(localStorage.getItem('token'));
    } catch (err) {
        console.error('Error en login:', err.message);
        throw err;
    }
}

export async function handleSignup(username, password, confirmPassword) {
    if (password !== confirmPassword) {
        throw new Error('Las contraseñas no coinciden');
    }
    try {
        const success = await signupRequest(username, password,confirmPassword);
        return success; 
    } catch (err) {
        console.error('Error en signup:', err.message);
        throw err;
    }
}
