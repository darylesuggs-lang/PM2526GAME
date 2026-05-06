import NumericalStat from "./NumericalStat";

const stats = {
    money: new NumericalStat("money", 100),
    schizophrenia: new NumericalStat("schizophrenia", 0),
    gambling_anxiety: new NumericalStat("gambling_anxiety", 0),
    netneyau_rage_love: new NumericalStat("netneyau_rage_love", 0)
}

/*

Add a event listener for each stat in the stats object and make sure the names are the same.

Template for the event listener is below:

document.addEventListener("event_name", (event) => {
    if (event.detail.value < 0) {
        console.log("Example");
    }
});

*/

document.addEventListener("money", (event) => {
    if (event.detail.value <= 0) {
        console.log("bankrupt ending");
    }
});

document.addEventListener("schizophrenia", (event) => {
    if (event.detail.value >= 100) {
        console.log("schizo ending");
    } else if (event.detail.value < 0 ) {
        stats.schizophrenia.value = 0;
    }
});

document.addEventListener("gambling_anxiety", (event) => {
    if (event.detail.value >= 100) {
        console.log("Trigger All in bet sequence");
    } else if (event.detail.value < 0 ) {
        stats.gambling_anxiety.value = 0;
    }
});

document.addEventListener("netneyau_rage_love", (event) => {
    if (event.detail.value <= -100) {
        console.log("trigger rage ending");
    } else if (event.detail.value >= 100) {
        console.log("trigger love ending");
    }
});