// -------------------------Function basics---------------------------

// function phonePrice(money, money2) {
//     console.log('price of phone is:', money , 'tk and another is:', money2, 'tk');
//     both = money + money2;
//     return both;
// }
// var total = phonePrice(10000, 20000);
// console.log('For both mobile:', total);

// function singara(money){
//     var price = 10;
//     var quantity = money / price
//     return quantity;
// }
// var taka = 150;
// var amount = singara(taka)
// console.log('Total', amount, 'piece singara');

// -----------------adding two numbers ---------------------

// function add(num1, num2) {
//     const sum = num1 + num2;
//     return sum;
// }
// const result1 = add(10, 15);
// const result2 = add(20, 10);
// const total = add(result1, result2);
// console.log(total);

// -----------------------Even Odd Number------------------

// function isEven(number) {
//     var remainder = number % 2
//     if (remainder == 0) {
//         console.log('Even');
//     }
//     else {
//         console.log('Odd');
//     }
// }
// isEven(11)

// ------------------------Sum of Array----------------

// function arraySum(number){
//     let sum = 0
//     for(let i=0; i<number.length; i++){
//         const index = i;
//         const element = number[index];
//         sum = sum + element;
//         console.log(index, element, sum)
//     }
//     return sum
// }
// let myNumber = [12, 13, 20, 37, 40, 51]
// arraySum(myNumber)

// ----------------find odd num from array store it on another array--------------

// function oddNum(number){
//     const odd = [];
//     for(let i=0; i<number.length; i++){
//         const element = number[i];
//         if(element % 2 !== 0) {
//             console.log(element)
//             odd.push(element)
//         }
//     }
//     return odd;
// }
// let myNumber = [12, 13, 20, 37, 40, 51]
// const odds = oddNum(myNumber)
// console.log(odds)

// ----------------Factorial----------------

// function factorial(number){
//     let result = 1;
//     for(let i=1; i<=number; i++){
//         result = result * i;
//     }
//     return result
// }
// const result = factorial(9)
// console.log(result)

// -------------factorial - reverse --------------

// function factorial(number){
//     let result = 1;
//     for(let i = number; i >= 1; i--){
//         result = result * i; 
//     }
//     return result;
// }
// const fact = factorial(9)
// console.log(fact);

// ----------factorial - whileloop --------------

// function factorial(number){
//     let num = 1;
//     let result = 1;
//     while(num <= number){
//         result= result * num;
//         num++;
//     }
//     return result
// }
// const data = factorial(5)
// console.log(data)

// ---------- largest number from array -----------

// function maxInArray(number) {
//     let largest = number[0];
//     for(let i = 0; i < number.length; i++){
//         const element = number[i];
//         if(element > largest){
//             largest = element;
//         }
//     }
//     return largest
// }
// const height = [10, 20, 37, 28, 25]
// console.log(maxInArray(height));

// ---------------- reverse string character -------------

// function reverseString(text){
//     let reverse = '';
//     for(let i = text.length-1; i >= 0; i--){
//         const element = text[i];
//         reverse = reverse + element;
//     }
//     return reverse
// }
// const myString = 'I am a good boy';
// const reversed = reverseString(myString);
// console.log(reversed);

// ---------- word reerse ----------

// function reverseWords(str){
//     const words = str.split(' ');
//     const result = []
//     for(let i = words.length - 1; i >= 0; i--){
//         const element = words[i];
//         result.push(element)
//     }
//     const reversed = result.join(' ');
//     return reversed;
// }
// const myString = 'I am a good boy';
// const reversed = reverseWords(myString);
// console.log(reversed);

// --------------- remove duplicates from array-----------

// function duplicate(check){
//     const unique = [];
//     for(let i = 0; i < check.length; i++){
//         const element = check[i];
//         if(unique.includes(element) === false){
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// let number = [10, 10, 20, 30, 30, 40, 50]
// let newArr = duplicate(number);
// console.log(newArr);

// ----------validation---------

// function add(num1, num2){
//     if(typeof num1 !== 'number' || typeof num2 !== 'number'){
//         return 'enter a number'
//     }
//     return num1 + num2;
// }

// const result = add(12, 45)
// console.log(result);

function compare(a, b) {

    if (a.toString() === b) {
   
    return true;
   
    } else {
   
    return false;
   
    }
   
   }
   
   const result = compare(25, 25);
   
   console.log(result);