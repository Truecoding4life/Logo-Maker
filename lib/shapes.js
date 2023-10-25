// Shape class is the parent class for all shapes
class Shape {
  constructor(color, shape, text) {
    this.color = color;
    this.shape = shape;
    this.text = text;
    this.name = "logo";
  }

  describe() {
    console.log(
      `I am a ${this.color} ${this.shape} with the text ${this.text}`
    );
  }
  test() {
    const test = `I am a ${this.color} ${this.shape} with the text ${this.text}`;
    return test;
  }
}

// Circle class is a child class of Shape class

module.exports = Shape;
