const fibonachi = require('./fibonachi');

test('fibonachi by position 7', () => {
	
    const result = fibonachi(7);

    expect(result).toEqual(13);
})
