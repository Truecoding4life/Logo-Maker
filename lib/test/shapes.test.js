const Shape = require('../shapes');
describe('Shape', () => {
    describe('Shape Class', () => { 
        it ('Should return the string',() => {
            const expectString =('I am a blue Triangle with the text Nic');
            const shape = new Shape('blue','Triangle','Nic').test();
            expect(shape).toBe(expectString);
        })
        it ('Should return this string', () => {
            const expectString = ('I am a black Circle with the text SUS');
            const shape = new Shape('black','Circle', 'SUS').test();
            expect(shape).toBe(expectString);
        })
    }
    )
})








// // result = x + y;
// // x = y + z;







// const Shape = require('../shapes');
// const Circle = require('../circles');


// describe('Shape', () => {
//     describe('Circle Class', () => {
//         it('Should return the string', () => {
//             const expectString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

//             <circle cx="150" cy="100" r="80" fill="red"/>
//             <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SUS</text>            
//             </svg>`;
//             const circle = new Circle('red', 'Circle', `SUS`).test();
//             expect(circle).toBe(expectString);
//         })
//     })
// })