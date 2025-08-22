import '../../assets/styles/Wiki/EditSpellPage.css';
import { Link } from 'react-router-dom';
import { ArrowLeft, Sparkles, Search } from 'lucide-react';
import { useState } from "react";

function EditSpellPage() {
    const [concentration, setConcentration] = useState(false);
    const [ritual, setRitual] = useState(false);

    const toggleConcentration = (event) => {
        setConcentration(event.target.checked);
    };
    const toggleRitual = (event) => {
        setRitual(event.target.checked);
    };



    const [spell] = useState({
        id: 1,
        name: "Bola de Fuego",
        level: 3,
        school: "Evocación",
        castTime: "1 acción",
        castRange: "",
        components: "V, S, M (una pequeña bola de guano de murciélago y azufre)",
        duration: "Instantáneo",
        concentration: false,
        ritual: false,
        description: "Una brillante bola de fuego explota en el punto que elijas, causando daño a las criaturas en el área.",
        damageType: "Fuego",
        damageByLevel: {
            3: "8d6",
            4: "9d6",
            5: "10d6",
            6: "11d6",
            7: "12d6",
            8: "13d6",
            9: "14d6"
        },
        publicVisible: true
    });

    return (
        <div className='spell-page'>
            <Link to={"/wiki/spells"} className='back-button'>
                <ArrowLeft />
                Volver
            </Link>

            <div className="spell-header">
                <div className="spell-name-section">
                    <input className="spell-name-input" placeholder={spell.name}></input>
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
                        <input className="stat-value-input" placeholder={
                            spell.castTime ? spell.castTime : 'Ejemplo: 1 Acción/1 minuto/10 minutos'
                        }>
                        </input>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Alcance:</span>
                        <input className="stat-value-input" placeholder={
                            spell.castRange ? spell.castRange : 'Ejemplo: Melee/30 pies/60 pies'
                        }
                        >
                        </input>
                    </div>
                </div>

                <div className="stat-row">
                    <div className="stat-item">
                        <span className="stat-label">Componentes:</span>
                        <span className="stat-value">{spell.components}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Duración:</span>
                        <input className="stat-value-input" placeholder={
                            spell.duration ? spell.duration : 'Ejemplo: Instantáneo/1 minuto/Concentración, hasta 10 minutos'
                        }>
                        </input>
                    </div>
                </div>

                <div className="stat-row">
                    <div className="stat-item">
                        <span className="stat-label">Concentración: {concentration ? <span className="concentration-badge">Sí</span> : <span className="no-ritual">No</span>}</span>
                        <input type='checkbox' onClick={toggleConcentration} className="stat-value-checkbox-input"></input>
                    </div>
                    <div className="stat-item">
                        <span className="stat-label">Ritual: {ritual ? <span className="concentration-badge">Sí</span> : <span className="no-ritual">No</span>}</span>
                        <input type='checkbox' onClick={toggleRitual} className="stat-value-checkbox-input"></input>
                    </div>
                </div>

            </div>

            <div className="spell-description">
                <h3 className="description-title">Descripción</h3>
                <textarea className="description-text-input" placeholder={spell.description}></textarea>
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

export default EditSpellPage;