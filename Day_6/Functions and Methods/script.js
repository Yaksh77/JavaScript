// //*  Function and Methods

// function myFunction() {
//     console.log("Hello World!");
//   }
//   myFunction();
  
//   // function sum(a, b) {
//   //   console.log(a + b);
//   // }
//   // sum(1, 2);
  
//   function sum(a, b) {
//     return a + b;
//   }
//   let result = sum(10, 20);
//   console.log(result);
  
//   //* Arrow Functions
  
//   const someFunc = () => {
//     console.log("Hello World");
//   };
//   console.log(someFunc); //* This returns whole function definition
//   someFunc();
  
//   //* Practice-1
  
//   function findingString(str) {
//     let count = 0;
//     for (let idx in str) {
//       if (
//         str[idx] === "a" ||
//         str[idx] === "e" ||
//         str[idx] === "i" ||
//         str[idx] === "o" ||
//         str[idx] === "u"
//       ) {
//         count++;
//       }
//     }
//     console.log(count);
//   }
//   // findingString("xyz");
  
//   const countVowel = (str) => {
//     let count = 0;
//     for (let char of str) {
//       if (
//         char === "a" ||
//         char === "e" ||
//         char === "i" ||
//         char === "o" ||
//         char === "u"
//       ) {
//         count++;
//       }
//     }
//     return count;
//   };
  
//   const resultCount = countVowel("Hello World");
//   // console.log(resultCount);
  
//   //* forEach Method
  
//   const arr = [1, 2, 3, 4, 5, 6];
//   function squareFunc(val) {
//     console.log(val ** 2);
//   }
//   arr.forEach(squareFunc);
  
//   //* map Method
  
//   // const nums = arr.map((val) => {
//   //   return val * 2;
//   // });
//   // console.log(nums);
  
//   //* filter method
  
//   // const filterArr = arr.filter((val) => {
//   //   return val % 2 === 0;
//   // });
//   // console.log(filterArr);
  
//   //* reduce method
  
//   const total = arr.reduce((Accval, currVal) => {
//     Accval += currVal;
//     return Accval;
//   });
//   console.log(total);
  
//   //* Practice-1
  
//   const studMarks = [99, 56, 89, 98, 90, 78];
//   const filteredArr = studMarks.filter((val) => {
//     return val > 90;
//   });
//   console.log(filteredArr);
  
//   //* Practice-2
  
//   const num = prompt("Enter number you want of that array : ");
//   const orgArr = [];
//   for (let i = 1; i <= Number.parseInt(num); i++) {
//     orgArr.push(i);
//   }
//   console.log(orgArr);
  
//   const sumVal = orgArr.reduce((preVal, curVal) => {
//     return preVal + curVal;
//   });
//   console.log(sumVal);
  
//   const producVal = orgArr.reduce((preVal, curVal) => {
//     return preVal * curVal;
//   });
//   console.log(producVal);
  


