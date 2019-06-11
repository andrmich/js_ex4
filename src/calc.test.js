import * as calc from "./calc";

beforeEach(() => {
  calc.Calc.mockClear();
});

test("for '' returns 0", () => {
  const cal = new calc.Calc();
  expect(cal.add("")).toBe(0);
});

test("for '1' returns 1", () => {
  const cal = new calc.Calc();
  expect(cal.add("1")).toBe(1);
});

test("for '1, 2' returns 3", () => {
  const cal = new calc.Calc();
  expect(cal.add("1, 2")).toBe(3);
});

test("for '3,5,6' returns 14", () => {
  const cal = new calc.Calc();
  expect(cal.add("3,5,6")).toBe(14);
});

test("for many characters '3,5,6,7,8,9,156' returns 14", () => {
  const cal = new calc.Calc();
  expect(cal.add('3,5,6,7,8,9,156')).toBe(14);
});

test("can use '\n' as separator '3\n5\n6,7,8,9,156' returns 14", () => {
  const cal = new calc.Calc();
  expect(cal.add('3,5,6,7,8,9,156')).toBe(14);
});

test("check if function add throws an error if given a number < 0 ", () => {
  const cal = new calc.Calc();
  function add_minus() {
    cal.add("-11");
  }
  expect(add_minus).toThrowError("Dozwolone są tylko liczby naturalne");
});


test("that numbers >1000 are ignored '3\n1066,6,7,8,9,156' returns 9", () => {
  const cal = new calc.Calc();
  expect(cal.add('3\n1066,6,7,8,9,156')).toBe(9);
});
