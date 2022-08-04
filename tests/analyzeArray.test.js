const analyzeArray = require("../src/analyzeArray");

test("array objects correctly analyzed", () => {
  const arr = [1, 8, 3, 4, 2, 6];
  expect(analyzeArray(arr)).toEqual({ average: 4, min: 1, max: 8, length: 6 });
});

test("empty array returns null", () => {
  const arr = [];
  expect(analyzeArray(arr)).toBeNull();
});
