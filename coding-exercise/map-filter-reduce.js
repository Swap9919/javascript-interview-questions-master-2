const users = [
      {firstname: "sai", lastname: "swaroop", age: 28},
      {firstname: "elon", lastname: "musk", age: 39},
      {firstname: "ajay", lastname: "dev", age: 43},
      {firstname: "satya", lastname: "nadela", age: 48},
      {firstname: "keerthi", lastname: "sanan", age: 29},
      {firstname: "depika", lastname: "padukon", age: 29},
];

const output = users.map( x => x.firstname + " " + x.lastname);
console.log(output);

// we use reduce when we need one value out of an array


// acc = { 28 : 1, 39 : 1, 43 : 1, 48 : 1, 29 : 2 }
const output2 = users.reduce(function (acc, curr) {
      if(acc[curr.age]){
            acc[curr.age] = ++acc[curr.age]
      }else{
            acc[curr.age] = 1;
      }
      return acc;
}, {});

console.log(output2);

// we can basically chain these map filter and reduce functions

const output3 = users.filter(x => x.age >30).map(x => x.firstname);
console.log(output3);