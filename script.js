const minutesBlock       = document.querySelector('.minutes'),
      secondsBlock       = document.querySelector('.seconds'),
      millisecondsBlock  = document.querySelector('.milliseconds'),
      btnStart      = document.querySelector('.btn-start'),
      btnStop       = document.querySelector('.btn-stop'),
      btnReset      = document.querySelector('.btn-reset');
 


let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;



const startTimer = () =>{
milliseconds++;
if(milliseconds <= 99){
    millisecondsBlock.innerHTML = milliseconds;
}

if(milliseconds === 100){
    millisecondsBlock.innerHTML = '00';
}
if(milliseconds > 99){
    seconds++;
    secondsBlock.innerHTML = '0' + seconds;
    milliseconds = 0;
    }
    if(seconds > 9){
        secondsBlock.innerHTML = seconds;
    }
    if(seconds > 59){
        minutes++;
        minutesBlock.innerHTML = '0' + minutes;

        seconds = 0;
        secondsBlock.innerHTML = '0' + seconds;
    }
    if(minutes > 9){
        minutesBlock.innerHTML = minutes;
    }
}


btnStart.addEventListener('click', ()=>{
  clearInterval(interval);
  interval = setInterval(startTimer,10);

});


btnStop.addEventListener('click',  ()=>{
    interval = clearInterval(interval);
});


btnReset.addEventListener('click', ()=>{
    clearInterval(interval);
minutes = 0;
seconds = 0;
milliseconds = 0;

minutesBlock.innerHTML = '00';     
secondsBlock.innerHTML = '00';     
millisecondsBlock.innerHTML = '00';

});


