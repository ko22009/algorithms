const range = require('./range')

it('range', () => {
    const result = range(1, 3)
    expect(result).toEqual([1, 2, 3])
})
