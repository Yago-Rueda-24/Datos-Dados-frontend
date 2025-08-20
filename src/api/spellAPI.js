const baseUrl = import.meta.env.VITE_API_BASE_URL;

export async function fetchPersonalSpells(search) {
    const response = await fetch(
        `${baseUrl}/spell/list?token=${localStorage.getItem("token")}&search=${encodeURIComponent(search)}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    );

    if (!response.ok) {
        let errorMessage = 'Error en la solicitud de recuperación de hechizos personales';
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
    return data;
}

export async function fetchWOTSpells(search) {
    const response = await fetch(
        `${baseUrl}/spell/wotspells?token=${localStorage.getItem("token")}&search=${encodeURIComponent(search)}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    );

    if (!response.ok) {
        let errorMessage = 'Error en la solicitud de recuperación de hechizos personales';
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
    return data;
}

export async function fetchPublicpells(search) {
    const response = await fetch(
        `${baseUrl}/spell/public?token=${localStorage.getItem("token")}&search=${encodeURIComponent(search)}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    );

    if (!response.ok) {
        let errorMessage = 'Error en la solicitud de recuperación de hechizos personales';
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
    return data;
}

export async function fetchSpell(id) {
    const response = await fetch(
        `${baseUrl}/spell?token=${localStorage.getItem("token")}&id=${id}`,
        {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
    );
    if (!response.ok) {
        let errorMessage = 'Error en la solicitud de recuperación del hechizo';
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
    return data;
}