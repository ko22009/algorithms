const reverse = require('./reverse');
test('reverse string', () => {
  const input = 'i love codewars'
  const output = 's rawe docevoli'
  const result = reverse(input)
  expect(result).toBe(output)
})
