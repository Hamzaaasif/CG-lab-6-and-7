var canvas = document.getElementById("glcanvas");
var context = canvas.getContext('2d');

window.onload = update();

//var cultus = new car(20,10);
cultus = new car(60,60);

function update()
{
  
  console.log("Canvas width",canvas.width);
  console.log("Canvas height",canvas.height);
  car.prototype.advancePosition(0.91,0.4); 
}

function clearcanvas(cvs)
{
  const ctx = cvs.getContext('2d');
  ctx.save();
  ctx.globalCompositeOperation = 'copy';
  ctx.strokeStyle = 'transparent';
  ctx.beginPath();
  ctx.lineTo(0,0);
  ctx.stroke();
  ctx.closePath();
}

function render()
{
  clearcanvas(canvas);
  context.drawImage(cultus.img , cultus.x , cultus.y);


  //draw rectangle around image
  context.beginPath();
  context.rect(cultus.x , cultus.y , cultus.img.width,cultus.img.height);
  context.strokeStyle = 'black';
  context.stroke();
  context.closePath();

  //boundary collision
  if(cultus.x > canvas.width - cultus.img.width || cultus.y > canvas.height)
  {
    console.log(cultus.x);
    console.log(cultus.y)
    context.translate(-1,-1);
  }
  if(cultus.x > 800 || cultus.y > 500)
  {
    console.log(cultus.x);
    console.log(cultus.y)
    context.translate(-1,1);
  }
  if(cultus.x > 1200 || cultus.y > 900)
  {
    console.log("x at 1200",cultus.x);
    console.log("y at 900",cultus.y)
    context.translate(1,1);
  }
  if(cultus.x > 1400 || cultus.y > 1000)
  {
    console.log("x at 1400",cultus.x);
    console.log("y at 1000",cultus.y)
    context.translate(1,-5);
  }
}

function gameloop()
{
  requestAnimationFrame(mainLoop);
  render();
  update();
}