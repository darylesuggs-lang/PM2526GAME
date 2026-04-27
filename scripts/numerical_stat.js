export default class numerical_stat {
    constructor(initial_value, min_value, max_value, underflow_method, overflow_method) {
        this._value = initial_value,
        this._min_value = min_value,
        this._max_value = max_value
        this._underflow_method = underflow_method,
        this._overflow_method = overflow_method
    }

    set value(new_value) {
        if (typeof new_value === "number") {
            this._value = new_value;
        }

        if (this._value < this._min_value) {
            underflow_method();
        } else if (this._value > this._max_value) {
            overflow_method();
        }
    }

    get value() {
        return this._value;
    }
}