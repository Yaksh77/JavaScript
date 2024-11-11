document.getElementById("outerDiv").addEventListener("click",(event)=>{
    alert("Outer Div Event listener is called " + event.eventPhase);
},false);

document.getElementById("middleDiv").addEventListener("click",(event)=>{
    alert("Middle Div Event listener is called " + event.eventPhase);
    event.stopPropagation(); // stop bubbling phase
},false); // Bubbling phase

document.getElementById("innerDiv").addEventListener("click",(event)=>{
    alert("Inner Div Event listener is called " + event.eventPhase);
    event.stopPropagation(); // stop bubbling phase
},false); // Bubbling phase