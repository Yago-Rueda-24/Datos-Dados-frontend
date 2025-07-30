import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <header className='head'>
                <h1 className='title'>FinZen</h1>
                <div className='buttons'>
                    <Link to="/login">
                        <button className='login'>Iniciar Sesion</button>
                    </Link>
                    <Link to="/signup">
                        <button className='signup'>Crear Cuenta</button>
                    </Link>

                </div>
            </header>
            <section className='hero' >
                <h1 className='hero-title'>Transforma tu relación con el dinero</h1>
                <p className='hero-description'>FinZen es la plataforma integral que te ayuda a gestionar tus finanzas personales con inteligencia artificial, análisis avanzado y herramientas intuitivas para alcanzar tus metas financieras.</p>
                <Link to="/signup">
                    <button className='signup'> Comenzar Gratis →</button>
                </Link>

            </section>
        </>
    );
}

export default Home;