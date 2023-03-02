const kodomAli = {
    name: 'Arefin',
    money: 5000,
    study: 'math',
    subjects: ['calculus', 'algebra', 'geometry'],
    exam: function(){
        return this.name;
    },
    improveExam: function(subject){
        this.exam();
        return `${this.name} is taking exam again`;
    },
    treatDe: function(amount, tips){
        this.money = this.money - amount - tips;
        return this.money;
    }
}

const badamAli = {
    name: 'kacha badam',
    money: 8000
}

const result = kodomAli.exam.call(badamAli);
// console.log(result);

const badamMoney = kodomAli.treatDe.call(badamAli, 400, 40);
// console.log(badamMoney);

const badamMoney2 = kodomAli.treatDe.apply(badamAli, [1000, 100]);
console.log(badamMoney2);

const badamMoney3 = kodomAli.treatDe.bind(badamAli);
const remaining = badamMoney3(1000, 100);
console.log(remaining);
