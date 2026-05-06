import { character_container, dialogue_manager } from "./globals.js";
import { SceneManager, Scene } from "./scene_manager.js";


SceneManager.add_scene(new Scene("Main Menu", () => {
    const main_menu = document.getElementById("main_menu");
    main_menu.style.display = "block";

    // Add event listeners for main menu buttons
    const start_button = document.getElementById("start_button");
    start_button.addEventListener("click", () => {
        SceneManager.change_scene(SceneManager.get_scene("Yahu Intro"));
    });

    // quit button 
    const quit_button = document.getElementById("quit_button");
    quit_button.addEventListener("click", () => {
        window.close();
    });
},
() => {
    const game_title_and_buttons = document.getElementById("game-title-and-buttons");

    game_title_and_buttons.style.transform = "translate(0, 100vh)";
}));


SceneManager.add_scene(new Scene("Yahu Intro", async () => {
    const benjamin_netanyahu = character_container.get_character("Benjamin Netanyahu");
    const yahu_dialogue_box = dialogue_manager.get_character("benjamin_netanyahu");
    const yahu_intro_dialogue = dialogue_manager.get_dialogue("yahu_intro_dialogue");
    const yahu_moving_character = benjamin_netanyahu.moving_character;

    yahu_moving_character.set_position('-100%', 'calc(40vh - 50%)');
    yahu_moving_character.set_size('30rem', '30rem');
    yahu_moving_character.show();
    await yahu_moving_character.move_to('calc(50vw - 50%)', 'calc(40vh - 50%)', 2000);

    await yahu_dialogue_box.conversation(yahu_intro_dialogue);
    await yahu_moving_character.move_to('100vw', 'calc(40vh - 50%)', 2000);
}));