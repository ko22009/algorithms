const splitBySeparator = require("./splitBySeparator");

test("splitBySeparator remove empty", () => {
  const input = ["1/", "/2", "/"];
  const result = splitBySeparator(input, "/");
  expect(result).toEqual(["1", "2"]);
});

test("splitBySeparator multiple in one item", () => {
  const input = ["one.two.three", "four.five", "six"];
  const result = splitBySeparator(input, ".");
  expect(result).toEqual(["one", "two", "three", "four", "five", "six"]);
});
