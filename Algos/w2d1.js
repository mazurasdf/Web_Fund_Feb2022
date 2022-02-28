// var floor = Math.floor(2.6);
// var ceiling = Math.ceil(5.2);
// var random = Math.random();

// console.log(floor);
// console.log(ceiling);
// console.log(random);

// function rollDie(){
//     var roll = Math.ceil(Math.random() * 6);
//     return roll;
// }

// var playerRoll = rollDie();
// console.log("The player rolled: "+playerRoll);

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

console.log(consultOracle());