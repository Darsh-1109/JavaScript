const time=document.querySelector("#display");
const start=document.querySelector("#start");
const pause=document.querySelector("#pause");
const reset=document.querySelector("#reset");

let starttime=0;
let elapsedtime=0;
let currenttime=0;
let paused=true;
let interval;
let hrs=0;
let min=0;
let sec=0;

start.addEventListener("click",()=>{
    if(paused){
        paused=false;
        starttime=Date.now()-elapsedtime;
        interval=setInterval(update,75);
    }
});
pause.addEventListener("click",()=>{
    if(!paused){
        paused=true;
        elapsedtime=Date.now()-starttime;
        clearInterval(interval);
    }
});
reset=addEventListener("click",()=>{starttime=0;
    elapsedtime=0;
    currenttime=0;
     paused=true;
     interval;
     hrs=0;
     min=0;
     sec=0;
     time.innerHTML="00:00:00";

});

function update(){
    elapsedtime=Date.now()-starttime;
    sec=Math.floor((elapsedtime/1000)%60);
    min=Math.floor((elapsedtime/(1000*60))%60);
    hrs=Math.floor((elapsedtime/(1000*60*60))%60);

    time.innerHTML=hrs+":"+min+":"+sec;
}
