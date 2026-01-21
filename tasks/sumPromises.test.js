const sumPromises = require("./sumPromises");

test("sumPromises resolve 4", async () => {
  const input = [Promise.resolve(2), Promise.resolve(2)];
  const result = await sumPromises(input);
  expect(result).toEqual(4);
});

test("sumPromises reject 4", async () => {
  const input = [Promise.resolve(2), Promise.reject(2)];
  const result = await sumPromises(input);
  expect(result).toEqual(4);
});
