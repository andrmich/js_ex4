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
