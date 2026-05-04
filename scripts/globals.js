// this is just here to give global file access to the character container and dialogue manager

import {Dialogue, DialogueManager} from "./dialogue.js";
import {CharacterContainer, character_files} from "./characters.js"; 

const character_container = new CharacterContainer();
const dialogue_manager = new DialogueManager();

export {
    character_container,
    dialogue_manager
}