/*console.log("I like js");
console.log("i like html better");

window.alert("ily");

let name= "Darsh";
let age =21;
let bool=true;
age+=1;
console.log("Hello",name);
console.log("You are",age," years old");
console.log("Registered :",bool);
document.getElementById("p1").innerHTML="Hello  "+name;
document.getElementById("p2").innerHTML="You are "+age+" years old";
document.getElementById("p3").innerText=" Registered: "+ bool;


//let username=window.prompt("Whats your name");
//console.log(username);
let username="";
document.getElementById("submit").onclick=function(){
    username=document.getElementById("in1").value;
    console.log(username);
    document.getElementById("l1").innerHTML=username
}
*/
let num=0
document.getElementById("i").onclick=function(){
    num+=1
    document.getElementById("l1").innerHTML=num
}
document.getElementById("r").onclick=function(){
    num=0
    document.getElementById("l1").innerHTML=num
}
document.getElementById("d").onclick=function(){
    num-=1
    document.getElementById("l1").innerHTML=num
}

 