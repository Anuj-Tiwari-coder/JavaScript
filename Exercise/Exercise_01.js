// Write a JS program to generate a random number and store it in a variable. The program then take an input from the user to tell them weather the guss was correct , ghrater or lesser than the orignal number
// 100 - (no of guesses) is the score of the user the program is expected to terminate once the number of gussed number should be 1 to 100

let randomNumber = Math.floor(Math.random() * 100) + 1
let guess = 0
let score = 100
let prompt = require("prompt-sync")()
while (guess != randomNumber) {
    guess = parseInt(prompt("Guess a number between 1 and 100: "))
    if (guess > randomNumber) {
        console.log("Your guess is greater than the original number")
        score -= 10
    } else if (guess < randomNumber) {
        console.log("Your guess is lesser than the original number")
        score -= 10
    } else {
        console.log("Congratulations! You guessed the correct number")
    }
}
console.log("Your score is: " + score)