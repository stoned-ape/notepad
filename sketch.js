let isDrawing=false;
let size=5;
let penShade=true;
let canvas;
let saveNum=0;
let name;
let sliderW;
let circ=true;
let ed=["enable","disable"]

function setup(){
  name="a"+floor(random(0,1000))+"-";
  canvas=createCanvas(550,400);
  noFill();
  background(0);

  buttonE=createButton("enable/disable erasure (c)");
  buttonE.mousePressed(()=>{
    // buttonE.value(ed[Number(!penShade)]+" erasure (c)");
    // document.getElementsByTagName("button")[0].value=ed[Number(!penShade)]+" erasure (c)";
    penShade=!penShade;
  });
  buttonS=createButton("save image (s)");
  buttonS.mousePressed(()=>{
    if (saveNum<10) saveCanvas(canvas,(name+"000")+saveNum);
    else if (saveNum<100) saveCanvas(canvas,(name+"00")+saveNum);
    else if (saveNum<1000) saveCanvas(canvas,(name+"0")+saveNum);
    else if (saveNum<1000) saveCanvas(canvas,name+saveNum);
    saveNum++;
  });
  buttonC=createButton("clear screen (e)");
  buttonC.mousePressed(()=>{
    background(0);
  });
  createDiv("set pen width <br>");
  sliderW=createSlider(1,10,5,.0001);
  createDiv('set pen color: <br>');
  createDiv('<input type="color" name="clr" value="#ff00f7" ><br>');
}

function draw(){
  // scale(1/width,1/height);
  if(isDrawing){
    if(penShade) stroke(document.getElementsByName("clr")[0].value);
    else stroke(0);
    strokeWeight(sliderW.value());
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}

function mousePressed(){
  isDrawing=true;
}

function mouseReleased(){
  isDrawing=false;
}

function keyPressed(){
  if (key=='e') background(0);
  if (key=='c') penShade=!penShade;
  if (key=='s'){
    if (saveNum<10) saveCanvas(canvas,(name+"000")+saveNum);
    else if (saveNum<100) saveCanvas(canvas,(name+"00")+saveNum);
    else if (saveNum<1000) saveCanvas(canvas,(name+"0")+saveNum);
    else if (saveNum<1000) saveCanvas(canvas,name+saveNum);
    saveNum++;
  }
}
