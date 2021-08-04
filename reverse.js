function reverse(str) {
  const array = Array.from(str);
  const revert = Array.from(str).reverse().filter(char => char !== ' ')
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] !== " ") {
        array[i] = revert[index++];
    }
  }
  return array.join("");
}

module.exports = reverse
