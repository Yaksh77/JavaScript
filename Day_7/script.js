
// const button = document.getElementById("myId");
// // console.dir(button)
// const headings = document.getElementsByClassName("myClass");
// // console.dir(headings);
// // console.log(headings);

// // ---- tagName Property ----

// // console.log(button.tagName)

// // ---- innerText Property ----

// // button.innerText = "Click Me!"

// // ---- innerHTML Property ----

// // const divison = document.body.querySelector("div");
// // console.log(divison)
// // divison.innerHTML = "<p>An example of innerHtml </p>"

// // ---- textContent Property ----
// // const exampTextContent = document.body.querySelectorAll("h4")[2];
// // console.log(exampTextContent.textContent)


// // ---- Practice-1 ----

// const headEle = document.body.querySelector("h2");
// headEle.innerText = headEle.innerText + " from Apna College Students"; 

let div = document.querySelector("div");
// console.log(div);

// ---- getAttribute method() -----

let classDiv = div.getAttribute("class");
// console.log(classDiv);

// ----- setAttribute method() -----

div.setAttribute("class","newClass");
// console.log(div);

// ----- style attribte in DOM -----

div.style.backgroundColor = "red";
div.style.fontSize = "30px";
// div.innerText = "Hello";
div.style.height = "300px";
div.style.width = "300px";

// ----- createElement() method -----

// ----- prepend() method -----
let divHeading = document.createElement("h2"
);
divHeading.innerText = "This is a Div";
divHeading.style.fontSize ="30px";
div.prepend(divHeading);

// ----- append() method -----
let button = document.createElement("button");
button.innerText = "Click!";
div.append(button);

// ----- before() method -----
let heading = document.createElement("h2");
heading.innerText = "DOM Manipulation";
div.before(heading);

// ----- after() method -----
let para = document.createElement("p");
para.innerText = "This is some text after the div to understnad about after property";
div.after(para);


