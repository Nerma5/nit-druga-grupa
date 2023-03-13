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

let string = "Mama ima momu";

const numbers = (someString) => {
  let count = 0;
  for (let i = 0; i < someString.length; i++) {
    count++;
  }
  return count;
};

console.log(numbers(string));
