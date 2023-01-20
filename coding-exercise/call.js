let name = {
      firstname: "sai",
      lastname: "swaroop",
}


let printFullName = function (hometown) {
      console.log(this.firstname + " " + this.lastname + " from " + hometown);
}

printFullName.call(name, "AP"); // function borrowing 
// call method which is used to invoke a function directly by passing in the reference using this method(varible) inside the method
//call() method invokes a function with a given, this value and arguments provided one by one.

let name2 = {
      firstname: "hari",
      lastname: "chandana",
}

printFullName.call(name2, "AP");