import { dialogue_manager } from "./globals.js";
import { SceneManager, Scene } from "./scene_manager.js";


SceneManager.add_scene(new Scene("Main Menu", () => {
    console.log("Welcome to the Main Menu!");
},
() => {
    console.log("Exiting Main Menu...");
}));


SceneManager.add_scene(new Scene("Yahu Intro", async () => {
    const yahu_dialogue_box = dialogue_manager.get_character("benjamin_netanyahu");
    const yahu_intro_dialogue = dialogue_manager.get_dialogue("yahu_intro_dialogue");

    await yahu_dialogue_box.conversation(yahu_intro_dialogue);
}));