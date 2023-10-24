const Shape = require('./shapes');
describe('Shape'), () => {
    describe('Shape Class', () => { 
        it ('Should console log the given string',() => {
            const expectString =('I am a blue Triangle with the text Nic}');
            const shape = new Shape('blue','Triangle','Nic');
            expect(shape.describe().toEqual(expectString));
        })
    }
    )
}

