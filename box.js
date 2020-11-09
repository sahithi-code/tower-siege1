class Box {
constructor(x,y,width,height){
 var options={

   /* friction:0.05,
    density:0.5*/
 }

   
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
this.body= Bodies.rectangle(x,y,width,height,options)
World.add(world,this.body)
}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("pink");
    rect(pos.x, pos.y, this.width, this.height);
}


}