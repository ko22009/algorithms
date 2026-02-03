function generateBrackets(n) {
  const result = [];
  const stack = [["", 0, 0]];

  while (stack.length > 0) {
    const [current, open, close] = stack.pop();

    if (current.length === 2 * n) {
      result.push(current);
      continue;
    }

    if (open < n) {
      stack.push([current + "(", open + 1, close]);
    }

    if (close < open) {
      stack.push([current + ")", open, close + 1]);
    }
  }

  return result;
}

module.exports = generateBrackets;
