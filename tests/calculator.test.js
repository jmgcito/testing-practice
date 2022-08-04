const calculator = require("../src/calculator");

test("testing addition calculations", () => {
  //both positive
  expect(calculator.add(2, 8)).toBe(10);
  //greater positive, lesser negative
  expect(calculator.add(8, -4)).toBe(4);
  //lesser positive, greater negative
  expect(calculator.add(10, -100)).toBe(-90);
  //both negative
  expect(calculator.add(-20, -30)).toBe(-50);
});

test("testing subtraction calculations", () => {
  //greater positive, lesser positive
  expect(calculator.subtract(5, 2)).toBe(3);
  //lesser positive, greater positive
  expect(calculator.subtract(2, 5)).toBe(-3);
  //positive, negative
  expect(calculator.subtract(5, -2)).toBe(7);
  //negative, positive
  expect(calculator.subtract(-5, 2)).toBe(-7);
  //both negative
  expect(calculator.subtract(-5, -2)).toBe(-3);
});

test("testing multiplication calculations", () => {
  // both positive
  expect(calculator.multiply(5, 2)).toBe(10);
  // positive, negative
  expect(calculator.multiply(5, -2)).toBe(-10);
  // both negative
  expect(calculator.multiply(-5, -8)).toBe(40);
});

test("testing division calculations", () => {
  // both positive
  expect(calculator.divide(5, 2)).toBe(5 / 2);
  // positive, negative
  expect(calculator.divide(5, -2)).toBe(5 / -2);
  // both negative
  expect(calculator.divide(-5, -8)).toBe(-5 / -8);
  //impossible
  expect(calculator.divide(-5, 0)).toBe(-5 / 0);
});
