// Przepisz poniższą implementację na składnię ES6
// A następnie stwórz do tego testy. Testy powinny pokrywać wszystkie zdefiniowane metody!
export function Fruit(type, color, size) {
  this.type = type;
  this.color = color;
  this.size = size;
}

Fruit.prototype.getInfo = function() {
  return "This is " + this.color + " " + this.type;
};

Fruit.prototype.slice = function() {
  return this.size / 2;
};

Fruit.prototype.chop = function(slices) {
  return this.size / slices;
};

Fruit.prototype.isThisApple = function() {
  return this.type === "apple";
};

Fruit.prototype.isRotten = function() {
  return this.color === "brown";
};
