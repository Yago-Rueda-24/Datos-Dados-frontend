import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import CategoryCard from '../components/Categorycard';
import { Dice1, Dice6, Users, BookOpen, Sword, Shield, Sparkles, Star, ArrowRight, Github, Twitter } from "lucide-react"

function Home() {
    return (
        <>
            <header className='head'>
                <Dice6 className='dice6' />
                <Dice1 className='dice1' />
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
                    <div className='card'>
                        <Sword className='icon' />
                        <h2>Gestión de Partidas</h2>
                        <p>Organiza sesiones, rastrea progreso y mantén a tu grupo conectado con herramientas intuitivas.</p>
                    </div>
                    <div className='card'>
                        <BookOpen className='icon' />
                        <h2>Base de Datos Completa</h2>
                        <p>Accede a hechizos, clases, razas y objetos oficiales, más contenido creado por la comunidad.</p>
                    </div>
                    <div className='card'>
                        <Users className='icon' />
                        <h2>Creador de Personajes</h2>
                        <p>Diseña personajes únicos con nuestro editor avanzado y compártelos con otros jugadores.</p>
                    </div>
                    <div className='card'>
                        <Dice6 className='icon' />
                        <h2>Dados Virtuales</h2>
                        <p>Sistema de dados integrado con historial, modificadores automáticos y efectos visuales.</p>
                    </div>

                </div>
            </section>
        </>
    );
}

export default Home;