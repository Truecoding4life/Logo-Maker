const inquirer = require("inquirer");
const fs = require('fs');

inquirer
 .prompt([
    {
        type: "list",
        name: "shape",
        message: "What shape do you want?",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        type: "input",
        name: "color",
        message: "What color do you want?"
    },
    {
        type: "input",
        name: "text",
        message: "What text do you want?"
    },
    {
        type: "input",
        name: "name",
        message: "What name do you want?"
    }]
    )
    .then(
        function (answers) {
            if (answers.shape === "Circle") {
                const circle = new Circle(answers.color, answers.shape, answers.text, answers.name);
                circle.create_logo();
            } else if (answers.shape === "Triangle") {
                const triangle = new Triangle(answers.color, answers.shape, answers.text, answers.name);
                triangle.create_logo();
            } else if (answers.shape === "Square") {
                const square = new Square(answers.color, answers.shape, answers.text, answers.name);
                square.create_logo();
            }
        }
        )

class Shape {
    constructor(color, shape, text) {
        this.color = color;
        this.shape = shape;
        this.text = text;
        this.name= "logo";
    }

    describe() {
        console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
    }

    create_logo() {
        console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
    }
}
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
    constructor(color,shape,text){
        super(color,shape,text);
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