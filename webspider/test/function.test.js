import functions from '../project/functions';

test('sum(2 + 2) 等于 4', () => {
    expect(functions.sum(2, 2)).toBe(4);
})