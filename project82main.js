var mouseEvent="empty";
var Lastpositionof_x,Lastpositionof_y;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="blue";
width="1";
//
//ctx.arc(200, 200, 40 ,0 ,2 * Math.PI);
canvas.addEventListener("mousedown", my_mousedown);


function my_mousedown(e)
{
color = document.getElementById("color").value;
console.log(color);
width = document.getElementById("width").value;
mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{


currentpositionofmouse_x = e.clientX - canvas.offsetLeft;
currentpositionofmouse_y = e.clientY - canvas.offsetTop;
if(mouseEvent=="mouseDown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
console.log("X = " + Lastpositionof_x + " , Y = " + Lastpositionof_y);
ctx.moveTo(Lastpositionof_x,Lastpositionof_y);
console.log("X = " + Currentpositionof_mousex + " , Y = " + Currentpositionof_mousey);
ctx.lineTo(Currentpositionof_mousex,Currentpositionof_mousey);
ctx.stroke();
} 
Lastpositionof_x=Currentpositionof_x;
Lastpositionof_y=Currentpositionof_y;
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
mouseEvent="mouseUP";
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
mouseEvent="mouseleave";
}
function clearArea(){
ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}

