


const app = new PIXI.Application({
    width: 1024, height: 480, backgroundColor: 0x111111, resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

let appView = document.body.appendChild(app.view);




PIXI.loader
  .add("bg" , "./images/BG.png")
  .add("imagesSprite0" , "./images/sprite.png")
  .add("activeButton" , "./images/BTN_Spin.png")
  .add("disableButton", "./images/BTN_Spin_d.png")
  .on("progress" , loadProgressHandler)
  .load(setup);

  function loadProgressHandler() {
    console.log('LOADING....')
    app.renderer.backgroundColor = 0x111111;

    
    
  }
//   let message = new Text("Hello Pixi!");
// app.stage.addChild(message);
 


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

  let activeButton = new PIXI.Sprite(pixiLoader.activeButton.texture);
  activeButton.width = 125;
  activeButton.height = 125;
  activeButton.position.x = 870;
  activeButton.position.y = 180;



  let disableButton = new PIXI.Sprite(pixiLoader.disableButton.texture);
  disableButton.width = 125;
  disableButton.height = 125;
  disableButton.position.x = 870;
  disableButton.position.y = 180;

  // app.stage.addChild(activeButton);

  let btnContainer = new PIXI.Container();

  btnContainer.addChild(activeButton);
  
  app.stage.addChild(btnContainer);

  btnContainer.interactive = true;
  btnContainer.buttonMode = true;

 

  


  

//   var mouseIn = false;
// graphics.on("mouseover", function(e) {
//   console.log("over")
//   mouseIn = true;
// });

  






function onClick(e){
  
  console.log('we are cath click')
}






// Animation for first slot...

let firstSlotAnimation = false;
app.ticker.add(delta => startFirstSlot(delta));

btnContainer.on("click", firstStartAnimation)

  function startFirstSlot(delta){

    if(firstSlotAnimation){
      
      imagesSprite0.tilePosition.y = positions[randomInt(0, 6)];
    }
    
  }

  

       
       function firstStartAnimation(){
         firstSlotAnimation = true;
         setTimeout(() => {
          firstSlotAnimation = false;
          console.log(imagesSprite0.tilePosition.y)
          
        }, 3000);
       }

     




  // Animation for second slot....

  let secondSlotAnimation = false;
  app.ticker.add(delta => startSecondSlot(delta));

  btnContainer.on("click", secondSlotStartAnimation);

  function startSecondSlot(delta){

    if(secondSlotAnimation){
      imagesSprite1.tilePosition.y = positions[randomInt(0, 6)];
    }
    
  }

  

      function secondSlotStartAnimation(){
        secondSlotAnimation = true;

        setTimeout(() => {
          secondSlotAnimation = false;
          console.log(imagesSprite1.tilePosition.y)
          
        }, 4000);
        }



  // Animation for third slot......


  let thirdSlotAnimation = false;
  app.ticker.add(delta => startThirdSlot(delta));

  btnContainer.on("click", thirdSlotStartAnimation);

  function startThirdSlot(delta){

    if(thirdSlotAnimation){
      imagesSprite2.tilePosition.y = positions[randomInt(0, 6)];
    }
    
  }



      function thirdSlotStartAnimation(){
        thirdSlotAnimation = true;
        btnContainer.interactive = false;
        btnContainer.addChild(disableButton);

        setTimeout(() => {
          thirdSlotAnimation = false;
          btnContainer.interactive = true;
          btnContainer.removeChild(disableButton)
          console.log(imagesSprite2.tilePosition.y)
          
        }, 5000);
        }





     

}
















