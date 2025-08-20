import '../../assets/styles/Wiki/SpellPage.css';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, Sparkles, Search } from 'lucide-react';
import { useEffect, useState } from "react";
import { getSpellControllerByID } from '../../controllers/wikiController.js';

function SpellPage() {
    const { id } = useParams(); // obtiene el ID de la URL
    const [spell, setSpell] = useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        async function fetchSpell() {
            try {
                console.log('Fetching spell with ID:', id);
                const spellData = await getSpellControllerByID(id);
                console.log('Spell Data:', spellData);
                setSpell(spellData);
            } catch (error) {
                console.error(error);
            } finally {
                setLoading(false);
            }
        }

        fetchSpell();
    }, [id]);

    if (loading) {
        return <div>Cargando hechizo...</div>; 
    }

    if (!spell) {
        return <div>No se encontró el hechizo.</div>;
    }

    return (
        <div className='spell-page'>
            <Link to={"/wiki/spells"} className='back-button'>
                <ArrowLeft />
                Volver
            </Link>

            <div className="spell-header">
                <div className="spell-name-section">
                    <h2 className="spell-name">{spell.name}</h2>
                    <div className="spell-tags">
                        <span className="spell-level-tag">{spell.level}</span>
                        <span className="spell-school-tag">{spell.school}</span>
                    </div>
                </div>
            </div>

            <div className="spell-stats">
                <div className="stat-row">
                    <div className="stat-item">
                        <span className="stat-label">Tiempo de Lanzamiento:</span>
                        <span className="stat-value"> {spell.castTime}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Alcance:</span>
                        <span className="stat-value">{spell.castRange}</span>
                    </div>
                </div>

                <div className="stat-row">
                    <div className="stat-item">
                        <span className="stat-label">Componentes:</span>
                        <span className="stat-value">{spell.components}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Duración:</span>
                        <span className="stat-value">{spell.duration}</span>
                    </div>
                </div>

                <div className="stat-row">
                    <div className="stat-item">
                        <span className="stat-label">Concentración:</span>
                        <span className="stat-value">
                            {spell.concentration ? (
                                <span className="concentration-badge">Sí</span>
                            ) : (
                                <span className="no-concentration">No</span>
                            )}
                        </span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Ritual:</span>
                        <span className="stat-value">
                            {spell.ritual ? <span className="ritual-badge">Sí</span> : <span className="no-ritual">No</span>}
                        </span>
                    </div>
                </div>

            </div>

            <div className="spell-description">
                <h3 className="description-title">Descripción</h3>
                <p className="description-text">{spell.description}</p>
            </div>

            <div className="spell-damage">
                <div className="damage-section">
                    <span className="damage-label">Tipo de Daño:</span>
                    <span className="damage-type">{spell.damageType}</span>
                </div>
                <div className="damage-table-section">
                    <span className="damage-label">Daño por Nivel:</span>
                    <div className="damage-table">
                        <div className="damage-table-header">
                            <span>Nivel</span>
                            <span>Daño</span>
                        </div>

                        {Object.entries(spell.damageByLevel).map(([level, damage]) => (
                            <div key={level} className="damage-table-row">
                                <span className="damage-level-cell">{level}</span>
                                <span className="damage-value-cell">{damage}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="spell-footer">
                <div className="spell-id">ID: {spell.id}</div>
                {spell.publicVisible && <div className="public-badge">Público</div>}
            </div>

        </div>
    );
}

export default SpellPage;