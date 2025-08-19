import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/Categorycard';

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
            <section className='cards'>
                <h1 className='card-title'> Herramientas Épicas para Aventureros</h1>
                <p className='card-description'> Todo lo que necesitas para <span className='hero-title-resaltado'> crear, gestionar y vivir</span> aventuras inolvidables en el mundo de D&D.</p>
                <div className='cardGrid'>
                    <CategoryCard title={"Gestión de Partidas"} description={"Organiza sesiones, rastrea progreso y mantén a tu grupo conectado con herramientas intuitivas."}></CategoryCard>
                    <CategoryCard title={"Base de Datos Completa"} description={"Accede a hechizos, clases, razas y objetos oficiales y a contenido creado por la comunidad."}></CategoryCard>
                    <CategoryCard title={"Creador de Personajes"} description={"Diseña personajes únicos con nuestro editor avanzado y compártelos con otros jugadores."}></CategoryCard>
                    <CategoryCard title={"Dados Virtuales"} description={"Sistema de dados integrado con historial, modificadores automáticos y efectos visuales."}></CategoryCard>

                </div>
            </section>
        </>
    );
}

export default Home;