class Stone {
    constructor(x,y,r){
        var opt = {
            density : 1.2
        }
        this.body = Bodies.circle(x,y,40,opt);
        this.x=x;
        this.y=y;
        this.r=r;
        World.add(world,this.body)
        this.image = loadImage("stone.png");
    }

    fly(){
        this.sling.body=null;
    
      }

    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        
    }
}