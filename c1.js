function $(id) {
  return document.getElementById(id);
}

let el = $("c1");
let ctx = el.getContext("2d");
let x = 300;
let y = 300;
let r = 120;
let h = 88;
function animate() {
  let date = new Date();
  let seconds = date.getSeconds();
  let hours = date.getHours() % 12;
  let minutes = date.getMinutes();
  ctx.reset();
  ctx.lineCap = 'round';
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.lineWidth = 9;
  ctx.strokeStyle = "red";
  ctx.beginPath();
  ctx.arc(x, y, r, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "blue";
  ctx.beginPath();
  ctx.arc(x, y, r - 20, 0, Math.PI * 2);
  ctx.lineWidth = 2;
  ctx.stroke();
  ctx.closePath();

  for (let angle = 30; angle <= 360; angle += 30) {
    ctx.beginPath();
    let ang = (Math.PI / 180) * (90 - angle);
    let x = 300 + Math.cos(ang) * h;
    let y = 300 - Math.sin(ang) * h;
    ctx.fillText(angle / 30, x, y);
    ctx.closePath();
  }

  let angSec = (Math.PI / 180) * (90 - seconds * 6);
  let angHour = (Math.PI / 180) * (90 - hours * 30);
  let angMinute = (Math.PI / 180) * (90 - minutes * 6);
  let secondssLineToX = 300 + Math.cos(angSec) * (h - 8);
  let secondssLineToY = 300 - Math.sin(angSec) * (h - 8);
  let minutesLineToX = 300 + Math.cos(angMinute) * (h - 8);
  let minutesLineToY = 300 - Math.sin(angMinute) * (h - 8);
  let hoursLineToX = 300 + Math.cos(angHour) * (h - 30);
  let hoursLineToY = 300 - Math.sin(angHour) * (h - 30);
  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.lineTo(secondssLineToX, secondssLineToY);
  ctx.strokeStyle = "black";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.lineTo(minutesLineToX, minutesLineToY);
  ctx.strokeStyle = "green";
  ctx.stroke();
  ctx.closePath();

  ctx.beginPath();
  ctx.moveTo(300, 300);
  ctx.lineTo(hoursLineToX, hoursLineToY);
  ctx.strokeStyle = "blue";
  ctx.stroke();
  ctx.closePath();
  
  ctx.font = "bold 48px serif";
  ctx.fillText(`${hours}:${minutes}:${seconds}`, x, y + r + 30);
  
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);
