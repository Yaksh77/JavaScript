// prototype in JS

const Employee = {
  // way to create function in oject in js
  calcTax() {
    console.log("Tax will be 10%");
  },
};

const yaksh = {
  salary: 1500000,
  // Below method will call beacause from object and prototype object wins
  calcTax() {
    console.log("Tax will be 20%");
  },
};
yaksh.__proto__ = Employee;
// console.log(yaksh.calcTax());

// ----- Classes -----

// We can only declare methods, constructors and prototypes in classes not variables

class Car {
  // ----- constructor -----
  constructor(brand, classOfCar) {
    this.brand = brand;
    this.classOfCar = classOfCar;
  }
  start() {
    console.log("Start");
  }
  stop() {
    console.log("stop");
  }
  // setBrand(brand,classOfCar){
  //  this.brand = brand;
  //  this.classOfCar = classOfCar;
  // }
}
let obj = new Car("Toyata", "A-class");
obj.brand = "RangeRover"; // It can override previous value
// obj.setBrand("RangeRover","A-Class");

// ----- Inheritance -----

// class Person {
//     constructor(){
//         this.spicies = "Homo Sapian";
//     }
//     eat(){
//         console.log("Eat");
//     }
//     sleep(){
//         console.log("Sleep");
//     }
//     work(){
//         console.log("Doing normal things");
//     }
// }

// class Engineer extends Person{
//     work(){
//         console.log("Bulid Somthing....");
//     }
// }

// let yakshObj = new Engineer();
// yakshObj.eat();
// yakshObj.work(); // Method Overriding concept
// console.log(yakshObj.spicies);

// ----- super keyword -----

class Person {
  constructor(name) {
    this.name = name;
  }
}

class Enggineer extends Person {
  constructor(name, work) {
    super(name); // Compulsory to call Parent class constructor otherwise will get error
    this.work = work;
  }
}

let e1 = new Enggineer("Yaksh", "Computer Science");
// console.log(e1.name);
// console.log(e1.work);

// let p1 = new Person("Harsh");
// console.log(p1.name);

// Pracrice-1

let Data = "Secret Information";
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log("Name of User : ", this.name);
    console.log("Email of User : ", this.email);
  }
}

class Admin extends User {
  constructor(name, email) {
    super(name, email);
  }
  editData() {
    Data = "Admin Data";
  }
}

let user1 = new User("Yaksh", "yaksh847@gmail.com");
user1.viewData();

let admin1 = new Admin("Harsh", "Admin@123");
console.log(admin1.name);
console.log(admin1.email);
admin1.editData();

// ----- Error Handling -----

// try-catch and finally block

let num = 5;
let div;
try {
  div = num + num2;
} catch (e) {
  console.log(e);
} finally {
  console.log("This will execute always");
}
console.log(div);
