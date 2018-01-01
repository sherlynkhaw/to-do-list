import List from '../src/List.js';

describe('To Do List Test', () => {

    describe('add item', () => {
        test('should add item into the list', () => {
            let list = new List();

            expect(list.items).toEqual([]);

            list.add('apple');

            expect(list.items).toEqual(['apple']);
        })
    });

});