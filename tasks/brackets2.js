const openedBrackets = {
  "{": "}",
  "[": "]",
  "(": ")",
};

function brackets(str) {
  const stack = [];
  const chars = str.split("");
  for (let char of chars) {
    if (char in openedBrackets) {
      stack.push(char);
    } else {
      const current = stack.pop();
      if (openedBrackets[current] !== char) {
        return false;
      }
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

module.exports = brackets;
