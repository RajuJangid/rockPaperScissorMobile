var rk = document.getElementById("user-rock");
var pr = document.getElementById("user-paper");
var sr = document.getElementById("user-scissor");

var rk1 = document.getElementById("computer-rock");
var pr1 = document.getElementById("computer-paper");
var sr1 = document.getElementById("computer-scissor");

var userScore = 0;
var computerScore = 0;
var unknown = 0;
function userChoseRock() {
       rk.style.visibility = 'visible';
       pr.style.visibility = 'hidden';
       sr.style.visibility = 'hidden';
       hideComputerChoice();
       unknown = 1;
       computerChoice();
}
function userChosePaper() {
       pr.style.visibility = 'visible';
       sr.style.visibility = 'hidden';
       rk.style.visibility = 'hidden';
       hideComputerChoice();
       unknown = 2;
       computerChoice();
}
function userChoseScissor() {
       sr.style.visibility = 'visible';
       rk.style.visibility = 'hidden';
       pr.style.visibility = 'hidden';
       hideComputerChoice();
       unknown = 3;
       computerChoice();
}
function computerChoice() {
       const computerOption = [rk1, pr1, sr1];
       var computerChose = computerOption[Math.floor(Math.random() * computerOption.length)];
       setTimeout(() => {
              if (computerChose == rk1) {
                     rk1.style.visibility = 'visible';
                     pr1.style.visibility = 'hidden';
                     sr1.style.visibility = 'hidden';
              }
              else if (computerChose == pr1) {
                     pr1.style.visibility = 'visible';
                     sr1.style.visibility = 'hidden';
                     rk1.style.visibility = 'hidden';
              }
              else if (computerChose == sr1) {
                     sr1.style.visibility = 'visible';
                     rk1.style.visibility = 'hidden';
                     pr1.style.visibility = 'hidden';
              }
       }, 800);
       setTimeout(() => {
              if (unknown == 1 && computerChose == pr1) {
                     computerScore++;
                     document.getElementById("computer-score").innerHTML = "Computer : " + computerScore;
              }
              else if (unknown == 1 && computerChose == sr1) {
                     userScore++;
                     document.getElementById("user-score").innerHTML = "You : " + userScore;
              }
              else if (unknown == 2 && computerChose == sr1) {
                     computerScore++;
                     document.getElementById("computer-score").innerHTML = "Computer : " + computerScore;
              }
              else if (unknown == 2 && computerChose == rk1) {
                     userScore++;
                     document.getElementById("user-score").innerHTML = "You : " + userScore;
              }
              else if (unknown == 3 && computerChose == rk1) {
                     computerScore++;
                     document.getElementById("computer-score").innerHTML = "Computer : " + computerScore;
              }
              else if (unknown == 3 && computerChose == pr1) {
                     userScore++;
                     document.getElementById("user-score").innerHTML = "You : " + userScore;
              }
              if (userScore > 9) {
                     confirm("Congratulations!! You Won, Want to play again?");
                     if (confirm) {
                            location.reload();
                     }
              }
              else if (computerScore > 9) {
                     confirm("You Lost, Want to Try again?");
                     if (confirm) {
                            location.reload();
                     }
              }
       }, 1000);
}
function hideComputerChoice() {
       sr1.style.visibility = 'hidden';
       rk1.style.visibility = 'hidden';
       pr1.style.visibility = 'hidden';
}
function userChoseReset(){
       location.reload();
}