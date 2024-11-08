// ----- Array find() method -----
// It returns object
const patients = [
    {id:101,name:"Yaksh",dieases:"cold"},
    {id:102,name:"Harsh",dieases:"Fever"},
    {id:103,name:"Harshil",dieases:"cold"},
];

let patientWithCold = patients.find((patient)=>{
    return patient.dieases === "cold";
});

console.log(patientWithCold);

// ----- Array some() method -----
// It returns true or false

let patientWithFever = patients.some((patient)=>{
    return patient.dieases === "Fever";
});

console.log(patientWithFever);

// ----- Array every() method -----

const students = [
    {
        id:1, name:"Yaksh",status:"passed"
    },
    {
        id:2, name:"Harsh",status:"passed"
    },
    {
        id:3, name:"Harshil",status:"passed"
    },

];

let isAllPassed = students.every((student)=>{
    return student.status === "passed";
});
console.log(isAllPassed);