const bottle = {color: 'yellow', price: 50, isCleaned: true, capacity: 1};
const keys = Object.keys(bottle);
const values = Object.values(bottle)
const pair = Object.entries(bottle);
// Object.seal(bottle);
// seal korle notun property add kora jai na, delete kora jai na kintu modify kora jai.

Object.freeze(bottle)
// freeze thakle kono kichui kora jabe na

delete bottle.isCleaned;
bottle.price = 1000;
bottle.height = 12;


console.log(bottle);