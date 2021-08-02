const brackets = require('./brackets');

const data = [
    ['((()))', true],
    ['(()())', true],
    ['(())()', true],
    ['()(())', true],
    ['()()()', true],
    [')(', false],
    [')(((', false],
    ['((((', false],
];

test.each(data)('%s - %s',(str, excepted) => {
    let result = brackets(str);
    expect(result).toBe(excepted);
})
