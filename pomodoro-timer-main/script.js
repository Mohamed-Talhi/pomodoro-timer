const timer = document.getElementById('timer');
const start = document.getElementById('start');
const pause =document.getElementById('pause');
const reset = document.getElementById('reset');
const message = document.getElementById('message');
 let timeLeft = 1500;
 let interval ;

 start.addEventListener('click',() => {

    const minutes = Math.floor(timeLeft /60 );
    const seconds = timeLeft %60;
 const formattedTime =
  `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;

    timer.innerHTML = formattedTime;


 });

 start.addEventListener("click", () => {

    interval = setInterval(() => {
        timeLeft--;
         if(timeLeft <= 0){
        clearInterval(interval);
        message.innerHTML = `Time's up! Take a break!`;
    }
       const minutes = Math.floor(timeLeft /60);
       const seconds = timeLeft % 60;
       timer.innerHTML = 
       `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;
    }, 1000);



   });

pause.addEventListener("click",() => {
    clearInterval(interval);
});

reset.addEventListener("click",() => {
    clearInterval(interval);
    timeLeft = 1500;
    const minutes = Math.floor(timeLeft /60);
    const seconds = timeLeft % 60 ;

    timer.innerHTML = 
        `${minutes.toString().padStart(2,"0")} : ${seconds.toString().padStart(2,"0")}`;

});