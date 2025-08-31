const minNum = 1;
const maxNum = 100;

const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;


let running = true;
let guess;
let attempt = 0 

 while(running){
    guess = window.prompt(`Guess a number between ${minNum} and ${maxNum}`);
    guess = Number(guess);
    if(isNaN(guess)){
        window.alert('pls enter a valid number')
    } else if(guess < minNum || guess> maxNum){
        window.alert ('pls enter a valid number')
    }else {
        attempt++
        if (guess < answer){
            window.alert('TOO LOW! TRY AGAIN')
        } else if(guess > answer){
            window.alert('TOO HIGH! TRY AGAIN')
        } else {
            window.alert(`CORRECT! The answer was ${answer}. It took you ${attempt} attempts`)
            running = false
        }
    }
 }