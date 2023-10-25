const Triangle = require('../Triangle');

describe('Shape', () => {
    describe('Triangle', () => {
        it (' Should return a purple triangle', () => {
            const expectString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

        <polygon points="150,25 75,150 225,150" fill="purple"/>

        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">DON</text>

        </svg>`;

            const triangle = new Triangle( 'purple', 'Triangle', 'DON').test();
            expect(triangle).toBe(expectString);
        })
        it(' Should return a empty string', () =>  {
            const expectString = '';
            const triangle = new Triangle ('blue', 'Triangle', 'Minh').test();;
            expect(triangle).toBe(expectString);
        })

    })
})