const reverseString = require("../src/reverseString");

test("takes a string and returns it reversed", () => {
  const str = "Stanley";
  expect(reverseString(str)).toBe("yelnatS");
});
