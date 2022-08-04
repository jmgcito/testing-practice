const capitalize = require("../src/capitalize");

test("capitalizes first letter of string", () => {
  const str = "poop";
  expect(capitalize(str)).toBe("Poop"); //toMatch(/^[A-Z]/);
});
