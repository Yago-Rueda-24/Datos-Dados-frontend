import { Link } from 'react-router-dom';
import '../assets/styles/Wikicategory.css';
import { ArrowLeft, Sparkles, Search } from 'lucide-react';
import { useState, useEffect } from 'react';
import SpellCard from '../components/SpellCard.jsx';
import {spellcontroller} from '../controllers/wikiController.js';
function Wikicategory() {
    const [searchTerm, setSearchTerm] = useState('')
    const [activeTab, setActiveTab] = useState('oficial')
    const [spells, setSpells] = useState([]);

    const busqueda = () => {
        console.log('Función ejecutada');
        console.log('Tab activo:', activeTab);
        console.log('Término de búsqueda:', searchTerm);

        spellcontroller(activeTab, searchTerm)
            .then(spells => {
                console.log('Hechizos obtenidos:', spells);
                setSpells(spells);
            })
            .catch(error => {
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
                    {spells.length > 0 ? (
                        spells.map((spell, index) => (
                            <SpellCard key={index} spell={spell} />
                        ))
                    ) : (
                        <p style={{gridColumn: '1 / -1',  color: 'white', textAlign: 'center' }}>
                            No se han encontrado hechizos para la búsqueda .
                        </p>
                    )}
                </div>

            </main>

        </div>
    );
}

export default Wikicategory;