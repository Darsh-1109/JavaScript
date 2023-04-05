const div=document.getElementById("d");
window.addEventListener("keydown",moving);
let x=0;
let y =0;
function moving(event){

    if(event.key=="ArrowDown"){
    y+=5;
    div.style.top= y+"px"
    }
    else if(event.key=="ArrowUp"){
    y-=5;
    div.style.top= y+"px"

    }
    else if(event.key=="ArrowRight"){
    x-=5;
    div.style.right= x+"px"
    }
    else if(event.key=="ArrowLeft"){
    x+=5;
    div.style.right= x+"px"
    }
    else 
    window.alert("Incorrect Button");



}