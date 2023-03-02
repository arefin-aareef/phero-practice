const numbers = [12, 54, 67, 89, 3];

// for(const number of numbers){
//     console.log(number);
// }

const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
// console.log(keys);
for(const key of keys){
    // console.log(key, bottle[key]);
}

// for in loop
for(const key in bottle){
    console.log(key);
}
