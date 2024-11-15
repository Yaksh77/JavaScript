document.getElementById("listItems").addEventListener('click',function(event){
    console.log(event);
    const targetEl = event.target;
    console.log(targetEl.tagName);
    if(targetEl.tagName === 'LI'){
        let attr = targetEl.getAttribute("data-item");
        // console.log(attr);
        alert(`You have clicked Item ${attr}`);
    }
});