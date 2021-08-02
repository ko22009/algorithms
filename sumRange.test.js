const sumRange = require('./sumRange');

test('sum range for -3 equal -5', () => {
    const res = sumRange(-3);
    expect(res).toBe(-5);
})

test('sum range for 3 equal 6', () => {
    const res = sumRange(3);
    expect(res).toBe(6);
})

test('sum range for 0 equal 1', () => {
    const res = sumRange(0);
    expect(res).toBe(1);
})
