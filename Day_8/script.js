let button = document.querySelector("#btn1");
// button.onclick = (evt)=>{
//     // console.log("Button was clicked");

//     // ---- event object ----
//     console.log(evt.target);
//     console.log(evt.type);
//     console.log(evt.clientX);
//     console.log(evt.clientY);
// }

let div = document.querySelector("#div1");
// div.onmouseover = function handler(evt){
//     console.log("Mouse hovered on div");

//      // ---- event object ----
//      console.log(evt.target);
//      console.log(evt.type);
//      console.log(evt.clientX);
//      console.log(evt.clientY);
// }

// ----- addEventListener ----

let handler2 = function(){
    console.log("Event handler 2 is called");
}

const handler3 = ()=>{
    console.log("Event handler 3 is called");
}

button.addEventListener("click",()=>{
    console.log("Event handler 1 is called");
})

button.addEventListener("click",handler2);
button.addEventListener("click",handler3);

// ----- removeEventListener ----

button.removeEventListener("click",handler2);