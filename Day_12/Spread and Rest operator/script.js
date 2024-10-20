// ------ spread operator ------
let arr1 = [1,2,3,4,5,6,7,7,0,3,5,2,5,2,6,7,4,3];
let str = "Yaksh Chudasama";
// console.log(...str);
// console.log(...arr1); // It prints individual elements of array
// console.log(Math.min(...arr1));

// ----- With array literals -----
let arr = [10,20,30,40,50];
let newArr = [...arr];
// console.log(newArr);

let char = [..."Hello"];
// console.log(char);

let odd = [1,3,5,7,9];
let even = [2,4,6,8,10];
let merge = [...even, ...odd];
// console.log(merge);

// ----- With object literals -----
let obj = {
    email: "yaksh847@gmail.com",
    password:"abcd",
};

let copyObj = {...obj};
// console.log(copyObj);

let newCopyObj = {...arr};
// console.log(newCopyObj);

let strObj = {...str};
// console.log(strObj);


// ------ Rest operator ------
function test(){
    console.log(arguments); // This will print array like structure because every function has its default argument collection.
    console.log(arguments.length);
    // console.log(arguments.push(10)); // It will throw error because arguments is not an array
    console.log(arguments[0]);
}
// test(1,2,3,4);

function sum(...args){
    return args.reduce((sum,val)=>sum+val);
}
// console.log(sum(10,20,30,40));

function testing(msg,...args){
    console.log(msg);
    console.log(args);
    console.log(arguments);
}
testing("Hello",10,20,30,40);