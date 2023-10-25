const Shape = require('./shapes');
const Square = require('./squares');
const Circle = require('./circles');
const Triangle = require('./Triangle');
const inquirer = require("inquirer");


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
        message: "What color do you want, please type in a valid name?"
        
    },
    {
        type: "input",
        name: "text",
        message: "What text do you want?"
    },
]
    )
    .then(
        function (answers) {
            if(answers.text.length > 3){
                console.log("Please enter a text with less than 3 characters");
                return;
            }
            if (answers.shape === "Circle") {
                const circle = new Circle(answers.color, answers.shape, answers.text , answers.name);
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
