const arr = [4,6,7,3,7,9];
// const output = arr.map(double);
// function double(x) {
//       return x*2;
// }
// function triple(x) {
//       return x*3;
// }
// function binary(x) {
//       return x.toString(2);
// }

const output2 = arr.map( (x) => x.toString(2));
const output1 = arr.map( (x) =>  x*2 );

console.log(output1);
console.log(output2);

// map creates a new array from calling a function for every array element.
// it calls a function once for each element in an array.