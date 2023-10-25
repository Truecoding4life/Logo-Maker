const Square = require("../squares.js");
describe("Shape", () => {
  // Test square for color black
  describe("Square Class Testing", () => {
    it("It Should return Square Is black", () => {
      const expectString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect width="300" height="300" fill="black"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SSO</text>

        </svg>`;

      const square = new Square("black", "Square", "SSO").test();
      expect(square).toBe(expectString);
    });

    // Test Again for square with another color input
    it("It Should return a red Square", () => {
      const expectString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect width="300" height="300" fill="red"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SSO</text>

        </svg>`;
      const square = new Square("red", "Square", "SSO").test();
      expect(square).toBe(expectString);
    });
  });
});
