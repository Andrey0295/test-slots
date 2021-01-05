


const app = new PIXI.Application({
    width: 1024, height: 480, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

const appView = document.body.appendChild(app.view);




PIXI.loader
  .add("bg" , "./images/BG.png")
  .add("imagesSprite0" , "./images/sprite.png")
  .load(setup);


let positions = [0, 120, 300, 470, 640, 800, 920];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} ;


function setup() {
  
    let pixiLoader = PIXI.loader.resources ;

    //  backgroundImage for slot-game...

  let bg = new PIXI.Sprite(pixiLoader.bg.texture );
  bg.width = 1024;
  bg.height = 480;
  
  app.stage.addChild(bg);


  let imagesSprite0 = new PIXI.TilingSprite(pixiLoader.imagesSprite0.texture, 235, 930);
  imagesSprite0.position.x = 70;
  imagesSprite0.tilePosition.y = 0;
  imagesSprite0.vx = 0;
  imagesSprite0.vy = 0;

  app.stage.addChild(imagesSprite0);


  let imagesSprite1 = new PIXI.TilingSprite(pixiLoader.imagesSprite0.texture, 235, 930);
  imagesSprite1.position.x = 330;
  imagesSprite1.tilePosition.y = 470;

  app.stage.addChild(imagesSprite1);



  let imagesSprite2 = new PIXI.TilingSprite(pixiLoader.imagesSprite0.texture, 235, 930);
  imagesSprite2.position.x = 590;
  imagesSprite2.tilePosition.y = 920;



  app.stage.addChild(imagesSprite2);






  // Animation for first slot...

  let firstSlotAnimation = true;
  app.ticker.add(delta => startFirstSlot(delta));


  function startFirstSlot(delta){

    if(firstSlotAnimation){
      imagesSprite0.tilePosition.y = positions[randomInt(0, 6)];
    }
    
  }

  setTimeout(() => {
    firstSlotStopAnimation()
    console.log(imagesSprite0.tilePosition.y)
    
  }, 3000);

      function firstSlotStopAnimation(){
         firstSlotAnimation = false;
        }




  // Animation for second slot....

  let secondSlotAnimation = true;
  app.ticker.add(delta => startSecondSlot(delta));

  function startSecondSlot(delta){

    if(secondSlotAnimation){
      imagesSprite1.tilePosition.y = positions[randomInt(0, 6)];
    }
    
  }

  setTimeout(() => {
    secondSlotStopAnimation();
    console.log(imagesSprite1.tilePosition.y)
    
  }, 4000);

      function secondSlotStopAnimation(){
        secondSlotAnimation = false;
        }



  // Animation for third slot......


  let thirdSlotAnimation = true;
  app.ticker.add(delta => startThirdSlot(delta));

  function startThirdSlot(delta){

    if(thirdSlotAnimation){
      imagesSprite2.tilePosition.y = positions[randomInt(0, 6)];
    }
    
  }

  setTimeout(() => {
    thirdSlotStopAnimation();
    console.log(imagesSprite2.tilePosition.y)
    
  }, 5000);

      function thirdSlotStopAnimation(){
        thirdSlotAnimation = false;
        }





     

}














