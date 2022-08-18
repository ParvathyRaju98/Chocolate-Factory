function setup() {
    createCanvas(600, 600);
  }
  
  function preload(){
    m = createAudio('music.mp3');
  }
  function mouseMoved() {
    // playing a sound file on a user gesture
    // is equivalent to `userStartAudio()`
  
      m.play(); 
      m.volume(map(mouseX,0,600,0.1,0.9));
    }
      
  function draw(){
    //m.play();
    //m.volume(0.9);
  
    background("black");
    stroke("black");
    strokeWeight(18);
    
    //yellow square
    fill ("#FFDD0A");
    quad(19,17,  mouseX,17,  mouseX,mouseY, 19,mouseY);
    
    //red square
    fill("#E00D1E");
    quad(mouseX,17, 580,17, 580,473, mouseX,473);
    
    //grey square 1
    fill("#EAE8E9");
    quad(19,mouseY, 179,mouseY, 179,473, 19,473);
    
    //blue square
    fill("#09388A");
    quad(19,476, 179,476, 179,581, 19,581);
    
    //grey square 2
    fill("#EAE8E9");
    quad(182,476, mouseX,476, mouseX,581, 182,581);
    
    //grey square 3
    fill("#EAE8E9");
    quad(mouseX,476, 580,476, 580,581 ,mouseX,581);
    
    //blue square
    fill("#09388A");
    quad(19,476, 179,476, 179,581, 19,581);
    
    //black border
    noFill();
    strokeWeight(45);
    quad (0,0 ,600,0, 600,600, 0,600)
  }
  