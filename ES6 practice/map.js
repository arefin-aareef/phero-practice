const numbers = [2, 4, 5, 6, 7, 4];
function getDouble(numbers) {
  const output = [];
  for (const number of numbers) {
    const double = doubleIt(number)
    output.push(double);
  }
  return output;
}

// function doubleIt(number){
//     return number * 2;
// }

const doubleIt = num => num * 2;


const result = getDouble(numbers);
// console.log(result);

// Map

const makeDouble = numbers.map(doubleIt);
const makeDouble2 = numbers.map(x => x * 2);
console.log(makeDouble2);
