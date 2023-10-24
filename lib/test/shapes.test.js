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

