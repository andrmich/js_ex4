# PnK 5

## Informacje wstępne

PDF dostępny tutaj: https://transfer.grupazpr.pl/download?di=MEqMum_2ruxmrAIBzOiPVyOavytpdi8TwdFPmh5OFAo&key=3e75b6f367075d1a5dfafe3fc03006af

Dziś omówimy sobie:

* Klasy
* Testy jednostkowe

1. Pracując z Pythonem bądź PHPem przywykliśmy do strukturyzowania logiki naszych aplikacji wokół
klas oraz dziedziczenia. 

    W starszym JS (ES3-5) dało się tworzyć struktury obiektowe, jednak wymagało to lekkiej zmiany 
    myślenia. ES5 wymagał tworzenia 'pseudo klas' do których 'doczepiane' były funkcje poprzez 
    prototypowanie. ES6 na szczęście to zmienił, wprowadzona została konstrukcja klasy jaką znamy
    z nowoczesnych języków programowania. Ułatwiło to nie tylko samo pisanie programów, ale również
    czytanie kodu gotowych bibliotek. 
    
    Struktura klasy JS jest następująca:
    
    ```
    class [nazwa_klasy] {
      [zmienna_publiczna];
      #[zmienna_prywatna];
    
      constructor([zmienne]) {
        this.[zmienna] = zmienna
      }
    
      get [nazwa_gettera]() {
        // ...
      }
    
      set [nazwa_settera](argumenty) {
        // ...
      }
    
      [nazwa_metody]() {
        // ...
      }
    }
    ```
    
    Dla przykładu:
    
    ```
    class Rectangle {
      width;
      #height = 0;
    
      constructor(height, width) {
        this.#height = height;
        this.width = width;
      }
      set height(newHeight) {
        this.#height = height;
      }
    
      get area() {
        return this.calcArea();
      }
      calcArea() {
        return this.#height * this.width;
      }
    }
    
    const square = new Rectangle(10, 10);
    console.log(square.area());
    console.log(square.width);
    
    ```
    
    Podobnie jak funkcje, klasy można przypisywać do zmiennych (choć nie jest to polecana praktyka). 
    
    ```
    let Rectangle = class {
      constructor(height, width) {
        this.height = height;
        this.width = width;
      }
    };
    
    console.log(Rectangle.name);
    ```
    
    Poza podstawową strukturą, ES6 wprowadził również:
    
    * funkcje statyczne (umożliwiają wywołanie metody bez tworzenia nowej instacji obiektu)
    * dziedziczenie (chociaż tutaj lepiej zabrzmi rozszerzanie, ze względu na to że nadal nie ma klas abstrakcyjnych)
    * wywoływanie konstruktorów klas z których dziedziczymy poprzez super()

2. Czy wiecie co oznacza termin TDD? Test Driven Development - mówiąc w skrócie, kod programu
formujemy poprzez wstępne pisanie testów, nie odwrotnie.

    Chcę, żeby praktycznie każdy kolejny kod powstawał najpierw w postaci testów a dopiero później
    jako właściwa implementacja. Wdroży was to do techiniki TDD oraz nauczy pisać testy. 
    
    Doskonale sobie zdaje sprawę, że TDD nie jest złotym środkiem na wszystkie problemy, jednak 
    prawie nikt z was wcześniej testów nie pisał bądź nie chciał pisać. 
    
    Jak zatem zacząć? To bardzo proste. 
    
      - Wybieracie framework pod testy. W przypadku JS'a najlepszym na start będzie Jest 
      - Wczytujecie się w dokumentację i Getting started: https://jestjs.io/docs/en/getting-started.html
      - Tworzycie swój pusty plik z testem oraz pusty plik z programem
      - Następnie zaczynacie pisać pierwszy przypadek testowy 
      - Uruchamiacie test runner i sprawdzacie czy działa (test powinien się wysypać)
      - Jeśli się posypało, to znaczy że można zacząć pisać kod aplikacji
      - Piszecie fragment kodu aplikacji który spełnia dany test
      - Jeśli test jest na zielono to znów wracacie do pisania przypadku testowego
      - Znów sprawdzacie czy się test runner wyrzucił błędy
      - I znów je naprawiacie implementując właściwy kod... i tak w kółko ;)
    
    Ważna zasada: testy powinny testować małe funkcjonalności, nie gigantyczne molochy logiczne. 
    Mały test -> mały zakres kodu do implementacji. Wiem, że na początku może być to dość upierdliwe,
    ale zwróci się to wam po pewnym czasie + da wam pewność, że program działa zgodnie z założeniami.
    
    TDD jest szczególnie przydatne w przypadku pisania API. Pomaga je nie tylko testować ale i formować
    jego kształt poprzez weryfikację wymagań.


I to by było na tyle. Skończone klasy oraz TDD, oznaczają pierwszy mikro-projekt! Ale o tym w kolejnej PnK!