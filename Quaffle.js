class Quaffle extends BaseClass{
    constructor(x,y,height){
      super(x,y,20,height);
      this.image = loadImage("Sprites/Quaffle.png");
    //  Matter.Body.setAngle(this.body, angle);
    }
  }