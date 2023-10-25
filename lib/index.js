// Import the Require Modules

const Shape = require("./shapes");
const Square = require("./squares");
const Circle = require("./circles");
const Triangle = require("./Triangle");
const inquirer = require("inquirer");

// Use Inquirer to collect user input

inquirer
  .prompt([
    {
      type: "list",
      name: "shape",
      message: "What shape do you want?",
      choices: ["Circle", "Triangle", "Square"],
    },
    {
      type: "input",
      name: "color",
      message: "Please Enter Color to Continue ?",
    },
    {
      type: "input",
      name: "text",
      message: "Enter a Logo Text to continue",
    },
  ])
  .then(function (answers) {
    // Text length limit is 3

    if (answers.text.length > 3) {
      console.log("Please enter a text with less than 3 characters");
      return;
    }

    // Choice Validation

    if (answers.shape === "Circle") {
      const circle = new Circle(
        answers.color,
        answers.shape,
        answers.text,
        answers.name
      );
      circle.create_logo();
    } else if (answers.shape === "Triangle") {
      const triangle = new Triangle(
        answers.color,
        answers.shape,
        answers.text,
        answers.name
      );
      triangle.create_logo();
    } else if (answers.shape === "Square") {
      const square = new Square(
        answers.color,
        answers.shape,
        answers.text,
        answers.name
      );
      square.create_logo();
    }
  });
