const generateBrackets = require("./generateMultiBrackets");

describe("generateMultiBrackets", () => {
  test("n = 2", () => {
    const result = generateBrackets(2).sort();
    const expected = [
      "(())",
      "()()",
      "(){}",
      "({})",
      "{()}",
      "{{}}",
      "{}()",
      "{}{}",
    ].sort();
    expect(result).toEqual(expected);
  });

  test("n = 3", () => {
    const result = generateBrackets(3).sort();
    const expected = [
      "((()))",
      "(({}))",
      "({()})",
      "({{}})",
      "{(())}",
      "{({})}",
      "{{()}}",
      "{{{}}}",
      "(()())",
      "((){})",
      "({}())",
      "({}{})",
      "{()()}",
      "{(){}}",
      "{{}{}}",
      "(())()",
      "(()){}",
      "({})()",
      "({}){}",
      "{()}()",
      "{()}{}",
      "{{}}()",
      "{{}}{}",
      "()(())",
      "()({})",
      "(){()}",
      "(){{}}",
      "{}(())",
      "{}({})",
      "{}{()}",
      "{}{{}}",
      "()()()",
      "()(){}",
      "(){}()",
      "(){}{}",
      "{{}()}",
      "{}()()",
      "{}(){}",
      "{}{}()",
      "{}{}{}",
    ].sort();
    expect(result).toEqual(expected);
  });
});
