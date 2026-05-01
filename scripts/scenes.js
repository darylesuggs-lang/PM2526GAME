import { SceneManager, Scene } from "./scene_manager.js";


SceneManager.add_scene(new Scene("Main Menu", () => {
    console.log("Welcome to the Main Menu!");
},
() => {
    console.log("Exiting Main Menu...");
}));