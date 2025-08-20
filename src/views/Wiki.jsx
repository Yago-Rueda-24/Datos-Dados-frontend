import '../assets/styles/wiki.css';
import React from 'react';
import Sidebar from '../components/Sidebar';
import CategoryCard from '../components/Categorycard';

function Wiki() {
    return (
        <>
            <div className='wikilayout'>
                <Sidebar />
                <div className='wikicontent'>
                    <header className='wikiheader'>
                        <h1 className='wikiTitle'> Bienvendio a D&D Wiki</h1>
                        <p className='wikiSubTitle'>Tu guía completa para el mundo más grande de fantasía. Descubre razas, clases, hechizos y mucho más.</p>
                    </header>
                    <div className='wikicategories'>
                        <CategoryCard title="Razas" description="Explora las razas del universo de D&D." to="/wiki/spells" />
                        <CategoryCard title="Clases" description="Descubre las clases que existen en D&D." to="/wiki/spells" />
                        <CategoryCard title="Hechizos" description="Compendio de hechizos mágicos." to="/wiki/spells" />
                        <CategoryCard title="Monstruos" description="Recopilcaión de bestias y enemigos" to="/wiki/spells" />
                    </div>
                </div>
            </div>
        </>

    );
}

export default Wiki;