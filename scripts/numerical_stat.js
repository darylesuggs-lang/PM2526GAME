export default class numerical_stat {
    constructor(name, initial_value) {
        this._name = name;
        this._value = initial_value;
    }

    set value(new_value) {
        if (typeof new_value === "number") {
            this._value = new_value;
            document.dispatchEvent(new CustomEvent(`${this._name}`, {
                detail: {value: this._value},
                bubbles: true
            }));
        }
    }

    get value() {
        return this._value;
    }
}