const caesarCipher = require("../src/caesarCipher");

test("Wraps character from z to a", () => {
  const str = "z";
  expect(caesarCipher(str, 1)).toBe("a");
});

test("Preserves case", () => {
  const str = "ZzAa";
  expect(caesarCipher(str, 1)).toBe("AaBb");
});

test("Ignores punctuation", () => {
  const str = ":!?hel!lo#$";
  expect(caesarCipher(str, 1)).toBe(":!?ifm!mp#$");
});

test("Pangram test", () => {
  const str = "The quick brown fox jumps over the lazy dog!";
  expect(caesarCipher(str, 1)).toBe(
    "Uif rvjdl cspxo gpy kvnqt pwfs uif mbaz eph!"
  );
});
