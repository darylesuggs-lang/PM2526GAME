import {character_files} from "./characters.js";    
import {SceneManager} from "./scene_manager.js";
import {character_container, dialogue_manager} from "./globals.js";
import {dialogue_list} from "./dialogue.js";
import "./events.js"


async function main() { 
    await character_container.load_characters(character_files);
    await dialogue_manager.load_characters(character_files);
    await dialogue_manager.load_dialogues(dialogue_list);

    console.log(character_container.get_all_characters())
    console.log(dialogue_manager.get_all_dialogues())

    SceneManager.change_scene(SceneManager.get_scene("Main Menu"));
}


main();
