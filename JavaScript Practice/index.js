// function isArray() {
//   let i = prompt("please enter an array");
//   return i[0] === "[" && i[i.length - 1] === "]" ? true : false;
// }
// alert(isArray());

// function joinArray(arr) {
//   return arr.join("$");
// }
// console.log(joinArray(["orange", "apple", "grape"]));

// const findIndex = (arr, num) => {
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] === num) console.log(`Index of ${num} is ${i}`);
//   }
// };
// findIndex([1, 2, 3, 4, 5], 5);
// findIndex([1, 2, 3, 4, 5, 6], 2);

// const getSum = (arr) => arr.reduce((sum, current) => sum + current, 0);
// const getProduct = (arr) =>
//   arr.reduce((product, current) => product * current, 1);
// console.log(getSum([1, 2, 3, 4, 5]));
// console.log(getSum([2, 7, 10]));
// console.log(getProduct([1, 2, 3, 4, 5]));
// console.log(getProduct([2, 3]));

// const removeDuplicate = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (arr[i] === arr[j]) arr.splice(i, 1);
//     }
//   }
//   return arr;
// };
// console.log(removeDuplicate([1, 1, 2, 3, 7, 7, 0]));
// console.log(removeDuplicate(["Peter", "James", "Bob", "Peter"]));

// const findLeapYears = (a, b) => {
//   let leapYears = [];
//   for (let i = a; i <= b; i++) {
//     if (i % 400 === 0 || (i % 4 === 0 && i % 100 !== 0)) leapYears.push(i);
//   }
//   return leapYears;
// };
// console.log(findLeapYears(2000, 2018));
// console.log(findLeapYears(2013, 2015));

const fibonacci = (n) => (n <= 2 ? 1 : fibonacci(n - 2) + fibonacci(n - 1));
console.log(fibonacci(1));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
