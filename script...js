
// 1. Use map to double all numbers in an array
const numbers = [10, 20, 30, 40, 50];

const doubledNumbers = numbers.map(function(num) {
    return num * 2;
});

console.log("Doubled Numbers:", doubledNumbers);


// 2. Use filter to get even numbers
const evenNumbers = numbers.filter(function(num) {
    return num % 2 === 0;
});

console.log("Even Numbers:", evenNumbers);


// 3. Use find to retrieve a user by id
const users = [
    { id: 1, name: "Tanushri" },
    { id: 2, name: "neha" },
    { id: 3, name: "Priya" }
];

const user = users.find(function(u) {
    return u.id === 2;
});

console.log("User with ID 2:", user);


// 4. Use reduce to calculate total marks
const marks = [80, 75, 90, 85, 70];

const totalMarks = marks.reduce(function(total, mark) {
    return total + mark;
}, 0);

console.log("Total Marks:", totalMarks);


// 5. Compare slice and splice

let fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"];

// slice() -> does NOT change original array
let slicedFruits = fruits.slice(1, 3);
console.log("Slice Result:", slicedFruits);
console.log("Original Array after slice:", fruits);

// splice() -> changes original array
let splicedFruits = fruits.splice(2, 1);
console.log("Splice Removed:", splicedFruits);
console.log("Original Array after splice:", fruits);