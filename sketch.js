var sound1
function preload(){
  sound1 = loadSound("音樂課30秒素材 by Roye.mp3") //先把音樂檔載入到sound1程式碼中
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background("#246a73")
  analyzer = new p5.Amplitude();
  analyzer.setInput(sound1)
}


var w = 100 
var s_w = 40
var fc
function draw() {
  background("#829399")
  rectMode(CENTER)  //設定方框中心點為方框的座標點
  noFill()
  if(sound1.isPlaying()){
    //音樂正在撥放
    fc = map(analyzer.getLevel(),0,1,0,100)
  }
  else{
    //音樂停下
    fc = map(mouseX,0,width,0,100)
  }
  for(var y=50;y<=width+50;y=y+w){
  for(var x=50;x<=width+50;x=x+w){
  stroke("#f2a65a")
  strokeWeight(4)
  ellipse(x,y,w+fc)
  stroke("#f2a65a")
  strokeWeight(4)
  rect(x,y,w+fc)
  rect(x-20,y-20,w+fc)
  textSize(fc+50)
  text("412731068賴信宇",width-800,height-100)
  }
 }
}


function mousePressed(){
  if(sound1.isPlaying()){
    sound1.stop();
  }
  else{
    sound1.play();
  }
}