// // Initialize scores
// let userScore = 0;
// let computerScore = 0;

// // Get elements
// const userScoreElement = document.getElementById("comp3");
// const computerScoreElement = document.getElementById("comp2");

// // Function to update scoreboard
// function updateScore() {
//     userScoreElement.textContent = userScore;
//     computerScoreElement.textContent = computerScore;
// }

// // Function to handle user selection
// function userChoice(choice) {
//     const computerChoice = getComputerChoice();

//     // Update UI to show choices
//     showChoices(choice, computerChoice);

//     // Compare choices and update scores
//     const result = compareChoices(choice, computerChoice);
//     if (result === "win") {
//         userScore++;
//     } else if (result === "lose") {
//         computerScore++;
//     }

//     // Update scoreboard
//     updateScore();

//     // Check if the game is won, lost, or tied
//     if (userScore === 3) {
//         // Redirect to youwon.html
//         window.location.href = "youwon.html";
//     } else if (computerScore === 3) {
//         // Redirect to youlost.html
//         window.location.href = "youlost.html";
//     }
// }

// // Function to get computer choice
// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * 3);
//     return choices[randomIndex];
// }

// // Function to compare choices and determine the winner
// function compareChoices(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         // It's a tie
//         // Redirect to tie.html
//         window.location.href = "tie.html";
//         return "tie";
//     } else if (
//         (userChoice === "rock" && computerChoice === "scissors") ||
//         (userChoice === "paper" && computerChoice === "rock") ||
//         (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//         // User wins
//         return "win";
//     } else {
//         // User loses
//         return "lose";
//     }
// }

// // Function to show choices on the UI
// function showChoices(userChoice, computerChoice) {
//     // Implement logic to show choices on the UI
//     // You can update the images or text to display the choices
// }

// // Function to handle replay
// function replayGame() {
//     // Reset scores to 0
//     userScore = 0;
//     computerScore = 0;

//     // Call updateScore function
//     updateScore();

//     // Redirect to index.html
//     window.location.href = "index.html";
// }

// // Function to handle hurray
// function showHurray() {
//     // Redirect to hurray.html
//     window.location.href = "hurray.html";
// }

// // Add event listeners or integrate these functions where user interactions occur
// //

// Initialize scores
// let userScore = 0;
// let computerScore = 0;

// // Get elements
// const userScoreElement = document.getElementById("comp3");
// const computerScoreElement = document.getElementById("comp2");

// // Function to update scoreboard
// function updateScore() {
//     userScoreElement.textContent = userScore;
//     computerScoreElement.textContent = computerScore;
// }

// // Function to handle user selection
// function userChoice(choice) {
//     const computerChoice = getComputerChoice();

//     // Update UI to show choices
//     showChoices(choice, computerChoice);

//     // Compare choices and update scores
//     const result = compareChoices(choice, computerChoice);
//     if (result === "win") {
//         userScore++;
//     } else if (result === "lose") {
//         computerScore++;
//     }

//     // Update scoreboard
//     updateScore();

//     // Check if the game is won, lost, or tied
//     if (userScore === 3) {
//         // Redirect to youwon.html
//         window.location.href = "youwon.html";
//     } else if (computerScore === 3) {
//         // Redirect to youlost.html
//         window.location.href = "youlost.html";
//     }
// }

// // Function to get computer choice
// function getComputerChoice() {
//     const choices = ["rock", "paper", "scissors"];
//     const randomIndex = Math.floor(Math.random() * 3);
//     return choices[randomIndex];
// }

// // Function to compare choices and determine the winner
// function compareChoices(userChoice, computerChoice) {
//     if (userChoice === computerChoice) {
//         // It's a tie
//         // Redirect to tie.html
//         window.location.href = "tie.html";
//         return "tie";
//     } else if (
//         (userChoice === "rock" && computerChoice === "scissors") ||
//         (userChoice === "paper" && computerChoice === "rock") ||
//         (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//         // User wins
//         return "win";
//     } else {
//         // User loses
//         return "lose";
//     }
// }

// // Function to show choices on the UI
// function showChoices(userChoice, computerChoice) {
//     // Implement logic to show choices on the UI
//     // You can update the images or text to display the choices
//     console.log("User choice:", userChoice);
//     console.log("Computer choice:", computerChoice);
// }

// // Function to handle replay
// function replayGame() {
//     // Reset scores to 0
//     userScore = 0;
//     computerScore = 0;

//     // Call updateScore function
//     updateScore();

//     // Redirect to index.html
//     window.location.href = "index.html";
// }

// // Function to handle hurray
// function showHurray() {
//     // Redirect to hurray.html
//     window.location.href = "hurray.html";
// }

// // Add event listeners for the images
// const group1Image = document.getElementById("group1");
// const group2Image = document.getElementById("group2");
// const group3Image = document.getElementById("group3");

// group1Image.addEventListener("click", function () {
//     userChoice("rock");
// });

// group2Image.addEventListener("click", function () {
//     userChoice("paper");
// });

// group3Image.addEventListener("click", function () {
//     userChoice("scissors");
// });




// var userScore = 0;
// var computerScore = 0;

//         function updateScore() {
//             document.getElementById("userScore").innerText = userScore;
//             document.getElementById("computerScore").innerText = computerScore;
//         }

//         function toggleGameRules() {
//             var gameRules = document.getElementById("game_rule");
//             var cancelButton = document.getElementById("cancel");

//             if (gameRules.style.display === "none" || gameRules.style.display === "") {
//                 gameRules.style.display = "block";
//                 cancelButton.style.display = "block";
//             } 
//         }

//         function hideGameRules() {
//             var gameRules = document.getElementById("game_rule");
//             var cancelButton = document.getElementById("cancel");

//             gameRules.style.display = "none";
//             cancelButton.style.display = "none";
//         }

//         function makeChoice(userChoice) {
//             var choices = ["rock", "paper", "scissors"];
//             var computerChoice = choices[Math.floor(Math.random() * 3)];

//             // Display user and computer choices
//             console.log("User Choice: " + userChoice);
//             console.log("Computer Choice: " + computerChoice);

//             // Determine the winner
//             if (userChoice === computerChoice) {
//                 window.location.href = "tie.html";
//             } else if (
//                 (userChoice === "rock" && computerChoice === "scissors") ||
//                 (userChoice === "paper" && computerChoice === "rock") ||
//                 (userChoice === "scissors" && computerChoice === "paper")
//             ) {
//                 window.location.href = "youwon.html";
//                 userScore++;
//             } else {
//                 window.location.href = "youlost.html";
//                 computerScore++;
//             }

//             // Update and display the scores
//             updateScore();
//         }







// // Initialize scores from local storage or set to 0 if not present
// var userScore = parseInt(localStorage.getItem("userScore")) || 0;
// var computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

// function updateScore() {
//     document.getElementById("userScore").innerText = userScore;
//     document.getElementById("computerScore").innerText = computerScore;
// }

// function toggleGameRules() {
//     var gameRules = document.getElementById("game_rule");
//     var cancelButton = document.getElementById("cancel");

//     if (gameRules.style.display === "none" || gameRules.style.display === "") {
//         gameRules.style.display = "block";
//         cancelButton.style.display = "block";
//     }
// }

// function hideGameRules() {
//     var gameRules = document.getElementById("game_rule");
//     var cancelButton = document.getElementById("cancel");

//     gameRules.style.display = "none";
//     cancelButton.style.display = "none";
// }

// function makeChoice(userChoice) {
//     var choices = ["rock", "paper", "scissors"];
//     var computerChoice = choices[Math.floor(Math.random() * 3)];

//     console.log("User Choice: " + userChoice);
//     console.log("Computer Choice: " + computerChoice);

//     if (userChoice === computerChoice) {
//         window.location.href = "tie.html";
//     } else if (
//         (userChoice === "rock" && computerChoice === "scissors") ||
//         (userChoice === "paper" && computerChoice === "rock") ||
//         (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//         window.location.href = "youwon.html";
//         userScore++;
//     } else {
//         window.location.href = "youlost.html";
//         computerScore++;
//     }

//     // Update and display the scores
//     updateScore();

//     // Store scores in local storage
//     // localStorage.setItem("userScore", userScore);
//     // localStorage.setItem("computerScore", computerScore);
//     localStorage.setItem("userScore", userScore.toString());
//     localStorage.setItem("computerScore", computerScore.toString());

// }

// function replayGame() {
//     // Reset scores to 0
//     // userScore = 0;
//     // computerScore = 0;

//     // Call updateScore function
//     updateScore();

//     // Redirect to index.html
//     window.location.href = "index.html";
// }

// // Add event listener to the "PLAY AGAIN" button
// document.getElementById("play_again").addEventListener("click", replayGame);





// Initialize scores from local storage or default to 0
// var userScore = parseInt(localStorage.getItem("userScore")) || 0;
// var computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

// // Function to update scoreboard
// function updateScore() {
//     document.getElementById("userScore").innerText = userScore;
//     document.getElementById("computerScore").innerText = computerScore;
// }

// // Function to toggle game rules display
// function toggleGameRules() {
//     var gameRules = document.getElementById("game_rule");
//     var cancelButton = document.getElementById("cancel");

//     if (gameRules.style.display === "none" || gameRules.style.display === "") {
//         gameRules.style.display = "block";
//         cancelButton.style.display = "block";
//     }
// }

// // Function to hide game rules
// function hideGameRules() {
//     var gameRules = document.getElementById("game_rule");
//     var cancelButton = document.getElementById("cancel");

//     gameRules.style.display = "none";
//     cancelButton.style.display = "none";
// }

// // Function to make a choice and determine the game result
// function makeChoice(userChoice) {
//     var choices = ["rock", "paper", "scissors"];
//     var computerChoice = choices[Math.floor(Math.random() * 3)];

//     console.log("User Choice: " + userChoice);
//     console.log("Computer Choice: " + computerChoice);

//     // Update scores based on the game result
//     if (userChoice === computerChoice) {
//         window.location.href = "tie.html" + "?userScore=" + userScore + "&computerScore=" + computerScore;
//     } else if (
//         (userChoice === "rock" && computerChoice === "scissors") ||
//         (userChoice === "paper" && computerChoice === "rock") ||
//         (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//         userScore++;
//         localStorage.setItem("userScore", userScore.toString());
//         localStorage.setItem("computerScore", computerScore.toString());
//         window.location.href = "youwon.html" + "?userScore=" + userScore + "&computerScore=" + computerScore;
//     } else {
//         computerScore++;
//         localStorage.setItem("userScore", userScore.toString());
//         localStorage.setItem("computerScore", computerScore.toString());
//         window.location.href = "youlost.html" + "?userScore=" + userScore + "&computerScore=" + computerScore;
//     }
// }

// function hurray(){
//     window.location.href = "hurray.html";
// }
// document.getElementById("next_b").addEventListener("click", hurray)
// // Function to replay the game
// function replayGame() {
//     // Reset scores to 0 (if you want to reset scores)
//     // userScore = 0;
//     // computerScore = 0;

//     // Call updateScore function
//     updateScore();

//     // Redirect to index.html
//     window.location.href = "index.html";
// }

// // Add event listener to the "PLAY AGAIN" button
// document.getElementById("play_again").addEventListener("click", replayGame);
// function re(){
//     window.location.href = "index.html";
// }
// document.getElementById("play_").addEventListener("click", re);

// // Parse URL parameters and update scores on page load
// // const urlParams = new URLSearchParams(window.location.search);
// // userScore = parseInt(urlParams.get("userScore")) || userScore;
// // computerScore = parseInt(urlParams.get("computerScore")) || computerScore;

// // // Update displayed scores
// // updateScore();

// const urlParams = new URLSearchParams(window.location.search);
// const urlUserScore = parseInt(urlParams.get("userScore"));
// const urlComputerScore = parseInt(urlParams.get("computerScore"));

// if (!isNaN(urlUserScore) && !isNaN(urlComputerScore)) {
//     userScore = urlUserScore;
//     computerScore = urlComputerScore;
// } else {
//     // Update scores from local storage if URL parameters are not present
//     userScore = parseInt(localStorage.getItem("userScore")) || 0;
//     computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
// }

// // Update displayed scores
// updateScore();




var userScore = parseInt(localStorage.getItem("userScore")) || 0;
var computerScore = parseInt(localStorage.getItem("computerScore")) || 0;

// Function to update scoreboard
function updateScore() {
    document.getElementById("userScore").innerText = userScore;
    document.getElementById("computerScore").innerText = computerScore;
}

// Function to toggle game rules display
function toggleGameRules() {
    var gameRules = document.getElementById("game_rule");
    var cancelButton = document.getElementById("cancel");

    if (gameRules.style.display === "none" || gameRules.style.display === "") {
        gameRules.style.display = "block";
        cancelButton.style.display = "block";
    }
}

// Function to hide game rules
function hideGameRules() {
    var gameRules = document.getElementById("game_rule");
    var cancelButton = document.getElementById("cancel");

    gameRules.style.display = "none";
    cancelButton.style.display = "none";
}

// Function to make a choice and determine the game result
// function makeChoice(userChoice) {
//     var choices = ["rock", "paper", "scissors"];
//     var computerChoice = choices[Math.floor(Math.random() * 3)];

//     console.log("User Choice: " + userChoice);
//     console.log("Computer Choice: " + computerChoice);

//     // Update scores based on the game result
//     if (userChoice === computerChoice) {
//         window.location.href = "tie.html" + "?userScore=" + userScore + "&computerScore=" + computerScore;
//     } else if (
//         (userChoice === "rock" && computerChoice === "scissors") ||
//         (userChoice === "paper" && computerChoice === "rock") ||
//         (userChoice === "scissors" && computerChoice === "paper")
//     ) {
//         userScore++;
//         localStorage.setItem("userScore", userScore.toString());
//         localStorage.setItem("computerScore", computerScore.toString());
//         window.location.href = "youwon.html" + "?userScore=" + userScore + "&computerScore=" + computerScore;
//     } else {
//         computerScore++;
//         localStorage.setItem("userScore", userScore.toString());
//         localStorage.setItem("computerScore", computerScore.toString());
//         window.location.href = "youlost.html" + "?userScore=" + userScore + "&computerScore=" + computerScore;
//     }
// }

function makeChoice(userChoice) {
    var choices = ["rock", "paper", "scissors"];
    var computerChoice = choices[Math.floor(Math.random() * 3)];

    console.log("User Choice: " + userChoice);
    console.log("Computer Choice: " + computerChoice);

    // Update scores based on the game result
    if (userChoice === computerChoice) {
        navigateToPage("tie.html");
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        userScore++;
        localStorage.setItem("userScore", userScore.toString());
        localStorage.setItem("computerScore", computerScore.toString());
        navigateToPage("youwon.html");
    } else {
        computerScore++;
        localStorage.setItem("userScore", userScore.toString());
        localStorage.setItem("computerScore", computerScore.toString());
        navigateToPage("youlost.html");
    }
}




//  function makeChoice(userChoice) {
//             var choices = ["rock", "paper", "scissors"];
//             var computerChoice = choices[Math.floor(Math.random() * 3)];

//             // Display user and computer choices
//             console.log("User Choice: " + userChoice);
//             console.log("Computer Choice: " + computerChoice);

//             // Determine the winner
//             if (userChoice === computerChoice) {
//                 window.location.href = "tie.html";
//             } else if (
//                 (userChoice === "rock" && computerChoice === "scissors") ||
//                 (userChoice === "paper" && computerChoice === "rock") ||
//                 (userChoice === "scissors" && computerChoice === "paper")
//             ) {
//                 alert("You win!");
//                 userScore++;
//             } else {
//                 alert("Computer wins!");
//                 computerScore++;
//             }

//             // Update and display the scores
//             updateScore();
//         }

function hurray(){
    window.location.href = "hurray.html";
}
document.getElementById("next_b").addEventListener("click", hurray);

// Function to replay the game
function replayGame() {
    // Reset scores to 0 (if you want to reset scores)
    // userScore = 0;
    // computerScore = 0;
    updateScore();
    sessionStorage.setItem("userScore", userScore.toString());
    sessionStorage.setItem("computerScore", computerScore.toString());
    // Redirect to index.html
    window.location.href = "index.html";
}

// Add event listener to the "PLAY AGAIN" button
document.getElementById("play_again").addEventListener("click", replayGame);

function re(){
    window.location.href = "index.html";
}
document.getElementById("play_").addEventListener("click", re);

// Parse URL parameters and update scores on page load
// const urlParams = new URLSearchParams(window.location.search);
// const urlUserScore = parseInt(urlParams.get("userScore"));
// const urlComputerScore = parseInt(urlParams.get("computerScore"));

// if (!isNaN(urlUserScore) && !isNaN(urlComputerScore)) {
//     userScore = urlUserScore;
//     computerScore = urlComputerScore;
// } else {
//     // Update scores from local storage if URL parameters are not present
//     userScore = parseInt(localStorage.getItem("userScore")) || 0;
//     computerScore = parseInt(localStorage.getItem("computerScore")) || 0;
// }

// // // Update displayed scores
// updateScore();
// Get userScore and computerScore from URL parameters
const urlParams = new URLSearchParams(window.location.search);
const updatedUserScore = parseInt(urlParams.get("userScore")) || 0;
const updatedComputerScore = parseInt(urlParams.get("computerScore")) || 0;

// Update the scores on the page
document.getElementById("userScore").innerText = updatedUserScore;
document.getElementById("computerScore").innerText = updatedComputerScore;

// You can use these updated scores for any further logic on the "youlost.html" page.

updateScore();

function navigateToPage(page) {
    var url = page + "?userScore=" + userScore + "&computerScore=" + computerScore;
    var link = document.createElement("a");
    link.href = url;
    link.click();
}