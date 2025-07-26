import React from 'react';
import './Home.css';

function Home() {
    return (
        <>
            <header className='head'>
                <h1 className='title'>FinZen</h1>
                <div className='buttons'>
                    <button className='login'>Iniciar Sesion</button>
                    <button className='signup'>Crear Cuenta</button>
                </div>
            </header>
            <section className='hero' >
                <h1 className='hero-title'>Transforma tu relación con el dinero</h1>
                <p className='hero-description'>FinZen es la plataforma integral que te ayuda a gestionar tus finanzas personales con inteligencia artificial, análisis avanzado y herramientas intuitivas para alcanzar tus metas financieras.</p>
                <button className='signup'> Comenzar Gratis →</button>
            </section>
        </>
    );
}

export default Home;