/**
 * HTMLFormElement Prototypes
 */

// This serializes the forms data into a javascript object.
Object.defineProperty(HTMLFormElement.prototype, 'model', {
    get: function () {
        let data = {};

        for (let i = 0; i < this.elements.length; ++i) {
            let type = this.elements[i].type;
            let checked = this.elements[i].checked;

            if ((type === 'checkbox' || type === 'radio') && !checked)
                continue;

            if (this.elements[i].name.contains('[')) {
                if (!data[this.elements[i].name.split('[').first])
                    data[this.elements[i].name.split('[').first] = [];

                data[this.elements[i].name.split('[').first]
                    .push({
                        [this.elements[i].name
                            .split('[').last.split(']').first]: this.elements[i].value
                    });

                continue;
            }

            data[this.elements[i].name] = this.elements[i].value;
        }

        return data;
    },
});

// This serializes the forms data into a javascript object.
Object.defineProperty(HTMLFormElement.prototype, 'blueprint', {
    get: function () {
        let data = {};

        for (let i = 0; i < this.elements.length; ++i) {
            let type = this.elements[i].type;
            let checked = this.elements[i].checked;

            if ((type === 'checkbox' || type === 'radio') && !checked)
                continue;

            if (this.elements[i].name.contains('[')) {
                if (!data[this.elements[i].name.split('[').first])
                    data[this.elements[i].name.split('[').first] = [];

                data[this.elements[i].name.split('[').first]
                    .push({
                        [this.elements[i].name
                            .split('[').last.split(']').first]: this.elements[i].value
                    });

                continue;
            }

            data[this.elements[i].name] = this.elements[i].value;
        }

        return data;
    },
});

Object.defineProperty(HTMLFormElement.prototype, 'query', {
    get: function () {
        return Object.entries(this.model)
            .map(pair => pair.map(encodeURIComponent).join('='))
            .join('&');
    },
});

/**
 * Array Prototypes
 */

Array.prototype.contains = function (text) {
    return this.indexOf(text) > -1;
};

Object.defineProperty(Array.prototype, 'last', {
    get: function () {
        return this[this.length - 1];
    },
});

Object.defineProperty(Array.prototype, 'first', {
    get: function () {
        return this[0];
    },
});

/**
 * String Prototypes
 */

String.prototype.contains = function (text) {
    return this.indexOf(text) > -1;
};

String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1).toLowerCase();
};



