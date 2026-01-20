const createFetcherMock = (responses) => {
  let counter = 0;
  let isLoading = false;

  return async () => {
    if (isLoading) {
      throw new Error("429 Too Many Requests");
    }

    const response = responses[counter % responses.length];
    isLoading = true;

    await new Promise((resolve) => setTimeout(resolve, 10 * Math.random()));

    isLoading = false;
    counter++;

    return response.error
      ? Promise.reject(response.error)
      : Promise.resolve(response.data);
  };
};

async function fetchWithAutoRetry(fetcher, count) {
  let currentCount = 0;

  async function request(res, rej) {
    return fetcher()
      .then(res)
      .catch((e) => {
        if (count === currentCount++) {
          rej(e);
        } else {
          return request(res, rej);
        }
      });
  }

  return new Promise(request);
}

module.exports = {
  createFetcherMock,
  fetchWithAutoRetry,
};
