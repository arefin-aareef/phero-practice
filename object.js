// var shoppingCart = {
//     books: 3,
//     pen: 25,
//     pencil: 10,
//     diary: 5
// }
// console.log(shoppingCart)
// var penCount = shoppingCart.pen
// console.log(penCount);

// -------------Get object as an array-----------

// var properties1 = Object.keys(shoppingCart)
// var properties2 = Object.values(shoppingCart)
// console.log(properties1);
// console.log(properties2);
// for(i = 0; i < properties1.length; i++){
//     var propertyName = properties1[i];
//     var propertyValues = shoppingCart[propertyName];
//     console.log(propertyName, propertyValues);
// }
// for(var propertyName in shoppingCart){
//     const value = shoppingCart[propertyName]
//     console.log(propertyName, value);
// }

// --------------------Set Property Value - 3 ways----------

// shoppingCart.diary = 15;
// console.log(shoppingCart);
// shoppingCart['diary'] = 30;
// console.log(shoppingCart);
// var propertyValues = 'diary';
// shoppingCart[propertyValues] = 100;
// console.log(shoppingCart);

//----------find cheapest phone ---------------

// const allphones = [
//     { name: 'Samsung', camera: 12, storage: '32gb', price: 36000},
//     { name: 'Nokia', camera: 10, storage: '24gb', price: 30000},
//     { name: 'Xiomi', camera: 16, storage: '16gb', price: 20000},
// ]
// function cheap(phones) {
//     let cheapest = phones[0]
//     for(let i = 0; i < phones.length; i++){
//         const phone = phones[i];
//         if(phone.price < cheapest.price){
//             cheapest = phone;
//         }
//     }
//     return cheapest;
// }
// const select = cheap(allphones);
// console.log(select);