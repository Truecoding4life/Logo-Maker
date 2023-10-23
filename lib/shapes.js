const inquirer = require("inquirer");
const fs = require('fs');



class Shape {
    constructor(color, shape, text,logo) {
        this.color = color;
        this.shape = shape;
        this.text = text;
        this.name= logo;
    }

    describe() {
        console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
    }

    create_logo() {
        console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
    }
}
class Circle extends Shape {
    constructor(color, shape, text,logo) {
        super(color, shape, text,logo );
        this.content = `
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                    <circle cx="150" cy="100" r="80" fill="${this.color}"/>

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

                    </svg>`;
    }

    create_logo() {
        super.create_logo();

        fs.writeFile(`${this.name}.svg`, this.name, function (err) {
            if (err) throw err;
            console.log('File created!');
        });
    }
}
class Triangle extends Shape {
    constructor(color,shape,text){
        super(color,shape,text);
        this.content=  `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon points="150,25 75,150 225,150" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>`;
    }
    create_logo() {
        super.create_logo();

        fs.writeFile(`${this.name}.svg`, this.name, function (err) {
            if (err) throw err;
            console.log('File created!');
        });
    }
}
class Square extends Shape {
    constructor(color,shape,text,logo){
        super(color,shape,text,logo);
        this.content= `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect width="300" height="300" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>`;
    }
    create_logo() {
        super.create_logo();

        fs.writeFile(`${this.name}.svg`, this.name, function (err) {
            if (err) throw err;
            console.log('File created!');
        });
    }
}