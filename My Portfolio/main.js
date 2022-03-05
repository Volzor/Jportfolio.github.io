// variable to call our portfolio pic
let ellen = document.getElementById("selfie");

// event handler to increase portfolio picture on mousedown
function imageClick() {
    ellen.style.width = "500px";
    ellen.style.height = "500px";
}

// event handler to reset pic size 
function reset() {
    ellen.style = '';
}
 
// event handler for imageClick
ellen.addEventListener("mousedown", imageClick);
ellen.addEventListener("mouseup", reset);


// date 
let dates = document.getElementById("date");

function setDate() {
    dates.innerHTML = "The current date is: " + new Date;
}

setDate();