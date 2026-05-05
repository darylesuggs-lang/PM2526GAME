import { dialogue_manager } from "./globals.js";
import { SceneManager, Scene } from "./scene_manager.js";


SceneManager.add_scene(new Scene("Main Menu", () => {
    const main_menu = document.getElementById("main_menu");
    main_menu.style.display = "block";

    // Add event listeners for main menu buttons
    const start_button = document.getElementById("start_button");
    start_button.addEventListener("click", () => {
        SceneManager.change_scene(SceneManager.get_scene("Yahu Intro"));
    });
},
() => {
    const main_menu = document.getElementById("main_menu");

    main_menu.style.display = "none";
    document.body.style.background = 'none'
}));


SceneManager.add_scene(new Scene("Yahu Intro", async () => {
    const yahu_dialogue_box = dialogue_manager.get_character("benjamin_netanyahu");
    const yahu_intro_dialogue = dialogue_manager.get_dialogue("yahu_intro_dialogue");

    await yahu_dialogue_box.conversation(yahu_intro_dialogue);
}));