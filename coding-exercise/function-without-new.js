function Vehicle(model, color, year, country) {
    this.model = model;
    this.color = color;
    this.year = year;
    this.country = country;
}

var car = Vehicle("Honda", "white", "2010", "UK");
var car2 = new Vehicle("Honda", "white", "2010", "UK");
console.log(car);
console.log(car2);