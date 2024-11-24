const factorial = require("./factorial");

const data = [
  {
    input: 0,
    expected: 1,
  },
  {
    input: 1,
    expected: 1,
  },
  {
    input: 2,
    expected: 2,
  },
  {
    input: 3,
    expected: 6,
  },
  {
    input: 5,
    expected: 120,
  },
  {
    input: 10,
    expected: 3628800,
  },
  {
    input: -1,
    expected: "error",
  },
  {
    input: 1.5,
    expected: "error",
  },
  {
    input: "a",
    expected: "error",
  },
];

test.each(data)("%s", ({ input, expected }) => {
  let result = factorial(input);
  expect(result).toBe(expected);
});
