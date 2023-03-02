const first = {a:2, b:3, c:5};
const second = {a:2, b:5, c:3};
// if(first === second){
//     console.log('same');
// }
// else {
//     console.log('different');
// }

// const firstString = JSON.stringify(first);
// const secondString = JSON.stringify(second);
// console.log(firstString, secondString)

function compareObject(first, second){
    const firstKeys = Object.keys(first);
    const secondKeys = Object.keys(second);
    if(firstKeys.length === secondKeys.length){
        for(const key of firstKeys)
            if(first[key] !== second[key]){
                return false;
            }
            return true;
    }
    else{
        return false;
    }
}
const isSame = compareObject(first, second);
console.log(isSame);