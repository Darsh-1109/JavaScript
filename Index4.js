let a;
let b;
document.getElementById("b1").onclick= function(){
    a=document.getElementById("i1").value;
    b=Math.random();
    b=Math.floor(b*6+1)

    document.getElementById("l2").innerHTML=b;
    if (a==b)
    {
        document.getElementById("l3").innerHTML="You guessed the correct number";

    }
    else
    {
        document.getElementById("l3").innerHTML="You guessed the incorrect number";
    }

}