const Shape = require('../shapes');
const Circle = require('../circles');


describe('Shape', () => {
    describe('Circle Class', () => {
        it('Should return the string', () => {
            const expectString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

            <circle cx="150" cy="100" r="80" stroke="black" stroke-width="3" fill="red" />

            <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SUS</text>

            </svg>`;
            const circle = new Circle('red', 'Circle', `SUS`).test();
            expect(circle).toBe(expectString);
        })
    })
})