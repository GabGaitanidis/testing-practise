const capitalize = require("./capitalize");
const reverseString = require("./reversedString");
const analyze = require("./analyze");
const obj = require("./calc");
const ceasar = require("./ceasar");
it("String is capitalized", () => {
  const regex = /^[A-Z]/;
  expect(capitalize("geia")).toMatch(regex);
});

it("String is reversed", () => {
  const s = "ola";
  expect(reverseString(s)).toBe("alo");
});

it("Calculator is working", () => {
  expect(obj.add(1, 2)).toBe(3);
  expect(obj.subtract(7, 4)).toBe(3);
  expect(obj.multiply(4, 4)).toBe(16);
  expect(obj.divide(10, 2)).toBe(5);
});

it("Is working", () => {
  let arr = [1, 8, 3, 4, 2, 6];
  expect(analyze(arr)).toHaveProperty("min", 1);
  expect(analyze(arr)).toHaveProperty("Average", 4);
  expect(analyze(arr)).toHaveProperty("max", 8);
  expect(analyze(arr)).toHaveProperty("length", 6);
});

it("Ceasar works", () => {
  let string = "XYZ";
  let string3 = "Hello";
  let string2 = "Hello, World";
  expect(ceasar(string, 3)).toBe("ABC");
  expect(ceasar(string2, 3)).toBe("Khoor, Zruog");
  expect(ceasar(string3, 3)).toBe("Khoor");
});
