// ------ Cookies ------

document.cookie = "name=Yaksh77"; // It will not overwrite all existing cokkies
document.cookie = "name1=Harsh67";

let key = prompt("Enter key :");
let value = prompt("Enter value :");
document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
console.log(document.cookie);