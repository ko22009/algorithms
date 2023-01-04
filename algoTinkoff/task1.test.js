const task1 = require('./task1');

test('correct encryption', () => {
    let result = task1('egg', 'add');
    expect(result).toBe(true);
	
    result = task1('bar', 'foo');
    expect(result).toBe(false);
	
    result = task1('kotlin', 'python');
    expect(result).toBe(true);
})
