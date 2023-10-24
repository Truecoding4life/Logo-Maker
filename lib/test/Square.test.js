const Square = require('../squareClass');
describe('Shape', () => {
    describe('Square Class', () => {
        const expectString=`<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <rect width="300" height="300" fill="black"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SSS</text>

        </svg>`;
        const square = new Square('black', 'Circle', `SSS`).test();
        expect(square).toBe(expectString);
    });
});






// result = x + y;
// x = y + z;