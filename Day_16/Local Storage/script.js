let key = prompt("Enter key you want to set : ");
let value = prompt("Enter value you want to set : ");

localStorage.setItem(key, value);
console.log(`The value at ${key} is ${localStorage.getItem(key)}`);

console.log(`The name is ${localStorage.getItem("name")}`);
if(key === "red"){
    localStorage.removeItem(key);
}else if(key == 0){
    localStorage.clear();
}

console.log(`The length of the localstorage is : ${localStorage.length} `);
console.log(localStorage.key(0));
console.log(localStorage.key(1));
console.log(localStorage.key(2));
console.log(localStorage.key(3));
console.log(localStorage.key(4));


let str = JSON.stringify(localStorage);
let par = JSON.parse(str);
console.log(str);
console.log(par);
