const clock=document.getElementById("clock");
let timer =null;
let starttime=0;
let elapsedtime=0;
let isrunning=false;

function starting(){
    if(!isrunning){
        starttime=Date.now()-elapsedtime;
        timer=setInterval(update,10);
        isrunning=true;
    }
}
function stoping(){
    if(isrunning){
        clearInterval(timer)
        elapsedtime=Date.now() -starttime;
        isrunning=false;
    }
}
function reseting(){
    clearInterval(timer);
    starttime =0;
    elapsedtime=0;
    isrunning=false;
    clock.textContent="00:00:00:00"
}
function update(){
    const currentTime=  Date.now();
    elapsedtime=currentTime-starttime;

    let hours=Math.floor(elapsedtime/(1000*60*60)).toString().padStart(2,0);
    let minutes=Math.floor(elapsedtime/(1000*60)%60).toString().padStart(2,0);
    let seconds=Math.floor(elapsedtime/1000%60).toString().padStart(2,0);
    let milliseconds=Math.floor(elapsedtime%1000/10).toString().padStart(2,0);

    clock.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`
}
