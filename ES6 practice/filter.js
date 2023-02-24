// Filter
const  numbers = [12, 14, 6, 7, 77, 99, 63, 77];
const bigNums = numbers.filter(number => number > 20);
console.log(bigNums);

// Find
const findNum = numbers.find(n => n > 20);
console.log(findNum);

//  Reduce
const total = numbers.reduce((previous, current) => previous + current , 0);
console.log(total);

// Notation 
const student = {
    name: 'Arif',
    age: 15,
    class: 'Ten',
    marks: {
        math: 78,
        physics: 89,
        chemistry: 67,
    }
}

const math = student.marks.math;
const chemistry = student['marks']['chemistry'];
const subject = 'math';
const subjectMarks = student.marks[subject];

console.log(subjectMarks);