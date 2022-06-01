const prompt = require('prompt-sync')({ sigint: true });

console.log("I'm thinking of a number between 1 and 100. Try to guess it.")
let n = Number(prompt("> "));

let myNum = Math.ceil(Math.random() * 100)
let count = 0

while (count < 2 && n !== myNum) { //if the count is less than 2 AND the input does not equal my random number

    if (n === myNum) {
        console.log("Congratulations, " + n + " is correct")
        // count = 2 //this can also be used to end the loop once the condition is found
    } else if (n > myNum) {
        console.log("Sorry, too high! Guess again.")
        n = Number(prompt("> "))
    } else if (n < myNum) {
        console.log("Sorry, too low! Guess again.")
        n = Number(prompt("> "))
    }
    //once the conditions of the if statements are met
    count = count + 1 //this adds 1 to the count variable and restarts the while loop
} 
//This only begins once the while loop closes
if (n === myNum) {
    console.log("Congratulations, " + n + " is correct") 
} else if (n > myNum) {
    console.log("Sorry too high. I was thinking " + myNum)
} else if (n < myNum) {
    console.log("Sorry too low. I was thinking " + myNum)
}