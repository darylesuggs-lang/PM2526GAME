import Dialogue from "./dialogue.js";
import CharacterContainer from "./characters.js";    
import template_yahu_dialogue from "../resources/jsons/dialogue/template_yahu_dialogue.json" with {type: "json"};
import {SceneManager} from "./scene_manager.js";


async function main() {
    const character_container = new CharacterContainer();
    await character_container.load_characters();
    console.log(character_container.get_all_characters())

    SceneManager.change_scene(SceneManager.get_scene("Main Menu"));

    const yahu_dialogue = new Dialogue("Benjamin Netanyahu", "./resources/images/netanyahu.png");
    await yahu_dialogue.conversation(template_yahu_dialogue);
}

main();
