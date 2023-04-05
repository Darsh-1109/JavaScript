let c=document.getElementById("c");
let context =c.getContext("2d");

context.beginPath();
context.moveTo(250,250);
context.lineTo(0,0);
context.lineTo(0,500);
context.lineTo(500,0);
context.lineTo(500,500);
context.stroke();