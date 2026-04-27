const scenes = Object.freeze({
    MAIN_MENU: "main_menu",
    SHOP: "shop"
    // etc,
});

_active_scene = scenes.MAIN_MENU;

const get_active_scene = () => {
    return _active_scene;
}

const stats = {
    schizophrenia_level: new numerical_stat(0, 0, 99, () => {
        schizophrenia_level.value = 0;
    },
    () => {
        console.log("Game over you got to schizo") // TODO: replace with game over logic later - Aaden
    }),

    gambling_anxiety: new numerical_stat(0, 0, 99, () => {
        gambling_anxiety.value = 0;
    },
    () => {
        console.log("you didnt gamble enough! Now you must do a all in bet") // TODO: replace with all in bet thing later - Aaden
    }),

    money: new numerical_stat(500, 1, 999999, () => {
        console.log("You went bankrupt! Game over.") // TODO: replace with game over logic - Aaden
    },
    () => {
        console.log("How? You cheated didnt you? Well I guess you win, CHEATER") // if someone actually gets this then they definitely - Aaden
    }),
    netneyau_love: new numerical_stat(0, -99, 99, () => {
        console.log("netneyau got too mad at you") // TODO: replace with whatever happens when netneyau gets to mad - Aaden
    },
    () => {
        console.log("Uh oh you accidently became to attracted to netneyau, game over") // TODO: replace with game over condition - Aaden
    }),
}

export {
    scenes,
    stats
}