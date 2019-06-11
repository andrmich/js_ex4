/**
 * Zasady ogólne
 *
 * 1. Nie czytamy pełnej treści zadania od razu. Robimy punkt po punkcie.
 * 2. Najpierw test, później implementacja.
 * 3. Pamiętaj o małych krokach!
 * 4. Jeśli w chwili obecnej test nie może być zrealizowany, utwórz najprosztą implementację, chociażby return true;
 * tak żeby nic cię nie blokowąło.
 *
 *
 *
 *
 * Zadanie:
 *
 * 1. Utwórz klasę Calc.
 * 2. Utwórz w klasie Calc metodę add która w inpucie pobiera stringa z numerami.
 * 3. Metoda add może przyjmować w inpucie 0,1,2 albo 3 liczby i musi zwracać ich sumę.
 *    Dla inputu:
 *    "" - zwróci 0
 *    "1" - zwróci 1
 *    "1,2" - zwróci 3
 *    "3,5,6" - zwróci 14
 * 4, Pozwól na wpisywanie dowolnej ilości cyfr po przecinku. Jednak kalkulator zlicza tylko pierwsze 3.
 * 5. Pozwól na zastosowanie znaku nowej linni "\n" zamiast ","
 * 6. Wywołanie metody z liczbami ujemnymi powinno zwrócić błąd: "Dozwolone są tylko liczby naturalne"
 * 7. Liczby większe niż 1000 powinny być ignorowane.
 */
export class Calc {
  constructor() {}

  add(numbersString) {
    if (numbersString === "") {
      return 0;
    }
    let arr = numbersString.split(/[,\n]/g, 3);
    let numArr = [];
    for (let i = 0; i < arr.length; i++) {
      numArr.push(parseFloat(arr[i]));
    }
    const hasNegative = numArr.some(x => x < 0);
    if (hasNegative) {
      throw Error`only naural`;
    }
    for (let i = 0; i < numArr.length; i++) {
      if (numArr[i] > 1000) {
        numArr[i] = 0;
      }
    }
    let [a, b, c] = numArr;
    if (a === undefined) {
      a = 0;
    }
    if (b === undefined) {
      b = 0;
    }
    if (c === undefined) {
      c = 0;
    }
    return a + b + c;
  }
}
