import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <>
            <header className='head'>
                <h1 className='title'>Datos&Dados</h1>
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
                <h1 className='hero-title'>Desata Tu <span className='hero-title-resaltado'>Aventura</span> </h1>
                <p className='hero-description'>La plataforma definitiva para gestionar partidas de D&D, crear personajes épicos y compartir contenido con una comunidad apasionada de jugadores.</p>
                <Link to="/signup">
                    <button className='signup'> Comenzar Gratis →</button>
                </Link>

            </section>
        </>
    );
}

export default Home;