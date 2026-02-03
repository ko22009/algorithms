function generateBrackets(n) {
  const result = [];
  const brackets = {
    "(": ")",
    "{": "}",
  };

  const stack = [["", 0, 0, []]];

  while (stack.length) {
    const [str, opened, closed, openStack] = stack.pop();

    if (str.length === 2 * n) {
      result.push(str);
      continue;
    }

    if (opened < n) {
      for (const open of Object.keys(brackets)) {
        stack.push([str + open, opened + 1, closed, [...openStack, open]]);
      }
    }

    if (closed < opened) {
      const lastOpen = openStack[openStack.length - 1];
      stack.push([
        str + brackets[lastOpen],
        opened,
        closed + 1,
        openStack.slice(0, -1),
      ]);
    }
  }

  return result;
}

module.exports = generateBrackets;
