const brackets = require("./brackets2");

const data = [
  {
    input: "()",
    expected: true,
  },
  {
    input: "([])",
    expected: true,
  },
  {
    input: "{[()]}",
    expected: true,
  },
  {
    input: "({[]})",
    expected: true,
  },
  {
    input: "(]",
    expected: false,
  },
  {
    input: "([)]",
    expected: false,
  },
  {
    input: "{[(])}",
    expected: false,
  },
  {
    input: "(()",
    expected: false,
  },
  {
    input: "",
    expected: true,
  },
  {
    input: "(",
    expected: false,
  },
  {
    input: ")",
    expected: false,
  },
  {
    input: "({[({[()]})]})",
    expected: true,
  },
];

test.each(data)("%s", ({ input, expected }) => {
  let result = brackets(input);
  expect(result).toBe(expected);
});
