import '../assets/styles/Spellcard.css';
import { Link, useNavigate } from 'react-router-dom';

function SpellCard({ spell }) {

    const navigate = useNavigate();
    function obtainSpell(id) {
        navigate(`/wiki/spell/${spell.id}`);
        console.log('Obtener hechizo con ID:', id);

    }

    const knownSchools = [
        'abjuration',
        'conjuration',
        'divination',
        'enchantment',
        'evocation',
        'illusion',
        'necromancy',
        'transmutation'
    ];
    //Selector de escuela de magia
    const normalizedSchool = spell.school?.toLowerCase().replace(/\s+/g, '-') || 'unknown';
    const isKnown = knownSchools.includes(normalizedSchool);
    const schoolClass = `school ${isKnown ? `school-${normalizedSchool}` : 'school-unknown'}`;
    
    //Parse de componentes
    return (
        <div onClick={() => obtainSpell(spell.id)} className="spell-card-component">
            <div className='spell-card-component-header'>
                <h3 >{spell.name}</h3>
                <span className='level' >Nivel {spell.level}</span>
            </div>
            <div className={schoolClass}>{spell.school}</div>
            <div className='spell-card-component-details'>
                <p>Tiempo de lanzamiento: {spell.castTime}</p>
                <p>Alcance: {spell.castRange}</p>
                <p>Components: {spell.components}</p>
                <p>Duration: {spell.duration}</p>
            </div>
            <p className='spell-card-component-description'>{spell.description}</p>

            <div className='spell-card-component-footer'>
                <span> Spell ID : {spell.id}</span>
            </div>
        </div>
    );
}

export default SpellCard;