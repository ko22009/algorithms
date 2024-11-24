function factorial(n) {
  if (!Number.isInteger(n) || n < 0) return "error";

  const stack = [];
  let i = n;
  let res = 1;

  while (i > 0) {
    stack.push(i--);
  }

  while (stack.length) {
    res *= stack.pop();
  }

  return res;
}

module.exports = factorial;
