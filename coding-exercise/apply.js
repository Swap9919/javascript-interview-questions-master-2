let name = {
      firstname: "John",
      lastname: "Smith",
}


let printFullName = function (hometown) {
      console.log( this.firstname + " " + this.lastname + " from " + hometown);
}

let name2 = {
      firstname: "will",
      lastname: "Smith",
}

printFullName.apply(name2, ['ohio']);