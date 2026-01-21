const sumPromises = async function (promises) {
  return Promise.allSettled(promises).then((results) => {
    return results.reduce((acc, val) => acc + (val.value ?? val.reason), 0);
  });
};

module.exports = sumPromises;
