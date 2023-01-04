const task2 = require('./task2');

test('summ two numbers in array equals passing number', () => {
    let result = task2([2, -4, 10], 6);
    expect(result).toEqual([-4, 10]);
	
    result = task2([2, -4, 10], 6);
    expect(result).toEqual([-4, 10]);
	
    result = task2([3, 6], 6);
    expect(result).toEqual(null);
})
