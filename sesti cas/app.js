// let string = "Mama ima momu";

// const checkLetter = (someString) => {
//   let numbersMs = 0;
//   for (let i = 0; i < someString.length; i++) {
//     if (someString[i] === "m" || someString[i] === "M") {
//       numbersMs++;
//     }
//   }
//   return numbersMs;
// };

// console.log(checkLetter(string));

// const increment = (prev, curr = 1) => prev + curr;
// console.log(increment(1, 2));

////////////////////////////////////zadaci sa stringovima///////////////////////////////////////////

// let string = "Mama ima momu";

// const numbers = (someString) => {
//   let count = 0;
//   for (let i = 0; i < someString.length; i++) {
//     count++;
//   }
//   return count;
// };

// console.log(numbers(string));

// const checkLetter = (string) => {
//   let malaSlova = 0;
//   let velikaSlova = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i] !== " ") {
//       if (string[i] === string[i].toUpperCase()) {
//         velikaSlova++;
//       } else malaSlova++;
//     }
//   }
//   return `Velikih slova ima ${velikaSlova}, a malih ${malaSlova}`;
// };

// console.log(checkLetter(nekiString));

// let nekiString = "SJDF kjsbdf kjbJsSAK wjk KAbaes";

// const control = (string) => {
//   let malaSlova = 0;
//   let velikaSlova = 0;

//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() < string[i]) {
//       velikaSlova++;
//     } else malaSlova++;
//   }
//   return `velikih slova ima ${velikaSlova}, a malih ${malaSlova}, sto znaci da velikih slova ima vise`;
// };

// console.log(control(nekiString));

// let nekiString = "anavolimilovana";

// const check = (string) => {
//   let palindrom = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     palindrom += string[i];
//   }
//   return palindrom;
// };

// console.log(check(nekiString));

// function reversingNames(name1, name2) {
//     for (let i = name2.length - 1; i >= 0; i--) {
//       if (name1[i]) console.log(name1[i], i);
//       console.log(name2[i], i);
//     }
//   }

// const objekat = (name, lstname) => {
//   const obj = {
//     name,
//     lstname,
//   };
//   return obj;
// };

// console.log(objekat("nerma", "hot"));

// class Bus {
//   constructor(seats) {
//     this.seats = seats;
//   }
//   numberOfSeats(arg1) {
//     this.seats = arg1;
//   }
//   getSeats() {
//     return this.seats;
//   }
// }
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  //setter
  setName(arg1) {
    this.name = arg1;
  }
  // getter
  getName() {
    return this.name;
  }
}

let person1 = new Person("Nemra", 18);
console.log(person1.getName());
