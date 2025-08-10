import '../assets/styles/Spellcard.css';

function SpellCard({ spell }) {


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

    const normalizedSchool = spell.school?.toLowerCase().replace(/\s+/g, '-') || 'unknown';
    const isKnown = knownSchools.includes(normalizedSchool);
    const schoolClass = `school ${isKnown ? `school-${normalizedSchool}` : 'school-unknown'}`;

    return (
        <div className="spell-card">
            <div className='spell-card-header'>
                <h3 style={{ color: 'white', fontSize: '1.5rem' }}>{spell.name}</h3>
                <span className='level' >Nivel {spell.level}</span>
            </div>
            <div className={schoolClass}>{spell.school}</div>
            <div className='spell-card-details'>
                <p>Tiempo de lanzamiento: {spell.castTime}</p>
                <p>Alcance: {spell.castRange}</p>
                <p>Components: {spell.components}</p>
                <p>Duration: {spell.duration}</p>
            </div>
            <p style={{color:'#d1d5db'}}>{spell.description}</p>

            <div className='spell-card-footer'>
                <span> Spell ID : {spell.id}</span>
            </div>
        </div>
    );
}

export default SpellCard;