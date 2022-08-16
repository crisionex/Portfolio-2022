const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
ctx.imageSmoothingQuality = "high";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight

const dpi = window.devicePixelRatio;
canvas.getContext('2d').scale(dpi, dpi);

ctx.lineWidth = 1.5;

var wth = canvas.width / 2;
var hth = canvas.height / 2;
ctx.translate(wth, hth);

let zelta = 0;
let x, x1, x2, y, y1, y2;
const multiplo = 2589;
const n = parseInt( Math.random() * (35 - 3) + 3);
const c = parseInt(Math.random() * (1.7 - 0.3) + 0.3);
console.log(c)
var arr = [[]];


setup();
function setup() {
  for (let i = 0; i < n; i++) {
    arr[i] = [];
    for(let j = 0; j < n; j++) {
    arr[i][0] = i;
    }
  }
}

drawcanvas();
function drawcanvas() {
    ctx.beginPath();

  for (let i = 0; i < n; i++) {
    x = -Math.cos((2 * i * Math.PI) / n) * wth;
    y = -Math.sin((2 * i * Math.PI) / n) * wth;
    if (arr[i][0] == i) {
      arr[i][1] = x;
      arr[i][2] = y;
    }
  }
  if(c == 1){
  for (let j = 0; j < n; j++) {
    zelta = arr[j][0]*multiplo;
    for (let k = 0; k < n; k++) {
        zelta = zelta%n;
      if(zelta == arr[k][0]){
      x1 = arr[j][1];
      y1 = arr[j][2];

      x2 = arr[k][1];
      y2 = arr[k][2];

      //dibujando lineas
      ctx.strokeStyle = 'rgb(255,255,255)';
      ctx.moveTo(x1, y2);
      ctx.lineTo(x2, y1);
      ctx.stroke();
      }
    }
  }
}else{
  for (let j = 0; j < n; j++) {
    zelta = arr[j][0]*multiplo;
    for (let k = 0; k < n; k++) {
        zelta = zelta%n;
      if(zelta == arr[k][0]){
      x1 = arr[j][1];
      y1 = arr[j][2];

      x2 = arr[k][1];
      y2 = arr[k][2];

      //dibujando lineas
      ctx.strokeStyle = 'rgb(255,255,255)';
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      }
    }
  }
}
}
window.addEventListener('resize',
function(){
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    wth = canvas.width / 2;
    hth = canvas.height / 2;
    ctx.translate(wth, hth);
    setup();
    drawcanvas();
});