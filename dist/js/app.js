const gameDisplay = document.querySelector('.gameDisplay');
const scorePlayer = document.querySelector('.score__player p');
const scoreComputer = document.querySelector('.score__computer p');
const printS = document.querySelector('.gameDisplay .winner');
let selectedSec;
let cScore = 0, pScore = 0;
const gameArr = ['rock','paper','scissors'];

$('.btn-s').click(function(){
    selectedSec = $(this).text();
    const playerHand = document.querySelector('.player__hand');
    const computerHand = document.querySelector('.computer__hand');
   /*  $('.player__hand, .computer__hand').one("animationend",function(){
        $(this).style.animation="";
    }) */
    const hands = document.querySelectorAll('.gameImages img');
    hands.forEach((element)=>{
        element.addEventListener('animationend',function() {
            this.style.animation = "";
        })
    });
    let random = Math.floor(Math.random() * 2);
    setTimeout(()=>{
        playerHand.src = `dist/images/${selectedSec}.png`;
        computerHand.src = `dist/images/${gameArr[random]}.png`;
    check(selectedSec,gameArr[random]);
    },2000);
    
    $('.player__hand').css({"animation":"shakePlayer 2s ease"});
    $('.computer__hand').css({"animation":"shakeCom 2s ease"});

});

function check(playerVal,comVal){

    
    if(playerVal === comVal){
        printS.innerText = "It is a tie match";
        printS.style.color = "white";
    }

    if(playerVal === "rock"){
        if(comVal === "paper"){
            printS.innerText = "You lose";
            printS.style.color = "red";
            cScore++;
            updateScore();
        }
        else if(comVal === "scissor"){
            printS.innerText = "You win";
            printS.style.color = "yellow";
            pScore++;
            updateScore();
        }
       
    }
    else if(playerVal === "paper"){
        if(comVal === "rock"){
            printS.innerText = "You win";
            printS.style.color = "yellow";

            pScore++;
            updateScore();
        }
        else if(comVal === "scissor"){
            printS.innerText = "You lose";
            printS.style.color = "red";

            cScore++;
            updateScore();
        }
        
    }
    else if(playerVal === "scissors"){
        if(comVal === "rock"){
            printS.innerText = "You lose";
            printS.style.color = "red";
            cScore++;
            updateScore();
        }
        else if(comVal === "paper"){
            printS.innerText = "You win";
            printS.style.color = "yellow";
            pScore++;
            updateScore();
        }
    }
}

const playBtn = document.querySelector('.playBtn');
const intro = document.querySelector('.intro');
playBtn.addEventListener('click', function(){
    intro.classList.add("fadeOut");
    gameDisplay.classList.add("fadeIn");
});

function updateScore(){
      scorePlayer.innerText = pScore;
      scoreComputer.innerText = cScore;
}
