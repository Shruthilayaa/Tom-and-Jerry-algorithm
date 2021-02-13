var cat,catImg1,catImg2,catImg3,catImg3;
var mouse,mouseImg1,mouseImg2,mouseImg3,mouseImg4;
var garden,gardenImg;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png");
    catImg3=loadAnimation("images/cat3.png");
    catImg4=loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2=loadAnimation("images/mouse2.png");
    mouseImg3=loadAnimation("images/mouse3.png");
    mouseImg4=loadAnimation("images/mouse4.png");
}

function setup(){
    createCanvas(1000,800);
    
   
    cat=createSprite(800,400,20,20);
    cat.addAnimation("cat",catImg1);
    cat.scale=0.3;
    mouse=createSprite(200,400,20,20);
    mouse.addAnimation("mouse",mouseImg1);
    mouse.scale=0.3
    //create tom and jerry sprites here

}

function draw() {
    background(gardenImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x < (cat.width-mouse.width)/2)
    {   //cat.velocityX=0;
        cat.addAnimation("catLastImg",catImg3);
        cat.changeAnimation("catLastImg");
        
        

    }

    drawSprites();
}


function keyPressed(){
    if(keyCode===LEFT_ARROW){
        cat.velocityX=-3;
        cat.addAnimation("catRunning",catImg2);
        cat.changeAnimation("catRunning");

    }
    

  //For moving and changing animation write code here


}
