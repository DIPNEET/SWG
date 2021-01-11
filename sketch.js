var name1,button,gs=0;
var score=0;
var n;
function setup(){

    createCanvas(displayWidth-7,displayHeight-145)
    
    name1 = createInput("Enter Your Name")
    name1.position(displayWidth/2-120,280)
    
    name1.hide()

    button = createButton("Play")
    button.position(displayWidth/2-120,380)
    button.hide()

    button1 = createButton("Replay")
    button1.position(displayWidth/2-60,680)
    button1.hide()

    d2 = loadAnimation("images/d1.png","images/d2.png")
    
    drop2 = createSprite(displayWidth/2,600,30,30)
    drop2.addAnimation('d2',d2)
    drop2.scale = 0.25;
    drop2.visible=false;
    //drop2.debug=true;
    drop2.setCollider("circle",0,0,230);

}

function draw(){

        background("black");
        drawSprites();
        n = name1.value()
        textFont('Georgia');
        textSize(30);
        fill("blue");
        
        if(gs!==0){
            var back=createSprite(displayWidth/2,100,displayWidth,50)
            back.shapeColor="lightblue"
            

            text("SCORE  :  ",displayWidth/2-120,50);
            fill("RED");
            text(score,displayWidth/2+30,50);

            fill("lightgreen")
            text("Welcome "+ n,10,40)
        
        }

        fill("blue")
        textSize(25)
        if(gs!==4 && gs!==0)
        text("This is Splash! He is lost! Take him to his family of water bodies, by making correct decisions.  Beware! A bad decision can cost you!", 20,110)
        

        handler()

       
        

}

