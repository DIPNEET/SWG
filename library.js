function handler(){
    
  if (keyDown(LEFT_ARROW)){
      drop2.x -= 25;
  }
  if (keyDown(RIGHT_ARROW)){
      drop2.x += 25;
  }
  if (keyDown(UP_ARROW)){
      drop2.y -= 25;
  }
  if (keyDown(DOWN_ARROW)){
      drop2.y += 25;
  }
  
  
  if(gs===0){
      
      textFont('Georgia');
      textSize(50);
      fill("lightblue");
      text("SAVE WATER Q-GAME",displayWidth/2-300,80);
      //replay
      button1.hide()
      button.show()
      name1.show()

      button.mousePressed(()=>{
          button.hide()
          name1.hide()
          gs=0.5
      })
  }
   
  if(gs===0.5){
      
     
      s1=createSprite(500,290,300,300);
      s1.shapeColor="yellow";
      s2=createSprite(1000,290,300,300);
      s2.shapeColor="lightyellow";

      
      drop2.visible=true
      
      
      if (drop2.isTouching(s1)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score+=10
          gs=1  
          s1.destroy()
          s2.destroy()
      }
      else if(drop2.isTouching(s2)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score-=10
          gs=1 
          s1.destroy()
          s2.destroy()
         
      }
                  
  }

  if(gs==1){

      s1=createSprite(500,290,300,300);
      s1.shapeColor="PINK";
      s2=createSprite(1000,290,300,300);
      s2.shapeColor="purple";

      drop2.visible=true
      
      
      if (drop2.isTouching(s1)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score+=10
          gs=1.5 
          s1.destroy()
          s2.destroy()

      }
      else if(drop2.isTouching(s2)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score-=10
          gs=1.5 
          s1.destroy()
          s2.destroy()
      }
  }
      if(gs==1.5){

      s1=createSprite(500,290,300,300);
      s1.shapeColor="yellow";
      s2=createSprite(1000,290,300,300);
      s2.shapeColor="brown";

      drop2.visible=true
      
      
      if (drop2.isTouching(s1)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score+=10
          gs=2 
          s1.destroy()
          s2.destroy() 
      }
      else if(drop2.isTouching(s2)){
          drop2.x=displayWidth/2;
          drop2.y=600;
          score-=10
          gs=2
          s1.destroy()
          s2.destroy()
      }
  }
      if(gs==2){

          s1=createSprite(500,290,300,300);
          s1.shapeColor="green";
          s2=createSprite(1000,290,300,300);
          s2.shapeColor="lightgreen";

          drop2.visible=true
          
          
          if (drop2.isTouching(s1)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score+=10
              gs=2.5
              s1.destroy()
              s2.destroy() 
          }
          else if(drop2.isTouching(s2)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score-=10
              gs=2.5
              s1.destroy()
              s2.destroy()
          }  
      }

          if(gs==2.5){

              s1=createSprite(500,290,300,300);
              s1.shapeColor="yellow";
              s2=createSprite(1000,290,300,300);
              s2.shapeColor="orange";
  
              drop2.visible=true
              
              
              if (drop2.isTouching(s1)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score+=10
                  gs=3
                  s1.destroy()
                  s2.destroy()
              }
              else if(drop2.isTouching(s2)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score-=10
                  gs=3
                  s1.destroy()
                  s2.destroy()
              }    
          } 
          if(gs==3){

          s1=createSprite(500,290,300,300);
          s1.shapeColor="green";
          s2=createSprite(1000,290,300,300);
          s2.shapeColor="lightgreen";

          drop2.visible=true
          
          
          if (drop2.isTouching(s1)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score+=10
              gs=3.5
              s1.destroy()
              s2.destroy()
          }
          else if(drop2.isTouching(s2)){
              drop2.x=displayWidth/2;
              drop2.y=600;
              score-=10
              gs=3.5
              s1.destroy()
              s2.destroy()
          } 
      }   
          if(gs==3.5){

              s1=createSprite(500,290,300,300);
              s1.shapeColor="red";
              s2=createSprite(1000,290,300,300);
              s2.shapeColor="pink";
  
              drop2.visible=true
              
              
              if (drop2.isTouching(s1)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score+=10
                  gs=4
                  s1.destroy()
                  s2.destroy()
                  
              }
              else if(drop2.isTouching(s2)){
                  drop2.x=displayWidth/2;
                  drop2.y=600;
                  score-=10
                  s1.destroy()
                  s2.destroy()
                  gs=4
                 
              }    
                                

  }

          if(gs===4){
            
              
              button1.show()

              textFont('Georgia');
              textSize(30);
              
              var back=createSprite(displayWidth/2,100,displayWidth,50)
              back.shapeColor="black"

              fill("yellow");
             
              if(score===10)
              text("Score inference", 20,110)

              if(score===20)
              text("Score inference", 20,110)

              if(score===30)
              text("Score inference", 20,110)

              if(score===40)
              text("Score inference", 20,110)

              if(score===50)
              text("Score inference", 20,110)

              if(score===60)
              text("Score inference", 20,110)

              if(score===70)
              text("Score inference", 20,110)

              
              if(score<=0)
              text("Score inference", 20,110)

              button1.mousePressed(()=>{
                button1.hide()
                drop2.visible=false
                gs=0
                score=0
                drop2.x=displayWidth/2;
                drop2.y=600;

            })

          }

  
}