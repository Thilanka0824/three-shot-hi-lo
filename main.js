const prompt = require('prompt-sync')({ sigint: true });

console.log("I'm thinking of a number between 1 and 100. Try to guess it.")
let n = Number(prompt(">"));

let myNum = Math.ceil(Math.random() * 2)

let count = 0
while (count < 2 && n !== myNum) {

    if (n === myNum) {
        console.log("Congratulations, " + n + " is correct")
    } else if (n > myNum) {
        console.log("Sorry, too high! Guess again.")
        n = Number(prompt(">"))
    } else if (n < myNum) {
        console.log("Sorry, too low! Guess again.")
        n = Number(prompt(">"))
    }
    
    count = count + 1
} 

if (n === myNum) {
    console.log("Congratulations, " + n + " is correct")
} else if (n > myNum) {
    console.log("Sorry too high. I was thinking " + myNum)
} else if (n < myNum) {
    console.log("Sorry too low. I was thinking " + myNum)
}