const Circle = require('../circles')

describe('Shape', () => {
    describe('Circle Class Testing', () => {
        it ("Should return a blue Circle", () => {
            const expectString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                    <circle cx="150" cy="100" r="80" fill="blue"/>

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SUS</text>

                    </svg>`;

            const circle = new Circle ('blue', 'Circle','SUS').test();
            expect(circle).toBe(expectString);
        })
        
        it ("Should return a orange Circle", () => {
            const expectString = `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">

                    <circle cx="150" cy="100" r="80" fill="orange"/>

                    <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">123</text>

                    </svg>`;

            const circle = new Circle ('orange', 'Circle','123').test();
            expect(circle).toBe(expectString);
        })
    })
})