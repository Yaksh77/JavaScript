// ----- Practice-1 -----

let button = document.createElement("button");
button.style.backgroundColor = "red";
button.style.color = "white";
button.style.height = "30px";
button.style.width = "100px";
button.innerText = "Click Me!";

let getBody = document.querySelector("body");
getBody.append(button);

// ----- Practice-2 ------

// let para = document.createElement("p");
// para.setAttribute("class","box");
// para.style.color = "white";
// para.style.height = "200px";
// para.style.width = "200px";
// para.style.backgroundColor = "purple";
// para.style.marginTop = "20px";
// para.innerText = "This is some text";
// button.append(para);

let para = document.querySelector("p");
// let attr = para.getAttribute("class");
// para.setAttribute("class",`${attr} newBox`);

// --- Above question using classList attribute ---
para.classList;
para.classList.add("newBox");