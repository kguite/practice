// Whale Talk exercise from Codecademy's JavaScript course

let input = 'turpentine and turtles';
const vowels = ['a', 'e', 'i', 'o', 'u'];
let resultArray = [];

for (let i = 0; i < input.length; i++) {
  for (let j = 0; j < vowels.length; j++) {
    if (input[i] === vowels[j]) {
      resultArray.push(input[i])
    }
  }
  if (input[i] === 'e') {
    resultArray.push('ee')
  } if (input[i] === 'u') {
    resultArray.push('uu')
  }
}
console.log(resultArray.join('').toUpperCase());