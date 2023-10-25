const Shape = require("./shapes");
const fs = require("fs");

class Square extends Shape {
  constructor(color, shape, text) {
    super(color, shape, text);
    this.content = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect width="300" height="300" fill="${this.color}"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">${this.text}</text>

        </svg>`;
  }
  create_logo() {
    fs.writeFile(`../examples/${this.name}.svg`, this.content, function (err) {
      if (err) throw err;
      console.log("File created!");
    });
  }
  test() {
    return this.content;
  }
}
module.exports = Square;
