var bg_img,bg;
var s1;
function preload() {
  bg_img= loadImage("campLoc.png");
  tent_img= loadImage("t.png");
}
function setup() {
  createCanvas(displayWidth-400,displayHeight-400);
  s1= createSprite(270,277,100,100);
  s1.addImage("tent_img",tent_img);
  s1.scale= 1.4;
  s1.visible=false;

  s2= createSprite(388,277,100,100);
  s2.addImage("tent_img",tent_img);
  s2.scale= 1.4;
  s2.visible=false;

  s3= createSprite(506,277,100,100);
  s3.addImage("tent_img",tent_img);
  s3.scale= 1.4;
  s3.visible=false;

  s4= createSprite(624,277,100,100);
  s4.addImage("tent_img",tent_img);
  s4.scale= 1.4;
  s4.visible=false;

  s5= createSprite(742,277,100,100);
  s5.addImage("tent_img",tent_img);
  s5.scale= 1.4;
  s5.visible=false;

  s6= createSprite(860,277,100,100);
  s6.addImage("tent_img",tent_img);
  s6.scale= 1.4;
  s6.visible=false;
  
  s7= createSprite(270,390,100,100);
  s7.addImage("tent_img",tent_img);
  s7.scale= 1.4;
  s7.visible=false;

  s8= createSprite(388,390,100,100);
  s8.addImage("tent_img",tent_img);
  s8.scale= 1.4;
  s8.visible=false;

  s9= createSprite(506,390,100,100);
  s9.addImage("tent_img",tent_img);
  s9.scale= 1.4;
  s9.visible=false;

  s10= createSprite(624,390,100,100);
  s10.addImage("tent_img",tent_img);
  s10.scale= 1.4;
  s10.visible=false;

  s11= createSprite(742,390,100,100);
  s11.addImage("tent_img",tent_img);
  s11.scale= 1.4;
  s11.visible=false;

  s12= createSprite(860,390,100,100);
  s12.addImage("tent_img",tent_img);
  s12.scale= 1.4;
  s12.visible=false;
  42, 16, 14, 8, 7, 6, 2
  sel = createSelect();
  sel.position(1040, 310);
  sel.option('42');
  sel.option('16');
  sel.option('14');
  sel.option('8');
  sel.option('7');
  sel.option('6');
  sel.option('2');

  sel3 = createSelect();
  sel3.position(1100, 310);
  sel3.option('Multiply (*)');
  sel3.option('Divide (/)');

  sel2 = createSelect();
  sel2.position(1200, 310);
  sel2.option('42');
  sel2.option('16');
  sel2.option('14');
  sel2.option('8');
  sel2.option('7');
  sel2.option('6');
  sel2.option('2');

  sel4 = createSelect();
  sel4.position(1290, 310);
  sel4.option('42');
  sel4.option('16');
  sel4.option('14');
  sel4.option('8');
  sel4.option('7');
  sel4.option('6');
  sel4.option('2');

  
}
function draw() {
  background(bg_img);
  drawSprites();
  text(
    "X " + World.mouseX + " , Y " + World.mouseY,
    World.mouseX,
    World.mouseY
  );
  fill("black")
  textSize(70);
  text("=",1235,330);
  if(mousePressedOver(s1)){
    s1.visible=true;
  }
  if(mousePressedOver(s2)){
    s2.visible=true;
  }
  if(mousePressedOver(s3)){
    s3.visible=true;
  }
  if(mousePressedOver(s4)){
    s4.visible=true;
  }
  if(mousePressedOver(s5)){
    s5.visible=true;
  }
  if(mousePressedOver(s6)){
    s6.visible=true;
  }
  if(mousePressedOver(s7)){
    s7.visible=true;
  }
  if(mousePressedOver(s8)){
    s8.visible=true;
  }
  if(mousePressedOver(s9)){
    s9.visible=true;
  }
  if(mousePressedOver(s10)){
    s10.visible=true;
  }
  if(mousePressedOver(s11)){
    s11.visible=true;
  }
  if(mousePressedOver(s12)){
    s12.visible=true;
  }
  if(sel.value()=='6' && sel2.value()=='7' && sel4.value()=="42" && sel3.value()=="Multiply (*)"){
    text("Correct",1035,400);
  }else if(sel.value()=='7' && sel2.value()=='6' && sel4.value()=="42" && sel3.value()=="Multiply (*)"){
    text("Correct",1035,400);
  }
  else if(sel.value()=='2' && sel2.value()=='7' && sel4.value()=="14" && sel3.value()=="Multiply (*)"){
    text("Correct",1035,400);
  }
  else if(sel.value()=='7' && sel2.value()=='2' && sel4.value()=="14" && sel3.value()=="Multiply (*)"){
    text("Correct",1035,400);
  }
  else if(sel.value()=='42' && sel2.value()=='6' && sel4.value()=="7" && sel3.value()=="Divide (/)"){
    text("Correct",1035,400);
  }
  else if(sel.value()=='14' && sel2.value()=='2' && sel4.value()=="7" && sel3.value()=="Divide (/)"){
    text("Correct",1035,400);
  }
  // console.log(sel.value(),sel2.value(),sel3.value(),sel4.value());
}
