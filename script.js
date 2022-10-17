'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;


/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct!!!';*/

document.querySelector('.check').addEventListener('click',function(){
    
    const guess = Number(document.querySelector('.guess').value);

    if(!guess){
        document.querySelector('.message').textContent = 'Please Put a Number.';
    } else if (guess > 20 || guess < 1) {
        document.querySelector('.message').textContent = 'Out of The Range!!!';
          
    }
    else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Bingo!!!';

        document.querySelector('.number').textContent=secretNumber;

        document.querySelector('body').style.backgroundColor='#60b347';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }


    }
    else if (guess > secretNumber){
        if (score>1) {
        document.querySelector('.message').textContent = 'Too High!!!';
        score--;
        document.querySelector('.score').textContent = score;
        } else { 
        document.querySelector('.message').textContent = 'Sorry! You Lost.';
        document.querySelector('.score').textContent = 0;
        }
    }
    else if (guess < secretNumber) {
        if (score >1) {
        document.querySelector('.message').textContent = 'Too Low!!!';
        score--;
        document.querySelector('.score').textContent = score; 
    } else {
        document.querySelector('.message').textContent = 'Sorry! You Lost.';
        document.querySelector('.score').textContent = 0;  
    }
    }
    
    
});

document.querySelector('.again').addEventListener('click',function(){
score=20;
secretNumber=Math.trunc(Math.random()*20)+1;
document.querySelector('.message').textContent='Start guessing...';
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent = '?';
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor='#222';
document.querySelector('.number').style.width='15rem';
 
}
);