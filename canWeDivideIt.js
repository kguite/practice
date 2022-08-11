// https://www.codewars.com/kata/5a2b703dc5e2845c0900005a/train/javascript


// regular function
function isDivideBy(number, a, b) {
    if (number % a === 0 && number % b === 0) {
      return true;
    } else {
      return false;
    }
  }

// arrow function
const isDivideBy = (number, a, b) => number % a === 0 && number % b === 0;