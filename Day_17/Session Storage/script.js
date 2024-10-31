// sessionStorage.setItem("name","Yaksh");
// sessionStorage.setItem("color","red");
// sessionStorage.setItem("hero","ironman");

// console.log(sessionStorage.getItem("name"));

window.onstorage = (e) =>{
    alert("Some changes has been made in local storage...");
    console.dir(e);
}


sessionStorage.setItem("name","Harsh");

