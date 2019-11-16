
var canvas = document.getElementById("glcanvas");
var context = canvas.getContext('2d');

//window.onload = update();

//var cultus = new car(20,10);
cultus = new car(20,10);

function update()
{
  cultus.advancePosition(0.91,0.4); 
  //gameloop();
}



var animate = true;
var animateID;


window.onkeydown = function()
{

  console.log("Down key pressed ");
  animate = !animate;
  if(animate)
  {
    window.requestAnimationFrame(mainLoop)
  }
  else
  {
    cancelAnimationFrame(animateID)
  }
}



function mainLoop()
{

  if(animate)
  {
    //elm.style.left = ((Date.now() - starttime) / 4 % 600) + "px"
    animateID = window.requestAnimationFrame(mainLoop);
    render();
    update();
  }
}

//window.requestAnimationFrame(mainLoop);


window.onclick = click;

function click()
{
  animate = !animate;
  if(animate)
  {
    window.requestAnimationFrame(mainLoop)
  }
  else
  {
    cancelAnimationFrame(animateID)
  }
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
  ctx.restore();
  ctx.closePath();
}





function render()
{
  clearcanvas(canvas);
  context.drawImage(cultus.img , cultus.x , cultus.y);
  //console.log("Render function called");

  //draw rectangle around image
  context.beginPath();
  context.rect(cultus.x , cultus.y , cultus.img.width,cultus.img.height);
  context.strokeStyle = 'black';
  context.stroke();
  context.closePath();


  //boundary collision
  // if(cultus.x > canvas.width - cultus.img.width || cultus.y > canvas.height)
  // {
  //   console.log(cultus.x);
  //   console.log(cultus.y)
  //   context.translate(-1,-1);
  // }

  // if(cultus.x > 800 || cultus.y > 500)
  // {
  //   console.log("Car at X-axis:   ",cultus.x);
  //   console.log("Car at Y-axis:   ",cultus.y);
  //   context.translate(-1,1);
  // }
  // if(cultus.x > 1200 || cultus.y > 900)
  // {
  //   console.log("Car at X-axis:   ",cultus.x);
  //   console.log("Car at Y-axis:   ",cultus.y);
  //   context.translate(1,1);
  // }
  // if(cultus.x > 1400 || cultus.y > 1000)
  // {
  //   console.log("Car at X-axis:   ",cultus.x);
  //   console.log("Car at Y-axis:   ",cultus.y);
  //   context.translate(1,-5);
  // }

  A = canvas.width/cultus.x;
  C = -cultus.img.width;
  B = canvas.height / cultus.y;
  D = (canvas.height - cultus.img.height) - B*cultus.y;

if(cultus.x > canvas.width - cultus.img.width)
{
    // console.log("Car at X-axis:   ",cultus.x);
     //console.log("Car at Y-axis:   ",cultus.y);
     context.translate(-1,0);
     cultus.x = A*cultus.x+C;
     console.log("Car at Y-axis at right wall:   ",cultus.y);
}
if(cultus.y > canvas.height - cultus.img.height)
{
     //console.log("Car at X-axis:   ",cultus.x);
     console.log("Car at down wall:   ",cultus.y);
    context.translate(0,-1);
    cultus.y=B*cultus.y+D;
    console.log("Car at Y-axis:   ",cultus.y);
    console.log("Car at X-axis:   ",cultus.x);

}
// A= cultus.img.width / canvas.width;
// B= cultus.img.height / canvas.height;

// if(cultus.x > canvas.width - cultus.img.width)
// {
//     // console.log("Car at X-axis:   ",cultus.x);
//      //console.log("Car at Y-axis:   ",cultus.y);
//      context.translate(1,0);
//      cultus.x = A*cultus.x+C;
//      console.log("Car hamza:   ",cultus.y);
// }
// if(cultus.y > canvas.height - cultus.img.height)
// {
//      //console.log("Car at X-axis:   ",cultus.x);
//      console.log("Car billal:   ",cultus.y);
//     context.translate(-1,-1);
//     cultus.y=B*cultus.y+D;

// }
// // else
// // {

// //   console.log("Car outside:   ",cultus.y);
// //     console.log("Car outside:   ",cultus.x);
// // }

// // if(cultus.y > 400 && cultus.x > 480)
// // {
// //   console.log("inside");
// //   context.translate(1,0);
// //   cultus.y=B*cultus.y+D;
// // }
}


function gameloop()
{
  requestAnimationFrame(mainLoop);
  render();
  update();
}