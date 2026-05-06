import {character_container, dialogue_manager} from "./globals.js";

// scene manager class to store all scenes and provide functions to access them and change scenes
class SceneManager {
    static current_scene = null;
    static scenes = {};

    static change_scene(new_scene) {
        if (SceneManager.current_scene) {
            SceneManager.current_scene.exit();
        }
        SceneManager.current_scene = new_scene;
        if (SceneManager.current_scene) {
            SceneManager.current_scene.enter();
        }
    }

    static get_all_scenes(name) {
        return SceneManager.scenes;
    }

    static get_scene(name) {
        return SceneManager.scenes[name];
    }

    static get_current_scene() {
        return SceneManager.current_scene;
    }

    static add_scene(scene) {
        SceneManager.scenes[scene._name] = scene;
    }
}

class Scene {
    constructor(name, on_enter = () => {}, on_exit = () => {}) {
        this._name = name;
        this.on_enter = on_enter;
        this.on_exit = on_exit;
    }

    enter() {
        console.log(`Entering scene: ${this._name}`);
        this.on_enter();
    }

    exit() {
        console.log(`Exiting scene: ${this._name}`);
        this.on_exit();
    }
}

export {
    SceneManager,
    Scene
};