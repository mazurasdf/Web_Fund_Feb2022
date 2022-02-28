function consultOracle(){
    var lifesAnswers = [
        "It is certain.",
        "It is decidedly so.",
        "Without a doubt.",
        "Yes – definitely.",
        "You may rely on it.",
        "As I see it, yes.",
        "Most likely.",
        "Outlook good.",
        "Yes.",
        "Signs point to yes.",
        "Reply hazy, try again.",
        "Ask again later.",
        "Better not tell you now.",
        "Cannot predict now.",
        "Concentrate and ask again.",
        "Don't count on it.",
        "My reply is no.",
        "My sources say no.",
        "Outlook not so good.",
        "Very doubtful."
    ];

    //return random item from array
    return lifesAnswers[Math.floor(Math.random() * lifesAnswers.length)];
}

var magicConchImage = document.querySelector("#magicConchImage");
var question = document.querySelector("#question");

function getFortune(){
    if(question.value.length > 4 && question.value.includes("?")){
        console.log("getting the fortune");
        magicConchImage.src = "imgs/conchAnimated.gif";
        setTimeout(displayFortune, 4000);
    }
    else{
        alert("You need to ask a question!");
    }
    
}

function displayFortune(){
    // console.log(consultOracle());
    var fortuneText = document.querySelector("#fortuneText");

    magicConchImage.src = "imgs/conchStill.jpg";
    fortuneText.innerText = consultOracle();
    question.value = "";
    document.querySelector("button").blur();
    question.focus();
}

//type in question
//press button
//change image to animated gif
//wait ~2 seconds
//stop gif from animating
//display fortune