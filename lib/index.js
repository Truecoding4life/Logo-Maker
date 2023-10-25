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
      type: "input",
      name: "text",
      message: "Enter a Text for logo, less than 3 characters",
    },{
      type: "input",
      name: "color",
      message: "Please Enter a Color keyword (OR a hexadecimal number)",
    },{
      type: "list",
      name: "shape",
      message: "Please Choose a Shape",
      choices: ["Circle", "Triangle", "Square"],
    },


  ])
  .then(function (answers) {
    // Text length limit is 3

    if (answers.text.length > 3) {
      console.log("|Please Try Again, Text Length cannot excess 3 characters|");
      return;
    } else { console.log("|- - - -> Generated logo.svg in examples directory <- - - -|")}

    // Choice Validation
    // console.log("Generated logo.svg");
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
