// 1. create object using object literals - one way

const player = {};
player.name = 'Aareeef';
player.speciality = 'batsman';
player.bat = function(){
    console.log('swing ur bat');
}
// console.log(player);
// player.bat();


// 2. another way
const student = {
    name: 'Arefin',
    job: 'bowler',
    ball: function(){
        console.log('throw ur ball');
    },
    salary: 10000
}

// 3. another way
const person = new Object();
// console.log(person);


// 4. Object create method
const item = Object.create(student);
// console.log(item.name);

// 5. class
class Person{
    name = 'Kazi';
    address = 'Dhaka';
    constructor(age){
        this.age = age
    }
}
const person1 = new Person(56);
// console.log(person1);

// 6. Function

function Car(model, price){
    this.model = model;
    this.price = price;
}
const tesla = new Car('tesla', 32);
console.log(tesla);
