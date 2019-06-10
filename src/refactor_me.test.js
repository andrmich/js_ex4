import * as rfm from "./refactor_me";

beforeEach(() => {
  rfm.Fruit.mockClear();
});

it("class can be called", () => {
  const fruit = new rfm.Fruit("apple", "red", 12);
  expect(fruit.type).toBe("apple");
});

test("get info about the fruit", () => {
  const fruit = new rfm.Fruit("apple", "red", 12);
  expect(fruit.getInfo()).toBe("This is red apple");
});

test("slice the fruit", () => {
  const fruit = new rfm.Fruit("apple", "red", 12);
  expect(fruit.slice()).toBe(6);
});

test("chop the fruit", () => {
  const fruit = new rfm.Fruit("apple", "red", 12);
  expect(fruit.chop(4)).toBe(3);
});

test("check if it is an apple", () => {
  const fruit = new rfm.Fruit("apple", "red", 12);
  expect(fruit.isThisApple()).toBe(true);
});

test("check if it is rotten", () => {
  const fruit = new rfm.Fruit("apple", "red", 12);
  expect(fruit.isRotten()).toBe(false);
});
