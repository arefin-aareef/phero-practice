const user = {id: 1, name: 'Arefin', job: 'actor'};

const stringified = JSON.stringify(user);
console.log(stringified);

const JSONPerse = JSON.parse(stringified);
console.log(JSONPerse);