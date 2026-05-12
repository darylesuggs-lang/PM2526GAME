export default class SceneTools {
    static transition_fade(fade_duration, wait_duration, while_waiting_function = () => {}) {
        return new Promise((resolve) => {
            const fade_div = document.createElement("div");
            fade_div.style.position = "absolute";
            fade_div.style.top = "0";
            fade_div.style.left = "0";
            fade_div.style.width = "100%";
            fade_div.style.height = "100%";
            fade_div.style.backgroundColor = "black";
            fade_div.style.opacity = "0";
            fade_div.style.zIndex = "200"
            fade_div.style.transition = `opacity ${fade_duration}ms`;
            document.body.appendChild(fade_div);

            // Start the fade in
            requestAnimationFrame(() => {
                fade_div.style.opacity = "1";
            });

            // after the fade in duration, execute the while_waiting_function
            setTimeout(() => {
                while_waiting_function();
            }, fade_duration);

            // After the fade in and wait duration, fade out and resolve
            setTimeout(() => {
                fade_div.style.opacity = "0";
                fade_div.addEventListener("transitionend", () => {
                    document.body.removeChild(fade_div);
                    resolve();
                }, { once: true });
            }, fade_duration + wait_duration);
        });
    }
}