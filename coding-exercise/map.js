const arr = [4,6,7,3,7,9];
const output = arr.map(binary);
function double(x) {
      return x*2;
}
function triple(x) {
      return x*3;
}
function binary(x) {
      return x.toString(2);
}

const output2 = arr.map( (x) => x.toString(2));

console.log(output);
console.log(output2);