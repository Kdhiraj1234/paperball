class ball{
    constructor(x,y,radiusX,radiusY){
        var options = {
            ' isStatic' :false,
            'restitution' : 0.5,
            'friction' : 0.3,
            'density' : 1.2
        };
        this.body = Bodies.ellipse(x,y,radiusX,radiusY);
        this.radiusX = radiusX;
        this.radiusY = radiusY;
        World.add(world,this.body);
    };
    display(){
        var pos = this.body.position ;
        var angle = this.body.angle ;

        push();
        translate(pos.x,pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipseMode(CENTER);
        ellipse(x,y,this.radiusX,this.radiusY);
        pop();
    };
};