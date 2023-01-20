let name = {
      firstname: "John",
      lastname: "Smith",
}


let printFullName = function (hometown, state) {
      console.log( this.firstname + " " + this.lastname + " from " + hometown + " " + state);
}

let name2 = {
      firstname: "will",
      lastname: "Smith",
}

printFullName.apply(name2, ['ohio', 'CA']);
printFullName.apply(name, ['New york']);
//apply() method invokes a function with a given this value and allow you to pass arguments as an array.