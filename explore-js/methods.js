const student = {
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

const output = student.exam();
// console.log(output);
const reExam = student.improveExam('Algebra');
// console.log(reExam);
const remaining = student.treatDe(900, 100);
console.log(remaining);
const dola = student.treatDe(500);
// console.log(dola);