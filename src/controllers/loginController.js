import { loginRequest } from "../api/loginAPI";
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
