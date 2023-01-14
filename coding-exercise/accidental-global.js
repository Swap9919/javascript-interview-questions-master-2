function foo() {
    let x = y = 0;
    x++;
    y++;
    return x;
}

console.log(foo(), typeof x, typeof y);

// typeof a should return 'undefined' so the first console.log is 'undefined'.

//     However, the second console.log logs 'number' since b is a global variable.

//         Don’t let the let keyword fool us, b is still a global variable since it has no keyword before it.

//             b = 0 is the same as window.b = 0 .

// To avoid this tricky situation, use strict mode by adding 'use strict' to the top of out code.Then we’ll get the error ‘b is not defined’.

// Modules always use strict mode so this is not an issue with them
