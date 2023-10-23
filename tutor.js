// create command line in terminal to user inputs and store into variables for color, shape and text


var prompt = require('prompt-sync')();
const fs = require('fs');

//parent class
class Shape {
    constructor(color, shape, text) {
        this.color = color;
        this.shape = shape;
        this.text = text;
    }

    class Shape {
            constructor(color, shape, text) {
                    this.color = color;
                    this.shape = shape;
                    this.text = text;
            }

            describe() {
                    console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
            }

            create_logo() {
                    console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
            }
    }

    //child classes derived from this parent class will inherit the properties and methods of the parent class

    class circle extends Shape {
            constructor(color, shape, text, name) {
                    super(color, shape, text); 
                    this.name = name;
                    this.logo = `
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                    <circle cx="150" cy="100" r="80" fill="${this.color}"/>

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

                    </svg>`;
            }

            describe() {
                    console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
            }

            create_logo() {
                super.create_logo();

                fs.writeFile(`${this.name}.svg`, this.logo, function (err) {
                    if (err) throw err;
                    console.log('File created!');
                });
            }
    }

    class square extends Shape {
            constructor(color, shape, text, name) {
                    super(color, shape, text); 
                    this.name = name;
                    this.logo = `
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                    <rect width="300" height="300" fill="${this.color}"/>

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

                    </svg>`;
            }

            describe() {
                    console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
            }

            create_logo() {
                super.create_logo();

                fs.writeFile(`${this.name}.svg`, this.logo, function (err) {
                    if (err) throw err;
                    console.log('File created!');
                });
            }
    }


    class triangle extends Shape {
            constructor(color, shape, text, name) {
                    super(color, shape, text); 
                    this.name = name;
                    this.logo = `
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                    <polygon points="150,25 75,150 225,150" fill="${this.color}"/>

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

                    </svg>`;
            }

            describe() {
                    console.log(`I am a ${this.color} ${this.shape} with the text ${this.text}`);
            }

            create_logo() {
                super.create_logo();

                fs.writeFile(`${this.name}.svg`, this.logo, function (err) {
                    if (err) throw err;
                    console.log('File created!');
                });
            }
    }

    var name = prompt('What is your favorite name? ');
    var color = prompt('What is your favorite color? ');
    var shape = prompt('What is your favorite shape? ');
    var text = prompt('What is your favorite text? ');

    switch (shape) {
        case 'circle':
            var circle1 = new circle(color, shape, text, name);
            circle1.create_logo();
            break;
        case 'square':
            var square1 = new square(color, shape, text, name);
            square1.create_logo();
            break;
        case 'triangle':
            var triangle1 = new triangle(color, shape, text, name);
            triangle1.create_logo();
            break;
        default:
            console.log('Please enter a valid shape');
            break;
    }
class square extends Shape {
    constructor(color, shape, text, name) {
        super(color, shape, text); 
        this.name = name;
        this.logo = `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect width="300" height="300" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>`;
    }

    describe() {
        console.log(I am a ${this.color} ${this.shape} with the text ${this.text});
    }

    create_logo() {
      super.create_logo();

      fs.writeFile(${this.name}.svg, this.logo, function (err) {
        if (err) throw err;
        console.log('File created!');
      }
    );
    }

}


class triangle extends Shape {
    constructor(color, shape, text, name) {
        super(color, shape, text); 
        this.name = name;
        this.logo = `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon points="150,25 75,150 225,150" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>`;
    }

    describe() {
        console.log(I am a ${this.color} ${this.shape} with the text ${this.text});
    }

    create_logo() {
      super.create_logo();

      fs.writeFile(${this.name}.svg, this.logo, function (err) {
        if (err) throw err;
        console.log('File created!');
      });
    }

}

var name = prompt('What is your favorite name? ');
var color = prompt('What is your favorite color? ');
var shape = prompt('What is your favorite shape? ');
var text = prompt('What is your favorite text? ');

switch (shape) {
  case 'circle':
    var circle1 = new circle(color, shape, text, name);
    circle1.create_logo();
    break;
  case 'square':
    var square1 = new square(color, shape, text, name);
    square1.create_logo();
    break;
  case 'triangle':
    var triangle1 = new triangle(color, shape, text, name);
    triangle1.create_logo();
    break;
  default:
    console.log('Please enter a valid shape');
    break;

}