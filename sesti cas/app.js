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

let nekiString = "SJDF kjsbdf kjbJsSAK wjk KAbaes";

const control = (string) => {
  let malaSlova = 0;
  let velikaSlova = 0;

  for (let i = 0; i < string.length; i++) {
    if (string[i].toUpperCase() < string[i]) {
      velikaSlova++;
    } else malaSlova++;
  }
  return `velikih slova ima ${velikaSlova}, a malih ${malaSlova}, sto znaci da velikih slova ima vise`;
};

console.log(control(nekiString));
