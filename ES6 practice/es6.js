// Arrow Function

const add = (num1, num2) => num1 + num2;
const result = add(15, 16);
console.log(result);

// Spread Operator

const number = [1, 2, 3, 5 ,77]
const number2 = [4, 5, ...number, 7, 9];
console.log(number2);

// Destructuring - Object

const fish = {
    name: 'hilsha',
    color: 'silver',
    price: 4000,
    address: 'Padma'
}

const {color} = fish;
console.log(color);

// Destructuring - Array

const [first] = [44, 99]; 
console.log(first);

function sum(a, b=9){
    return a+b;

}
console.log(sum(2, 7));