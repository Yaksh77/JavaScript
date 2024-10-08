console.log("Hello World!");

fullName = "Yaksh Chudasama";
price = 25;
x = null;
y = undefined;

// console.log(fullName);
// console.log(price);

// * ----- Variable declarations or define and data types -------

let name = "Yaksh Chudasama";
name = "Harsh Soni";
let firstName;

{
  let a = 5;
  //   console.log(a);
}
{
  let a = 10;
  //   console.log(a);
}

const age = 23;
// age = 23;

const newName = "Harshil Thakor"; //* String
const newAge = 22; //* Number
const isFollow = true; //* Boolean
let heavyDriver; //* undefined
const testing = null; //* null
const ipAddress = BigInt(878015064111223345566.5555555); //* BigInt
const newSymbol = Symbol("Hello"); //* Symbol

const Student = {
  id: 1,
  name: "Yaksh",
  grade: "A++",
  age: 20,
  isPassed: true,
};

//* Methdos to access values of objects

console.log(Student["age"]);
console.log(Student.name);

console.log("Keys of Student Object:");

for (i in Student) {
  console.log(i);
}

//* practice-1

const Product = {
  name: "Ball Pen",
  rating: 2,
  offer: 5,
  price: 270,
};

console.log(Product);

//* Practice-2

const Profile = {
  userName: "cy_yaksh",
  isFollow: true,
  isMeassage: true,
  posts: 100,
  followers: 1000000,
  following: 10,
  bio: "Full Stack Developer",
};

console.table(Profile);
