let button = document.querySelector("#btn1");
let body = document.querySelector("body");
let mode = "light";

const handler = (event)=>{
    if(mode === "light")
    {
        body.style.backgroundColor = "Black";
        mode = "black";
    } else{
        body.style.backgroundColor = "white";
        mode = "light";
    }
    
}

button.addEventListener("click",handler);