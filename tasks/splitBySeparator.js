const splitWordsBySeparator = (words, separator) => {
  const result = [];
  for (let i = 0; i < words.length; i++) {
    result.push(...words[i].split(separator));
  }
  return result.filter(Boolean);
};

module.exports = splitWordsBySeparator;
