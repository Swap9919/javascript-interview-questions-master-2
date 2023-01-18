let name = {
      firstname: "sai",
      lastname: "swaroop",
}


let printFullName = function (hometown) {
      console.log(this.firstname + " " + this.lastname + " from " + hometown);
}

printFullName.call(name, "rajampet");


let name2 = {
      firstname: "hari",
      lastname: "chandana",
}

printFullName.call(name2, "nellore");