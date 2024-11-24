const openedBrackets = ["{", "[", "("];
const closedBrackets = ["}", "]", ")"];

function brackets(str) {
  const stack = [];
  const chars = str.split("");
  for (let char of chars) {
    if (openedBrackets.includes(char)) {
      stack.push(char);
    } else if (closedBrackets.includes(char)) {
      if (stack.length === 0) {
        return false;
      }
      const current = stack.pop();
      const i = openedBrackets.findIndex((el) => el === current);
      if (closedBrackets[i] !== char) {
        return false;
      }
    } else {
      return false;
    }
  }

  if (stack.length > 0) {
    return false;
  }

  return true;
}

module.exports = brackets;
