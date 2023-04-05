const b=document.getElementById("b1");
const d1=document.getElementById("d");
 b=addEventListener("click",begin);
 function begin(){
    let timerid= null;
    let x=0;
    let y =0;
    let degree=0;
    
    timerid=setInterval(frame,5);

    function frame(){
        if(x>=200 || y>=200){
        clearInterval(timerid);
        }
        else
        {
            x=x+1;
            y=y+1;
            degree=degree+1;
            d1.style.top=y+"px";
            d1.style.left=x+"px";
            d1.style.transform="rotateX("+degree +"deg)";

        }
    }



 }