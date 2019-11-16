class car 
{
  constructor(x,y)
  {
    console.log("New car created");
    this.x = x;
    this.y = y;

    const img = new Image();
    img.src='images/car.jpg';
    img.onload=function() {
    context.drawImage(img,this.x,this.y);
    };
    this.img=img;
  }

  lerp(start,end,amt)
  {
    return ((1-amt)*start+amt*end); //
  }
}

car.prototype.advancePosition = function(x , y)
{
 this.x = this.lerp(this.x , this.x + x , 1);
 this.y = this.lerp(this.y , this.y + y , 1);
}

