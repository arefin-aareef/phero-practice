// ----- Problem 1: Let’s play a mind game -----
// This function will return result of some arithmetic operations

function mindGame(number){
    if(typeof number !== 'number'){
       return 'Enter positive number only';
    }
    let stepOne = number * 3;
    let stepTwo = stepOne + 10;
    let stepThree = stepTwo / 2;
    let stepFour = stepThree - 5;
    return stepFour;
}
const getNumber = mindGame(5); 
console.log(getNumber);

// ----- Problem 2: Finding even or odd -----
// This function will return even or odd accroding to the length of string

function evenOdd(word){
    if(typeof word !== 'string'){
        return 'Enter string only';
    }
    else if(word.length % 2 == 0){
        return 'Even';
    }
    return 'Odd';
}
const result = evenOdd('Phero');
console.log(result);

// ----- Problem 3: Is Less or Greater than seven -----
// This function wiil return difference of two numbers with some arithmatic operations

function isLGSeven(number){
    if(typeof number !== 'number'){
        return 'Enter number only';
    }
    let difference = number - 7;
    if(difference < 7){
        return difference;
    }
    return number * 2;
}
const result = isLGSeven(6);
console.log(result);

// ----- Problem 4: Finding Bad data -----
// This function will search an array to return amount of bad data if there is any, else it will return 0

function findingBadData(dataArray){
    if(Array.isArray(dataArray) !== true){
        return 'Check with Array only';
    }
    let result = 0;
    for(let i = 0; i < dataArray.length; i++){
        let element = dataArray[i];
        if(element < 0){
            result = result + 1;
        }
    }
    return result;
}
const number = [2, -5, -7, -13];
const getNumber = findingBadData(number);
console.log(getNumber);

// ----- Problem 5: Convert your gems into diamond -----
// This function will take multiple value as input and check them with conditions after doing some arithmetic operatins then return the result.

function gemsToDiamond(gems1, gems2, gems3){
    if(typeof gems1 !== 'number' || typeof gems2 !== 'number' || typeof gems3 !== 'number'){
        return 'Check with number only';
    }
    let gems1power = gems1 * 21;
    let gems2power = gems2 * 32;
    let gems3power = gems3 * 43;
    let totalDiamond = gems1power + gems2power + gems3power;
    if(totalDiamond > 2000){
        result = totalDiamond - 2000;
        return result;
    }
    return totalDiamond;
}
const friend1gems = 100;
const friend2gems = 5;
const friend3gems = 1;
const getDiamond = gemsToDiamond(friend1gems, friend2gems, friend3gems);
console.log(getDiamond);

