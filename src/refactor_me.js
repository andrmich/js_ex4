// Przepisz poniższą implementację na składnię ES6
// A następnie stwórz do tego testy. Testy powinny pokrywać wszystkie zdefiniowane metody!
export class Fruit {
  constructor(type, color, size) {
    this.type = type;
    this.color = color;
    this.size = size;
  }

  getInfo() {
    return `This is ${this.color} ${this.type}`;
  }

  slice() {
    return this.size / 2;
  }

  chop(slices) {
    return this.size / slices;
  }

  isThisApple() {
    return this.type === "apple";
  }

  isRotten() {
    return this.color === "brown";
  }
}
