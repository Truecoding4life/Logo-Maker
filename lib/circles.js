const fs = require('fs');
const Shape = require('./shapes');

class Circle extends Shape {
    constructor(color, shape, text) {
        super(color, shape, text );
        this.content = `
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                    <circle cx="150" cy="100" r="80" fill="${this.color}"/>

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

                    </svg>`;
    }

    create_logo() {

        fs.writeFile(`${this.name}.svg`, this.content, function (err) {
            if (err) throw err;
            console.log('File created!');
        });
    }
}
module.exports = Circle;