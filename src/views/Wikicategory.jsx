import { Link } from 'react-router-dom';
import '../assets/styles/Wikicategory.css';
import { ArrowLeft, Sparkles, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import SpellCard from '../components/SpellCard.jsx';
import { spellcontroller } from '../controllers/wikiController.js';

function Wikicategory() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeTab, setActiveTab] = useState('oficial')
    const [spells, setSpells] = useState([]);
    const [message, setMessage] = useState('');

    const busqueda = () => {
        console.log('Función ejecutada');
        console.log('Tab activo:', activeTab);
        console.log('Término de búsqueda:', searchTerm);

        spellcontroller(activeTab, searchTerm)
            .then(spells => {
                if (spells.length === 0) {
                    setMessage('No se encontraron hechizos para la búsqueda actual.');
                    console.log('No se encontraron hechizos para la búsqueda actual.');
                    setSpells([]);
                } else {
                    setSpells(spells);
                }
            })
            .catch(error => {
                setMessage('Error al obtener los hechizos.');
                document.getElementById('message').textContent = error.message || 'Error al obtener los hechizos.';
                console.error('Error al obtener los hechizos:', error);
            });
    };

    useEffect(() => {
        busqueda();
    }, [activeTab, searchTerm]);



    return (
        <div className='hechizos-container'>
            <header className='hechizos-header'>
                <Link to={"/wiki"} className='back-button'>
                    <ArrowLeft />
                    Volver
                </Link>
                <div className='hechizos-title'>
                    <Sparkles className='sparkles' />
                    <h1>Hechizos</h1>
                </div>
            </header>

            <main>
                <div className="search-section">
                    <div className="search-container">
                        <Search className="search-icon" />
                        <input
                            type="text"
                            placeholder="Buscar hechizos por nombre"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="search-input"
                        />
                    </div>
                </div>

                <div className="tabs-container">
                    <div className="tabs-list">
                        <button
                            className={`tab-trigger ${activeTab === 'oficial' ? 'active' : ''}`}
                            onClick={() => setActiveTab('oficial')}
                        >
                            Oficiales
                        </button>
                        <button
                            className={`tab-trigger ${activeTab === 'homebrew' ? 'active' : ''}`}
                            onClick={() => setActiveTab('homebrew')}
                        >
                            Homebrew
                        </button>
                        <button
                            className={`tab-trigger ${activeTab === 'Tus Hechizos' ? 'active' : ''}`}
                            onClick={() => setActiveTab('Tus Hechizos')}
                        >
                            Tus Hechizos
                        </button>
                    </div>
                </div>
                <div className='card-grid'>
                    {activeTab === 'Tus Hechizos' && (
                        <button className='addSpell' onClick={() => window.location.href = '/wiki/spell/edit'}>
                            <span className='addSpellTag'>Añadir Hechizo</span>
                        </button>
                    )}
                    {spells.length > 0 ? (
                        spells.map((spell, index) => (
                            <SpellCard key={index} spell={spell} />
                        ))
                    ) : (
                        <p id='message' style={{ gridColumn: '1 / -1', color: 'white', textAlign: 'center' }}>
                            {message || 'No se encontraron hechizos para la búsqueda actual.'}
                        </p>
                    )}
                </div>

            </main>

        </div>
    );
}

export default Wikicategory;