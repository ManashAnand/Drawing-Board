window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var reset = document.getElementById("reset");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;


let isDrawing = false;
let lastX =0,lastY=0;
context.strokeStyle = "#BADA55";
context.lineCap  = 'round';
context.lineJoin = 'round';
context.lineWidth = 40;

let hue = 0;

function draw(e){
    if(!isDrawing) return;
 
    console.log(e);
    context.beginPath();
    
    context.moveTo(lastX,lastY);
    context.lineTo(e.offsetX,e.offsetY);
    // let hue = e.offsetX+e.offsetY;

    hue++;
    context.strokeStyle = `hsl(${hue},100%,50%)`;
    context.stroke();
[lastX,lastY] = [e.offsetX,e.offsetY];

}




canvas.addEventListener('mousedown',(e)  =>
    {
     isDrawing = true;
     [lastX,lastY] = [e.offsetX,e.offsetY];
    
    });
canvas.addEventListener('mousemove',draw);
canvas.addEventListener('mouseup',()=> isDrawing = false);
canvas.addEventListener('mouseout',()=> isDrawing = false);

};
reset.addEventListener("click",erase);
function erase()
{
    console.log("working")
    const context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
}