// as the name suggest reduce it actually does not reduce anything ;)
 // reduce function is basically used at a place where you have to take all the elements of an array and come up with a single value out of them
 // sum or max or min in an array

// Sum

 const arr = [2,4,5,7,6,8];

 function findSum(arr){
      let sum = 0;
      for (let i = 0;i < arr.length; i++) {
            sum += arr[i];
      } 
      return sum;
 }
 console.log(findSum(arr)); 


 // reduce takes 2 params acc,curr ( accumulator, current) current is basically the values in array and accumulator is the values accumulated for the output.
 // second argument to this reduce function would be the initial value of accumulator
 // reduce basically iterates this function over an each abd every elements of this array 

const output = arr.reduce(function (acc, curr) {
      acc += curr;
      return acc;
}, 0);

console.log(findSum(arr)); 

// Max

function findMax(arr) {
      let max = 0;
      for (let i = 0; i < arr.length; i++) {
            if(arr[i]> max){
                  max = arr[i];
            }
      }
      return max;
}

console.log(findMax(arr)); 

// using reduce function

const output2 = arr.reduce(function(max, curr){
            if(curr > max){
                  max = curr;
            }
            return max;
}, 0);

console.log(output2); 