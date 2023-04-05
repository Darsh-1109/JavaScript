let a;
let b;

document.getElementById("b1").onclick=function(){
    a=document.getElementById("n1").value;
    b=document.getElementById("n2").value;
    a=Number(a);
    b=Number(b);
    c=Math.sqrt(Math.pow(a,2)+Math.pow(b,2));
    
    document.getElementById("l3").innerHTML= "Answer = "+c;
}

