import List from '../src/List.js';

describe('to do list test', () => {

    describe('add item', () => {
        test('should add item into the list', () => {
            let app = new List();

            expect(app.list).toEqual([]);

            app.add('apple');

            expect(app.list).toEqual(['apple']);
        })
    })

})