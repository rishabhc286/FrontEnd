const numbers = [1,2,3,4,5];
const squares = numbers.map(n=>n*n);         // [1,4,9,16,25]
const evens = numbers.filter(n=>n%2===0);    // [2,4]
const sum = numbers.reduce((a,b)=>a+b,0);    // 15
numbers.forEach(n=> console.log(n));