let name ={
      firstname: "Sai",
      lastname: "Swaroop",
}

let printName = function (hometown, state){
      console.log(this.firstname + " " + this.lastname + " , " + hometown + " , " + state);
}

let printMyName = printName.bind(name, "Rajampet");
printMyName( "AP");

Function.prototype.myBind = function(...args) {
      let obj = this
      params = args.slice(1);
      return function (...args2) {
            obj.apply(args[0], [...params , ...args2]);
      }
}

//

let printMyName2 = printName.myBind(name, "rajampet");
printMyName2("AP"); 
