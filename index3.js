let a;
document.getElementById("b1").onclick=function(){
    a=Math.random();
    a*=20
    a=Math.floor(a)+1
    document.getElementById("l1").innerHTML=a;
}