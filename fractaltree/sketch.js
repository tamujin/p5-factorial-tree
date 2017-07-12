var angle = 0;
var slider;

function setup() {
    createCanvas(400,400);

    slider = createSlider(0, TWO_PI , PI / 4,0.01);
}

function draw() {
   translate(200,height);
  
   background(51);
   stroke(255);
   branch(100,20);

//    angle = slider.value();
angle = map(mouseX,0, width, TWO_PI , PI / 4);

}

function branch( len , thickness ){
    
    strokeWeight(thickness);  
    line(0, 0, 0 , -len);
    translate(0, -len);
    
     if (len >  4 ) {
        push();
        rotate(angle);
        branch(len*0.67,thickness*0.67);
        pop();
        push();
        rotate(-angle);
        branch(len*0.67,thickness*0.67);
        pop();
    }
     

    
    }