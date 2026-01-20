const retryFetch = require("./retryFetch");

it("retryFetch success", async () => {
  const fetcher = retryFetch.createFetcherMock([
    { error: "504 Gateway Timeout" },
    { error: "503 Service Unavailable" },
    { error: "502 Bad Gateway" },
    { error: "500 Internal Server Error" },
    { data: "Hello, world!" },
    { data: "Yandex" },
  ]);

  return retryFetch.fetchWithAutoRetry(fetcher, 5).then((data) => {
    expect(data).toBe("Hello, world!");
  });
});

it("retryFetch error", async () => {
  const fetcher = retryFetch.createFetcherMock([
    { error: "504 Gateway Timeout" },
    { error: "503 Service Unavailable" },
    { error: "502 Bad Gateway" },
    { error: "500 Internal Server Error" },
    { data: "Hello, world!" },
    { data: "Yandex" },
  ]);

  return retryFetch.fetchWithAutoRetry(fetcher, 3).catch((data) => {
    expect(data).toBe("500 Internal Server Error");
  });
});
