// ------- Distructuring ------
let names = ["Yaksh","Harsh","Harshil","Yash","Bhavy","Sunil"];
let [winner,runnerup] = names;
// console.log(winner,runnerup);

let [newWinner,newRunnerup, ...others] = names;
// console.log(newWinner, newRunnerup, others);

// let num1 = 10, num2 = 20;
let [num1,num2] = [10,20];
[num1,num2] = [num2,num1];
// console.log(num1,num2);

// ------ With objects ------

let student = {
    name: "Yaksh Chudasama",
    class: "A++",
    subjects: ["ADA","DS","PE","IPDC"],
    username: "Yaksh77",
    password: "abcd",
    city: "Jamnagar", // It will tak higher preference
};

// let {username, password} = student;
// console.log(username,password);

let {username : user, password : secret, city : place = "Ahemdabad"} = student;
// console.log(username , password , city); // Throw an error because it seraches through username and password
// console.log(user , secret , place); // Here it will convert into variables

// ------ Practice ------

// Q1

let arr = [10,20,30,40,90];

const square = arr.map((val) =>{
 return val * val;
});

const sum  = square.reduce((acc,val)=>{
    return acc + val;
});

const average = sum / arr.length;
// console.log(average);

// Q2

const mapPlus = arr.map((val) => {
    return val + 5;
});
// console.log(mapPlus);

// Q3

let strArr = ["hello","yaksh","harsh"];

const upper = strArr.map((val)=>{
    return val.toUpperCase();
});
// console.log(upper);

// Q4

const doubleAndReturnArgs = (arr, ...args) => [
    ...arr,
    ...args.map((val) => val * val)
]

console.log(doubleAndReturnArgs(arr, 10,20,30,40));

// const doubleAndReturnArgs = (arr , ...args)=>{
//     let doubleArgs = args.map((val)=> val * val);
//     let newArr = [...arr, ...doubleArgs];
//     console.log(newArr);
// }
// doubleAndReturnArgs(arr,100,200,300);

// Q5

const obj1 = {
    name : "Yaksh",
    class : "A++"
}

const obj2 = {
    some: "Harsh",
    test : "B++"
}

const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});
console.log(mergeObjects(obj1,obj2));
