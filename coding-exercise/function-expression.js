var y = 1;
if (function f(){}) {
    y += typeof f; // y=y+typeof function 
}
console.log(y);
// result is 1undefined