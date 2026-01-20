//Prototype

function Car(model, company, price) {
  this.model = model;
  this.company = company;
  this.price = price;
}

Car.prototype.color = "red";

Car.prototype.printInfo = function () {
  console.log("car model = ", this.model);
  console.log("car company = ", this.company);
  console.log("car price = ", this.price);
  console.log("car color = ", this.color);
};

let c1 = new Car("i10", "Hyundai", 800000.0);
c1.printInfo();

console.log(c1);

let c2 = new Car("Punch", "Tata", 900000.0);
c2.printInfo();

console.log(c2);

