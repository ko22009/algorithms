const anagram = require('./anagram');

it("Anagram true", async () => {
    const result = anagram('aab', 'abraabrar');

    expect(result).toBeTruthy();
});

it("Anagram false", async () => {
    const result = anagram('abb', 'abraabrar');

    expect(result).toBeFalsy();
});
