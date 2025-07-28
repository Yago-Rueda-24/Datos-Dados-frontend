const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function loginRequest(username, password) {
    const response = await fetch(baseUrl+"/user/login", {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
        
        let errorMessage = 'Error en la solicitud de inicio de sesión';
        try {
            const errorData = await response.json();
            errorMessage = errorData.message || errorMessage;
        } catch {
            const text = await response.text();
            if (text) errorMessage = text;
        }

        throw new Error(errorMessage);
    }


    const data = await response.json();
    return data.token;
}
