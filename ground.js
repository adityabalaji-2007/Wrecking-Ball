class Ground{
    constructor(){
        var options = {
            isStatic:true
        }
        this.body = Bodies.rectangle(1000,900,2000,20,options);
        this.width = 2000;
        this.height = 20;
    }
    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill('black');
      rect(pos.x,pos.y,this.width,this.height);
    }
}