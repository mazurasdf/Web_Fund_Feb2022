var countElement = document.querySelector("#countElement");

function hoverEvent(){
    console.log("you hovered over me!!!");
}

function clickEvent(){
    console.log("you clicked me!!!");
}

var count = 0;

function countClicker(){
    
    // console.log(countElement.innerText);

    count++;
    // console.log("count goes up: " + count);
    if(count < 15){
        countElement.innerText = count;
    }
    else{   
        countElement.innerText = "that's a big number!";
    }
}

var isHovering = false;
function hoverButton(element){
    console.log(element);
    isHovering = !isHovering;
    if(isHovering){
        element.innerText = "increase count to " + (count + 1);
    }
    else{
        element.innerText = "click me!";
    }
    
}