let name = {
      firstname: "John",
      lastname: "Smith",
}
let name2 = {
      firstname: "william",
      lastname: "Smith",
}

let printFullName = function(hometown){
      console.log(this.firstname + " " + this.lastname + " " + hometown);
}

let printMyName = printFullName.bind(name, "washington");
console.log(printMyName);

printMyName();
// bind method does not directly invoke method but gives the copy of exactly same method which can be invoked later