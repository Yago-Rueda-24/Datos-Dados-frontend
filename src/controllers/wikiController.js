import { fetchPersonalSpells, fetchWOTSpells, fetchPublicpells,fetchSpell } from '../api/spellAPI.js';

export async function spellcontroller(activeTab, search) {
    try {

        console.log('Active Tab:', activeTab);
        console.log('Search Term:', search);
        let spells = [];


        switch (activeTab) {
            case 'oficial':
                // Aquí podrías hacer una llamada a la API para obtener hechizos oficiales
                //const spells = await fetchSpells(activeTab, search);
                spells = await fetchWOTSpells(search);
                break;
            case 'homebrew':
                // Aquí podrías hacer una llamada a la API para obtener hechizos homebrew
                //const spells = await fetchSpells(activeTab, search);
                spells = await fetchPublicpells(search);
                console.log('Cargando hechizos homebrew...');
                break;
            case 'Tus Hechizos': {
                spells = await fetchPersonalSpells(search);
                break;
            }
            default:
                console.error('Tab no reconocido:', activeTab);
        }

        return spells;
    } catch (error) {
        console.error('Error al obtener los hechizos:', error);
        throw error;
    }

}

export async function getSpellControllerByID(id){
    try {
        const spells = await fetchSpell(id);
        return spells;
    } catch (error) {
        console.error('Error al obtener los hechizos:', error);
        throw error;
    }
} 