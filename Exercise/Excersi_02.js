// Use Js to cretae a game of snake, water, and gun The game shuld ask you to enter snamke, water, gun . The computer shuld generate randomly generate Snake, water and gun and declare win and lose use alert, use prompt, and  use confirm wahtever required 
let choice = ["Snake", "Water", "Gun"]
let user = prompt("Enter your choice (Snake, Water, Gun):");
let Computer = choice[Math.random() * choice.length | 0]
let result = " "
if (user == Computer) {
    result = "It's a tie!"
}
else if ((user == "Snake" && Computer == "Water") ||
    (user == "Water" && Computer == "Gun") ||
    (user == "Gun" && Computer == "Snake")) {
    result = "You win!";
} else if ((user == "Water" && Computer == "Snake") ||
    (user == "Gun" && Computer == "Water") ||
    (user == "Snake" && Computer == "Gun")) {
    result = "You lose!";
} else {
    result = "Invalid input. Please enter Snake, Water, or Gun.";
}
alert(`Computer chose: ${Computer}\nYour choice: ${user}\nResult: ${result}`);
// Ask the user if they want to play again
let playAgain = confirm("Do you want to play again?");
if (playAgain) {
    // Reload the page to restart the game
    window.location.reload();
}
// If the user does not want to play again, thank them for playing
else {
    alert("Thank you for playing!");
}
// Display the choices and result in the document
document.write(`Computer chose: ${Computer} <br>`);