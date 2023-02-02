var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var plataforma1 = createSprite(0,200,115,215);
plataforma1.shapeColor = "cyan";
var plataforma2 = createSprite(400,200,115,215);
plataforma2.shapeColor = "yellow";

var sam = createSprite(30,204,20,20);
sam.shapeColor="brown";
var limit1 = createSprite(0,89,800,5);
var limit2 = createSprite(0,308,800,5);
var carro1 = createSprite(100,120,20,20);
var carro2 = createSprite(165,290,20,20);
var carro3 = createSprite(215,120,20,20);
var carro4 = createSprite(270,290,20,20);
var score = 5;
carro1.shapeColor="red"
carro2.shapeColor="red"
carro3.shapeColor="red"
carro4.shapeColor="red"

 createEdgeSprites()

carro1.velocityY=8
carro2.velocityY=-8
carro3.velocityY=8
carro4.velocityY=-8

function draw() {
  background("black");
   textSize(20)
  text ("vidas= "+score,310,40)
 
 if (keyDown("right")){
   sam.x=sam.x+5
 }
 
  if (keyDown("left")){
   sam.x=sam.x-5
 }
 
 if(sam.isTouching(carro1)||
 sam.isTouching(carro2)||
 sam.isTouching(carro3)||
 sam.isTouching(carro4)){
   sam.x=30
   sam.y=204
   
   score=score-1;
   
 }
 
 if (score==0){
  
   text ("game over!!",160,200)
   gameState=end
 }
 carro1.bounceOff(limit2)
  carro1.bounceOff(limit1)
 carro2.bounceOff(limit1)
 carro2.bounceOff(limit2)
 carro3.bounceOff(limit1)
 carro3.bounceOff(limit2)
 carro4.bounceOff(limit1)
 carro4.bounceOff(limit2)
 
  drawSprites();
  
  
  
  
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
