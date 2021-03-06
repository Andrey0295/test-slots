


const app = new PIXI.Application({
    width: 1024 , height: 480 , backgroundColor: 0x111111, resolution: window.devicePixelRatio || 1,
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
    let loadingTextStyle = new PIXI.TextStyle({
      fontFamily: "Redressed",
      fontSize: 36,
      fill: "white",
      stroke: '#2E4053 ',
      strokeThickness: 4,
      dropShadow: true,
      dropShadowColor: "#000000",
  
    })
    let loadingMessage = new PIXI.Text("Loading.........Please wait", loadingTextStyle);
    loadingMessage.position.x = 300;
    loadingMessage.position.y = 200;

  
    app.stage.addChild(loadingMessage);

    
    
  }

 

// Images positions array //////////////////////

let positions = [0, 120, 300, 470, 640, 800];

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
} ;


function setup() {
  
    let pixiLoader = PIXI.loader.resources ;

    //  backgroundImage for slot-game//////////////

  let bg = new PIXI.Sprite(pixiLoader.bg.texture );
  bg.width = 1024 ;
  bg.height = 480 ;
  
  app.stage.addChild(bg);


  // Add money-text and money-text container///////////////////

  let hasMoney = 1000;
  let quantityWins = 0;
  
  let moneyTextStyle = new PIXI.TextStyle({
    fontFamily: "Redressed",
    fontSize: 20,
    fill: "yellow",

  })

  let moneyText = new PIXI.Text(`money: ${hasMoney}`, moneyTextStyle);
  moneyText.position.x = 872;
  moneyText.position.y = 340;

  let quantityWinsText = new PIXI.Text(`wins: ${quantityWins}`, moneyTextStyle);
  quantityWinsText.position.x = 872;
  quantityWinsText.position.y = 370;


  let moneyRectangle = new PIXI.Graphics();
  moneyRectangle.beginFill(0x145A32 );
  moneyRectangle.lineStyle(4, 0x52FA1C, 1);
  moneyRectangle.drawRect(865, 330, 130, 80);


  let moneyContainer = new PIXI.Container();
  moneyContainer.addChild(moneyRectangle);
  moneyContainer.addChild(moneyText);
  moneyContainer.addChild(quantityWinsText);
  
  app.stage.addChild(moneyContainer);


// Images sprites for slots///////////////


  let imagesSprite0 = new PIXI.TilingSprite(pixiLoader.imagesSprite0.texture, 235 , 930 );
  imagesSprite0.position.x = 70 ;
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
  imagesSprite2.tilePosition.y = 300;

  app.stage.addChild(imagesSprite2);


  // Buttons/////////////////////

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

 

  let btnContainer = new PIXI.Container();
  btnContainer.addChild(activeButton);
  app.stage.addChild(btnContainer);

  btnContainer.interactive = true;
  btnContainer.buttonMode = true;


    // add "YOU WON" Container///////////////////

    let youWonRectangle = new PIXI.Graphics();
    youWonRectangle.beginFill(0x1B4F72  );
    youWonRectangle.drawRect(80, 50, 755, 400);
    youWonRectangle.alpha = 0.8;
  
    let youWonTextStyle = new PIXI.TextStyle({
      fontFamily: "Redressed",
      fontSize: 92,
      fill: "yellow",
    })
  
    let youWonText = new PIXI.Text("YOU WON!", youWonTextStyle);
    youWonText.position.x = 220;
    youWonText.position.y = 175;

    let youWonContainer = new PIXI.Container();

    youWonContainer.addChild(youWonRectangle);
    youWonContainer.addChild(youWonText);

   


// Event listeners for all slots....

btnContainer.on("click", firstStartAnimation);
btnContainer.on("touchstart", firstStartAnimation);

btnContainer.on("click", secondSlotStartAnimation);
btnContainer.on("touchstart", secondSlotStartAnimation );

btnContainer.on("click", thirdSlotStartAnimation);
btnContainer.on("touchstart", thirdSlotStartAnimation );



// make-animation for first slot...


let firstSlotAnimation = false;
app.ticker.add(delta => startFirstSlot(delta));

  function startFirstSlot(delta){

    if(firstSlotAnimation){
      
      imagesSprite0.tilePosition.y = positions[randomInt(0, 5)];
    }
    
  }


// make-animation for second-slot...

  let secondSlotAnimation = false;
  app.ticker.add(delta => startSecondSlot(delta));

  function startSecondSlot(delta){

    if(secondSlotAnimation){
      imagesSprite1.tilePosition.y = positions[randomInt(0, 5)];
    }
    
  }


// make-animation for third slot...

  let thirdSlotAnimation = false;
  app.ticker.add(delta => startThirdSlot(delta));

  function startThirdSlot(delta){

    if(thirdSlotAnimation){
      imagesSprite2.tilePosition.y = positions[randomInt(0, 5)];
    }
    
  }



  //  Start first-slot animation///////////////////////

       function firstStartAnimation(){
         firstSlotAnimation = true;
         setTimeout(() => {
          firstSlotAnimation = false;
          // console.log(imagesSprite0.tilePosition.y)
          
        }, 1500);
       }



  // Start second-slot animation//////////////////

      function secondSlotStartAnimation(){
        secondSlotAnimation = true;

        setTimeout(() => {
          secondSlotAnimation = false;
          // console.log(imagesSprite1.tilePosition.y)
          
        }, 2500);
        }



  // Start third-slot animation///////////////////////

      function thirdSlotStartAnimation(){
        thirdSlotAnimation = true;
        btnContainer.interactive = false;
        btnContainer.addChild(disableButton);

        hasMoney -=5;
        moneyText.text = `money: ${hasMoney}`;

        setTimeout(() => {
          thirdSlotAnimation = false;
          
          if(hasMoney >= 5){
            btnContainer.interactive = true;
          btnContainer.removeChild(disableButton)
          }

          

          if(imagesSprite0.tilePosition.y === imagesSprite1.tilePosition.y && imagesSprite1.tilePosition.y === imagesSprite2.tilePosition.y){
            isWin();
          }

          if(imagesSprite0.tilePosition.y === imagesSprite1.tilePosition.y && imagesSprite2.tilePosition.y ===300){
            isWin();
          }

          if(imagesSprite0.tilePosition.y === 300 && imagesSprite1.tilePosition.y === imagesSprite2.tilePosition.y){
            isWin();
          }

          if(imagesSprite0.tilePosition.y === imagesSprite2.tilePosition.y && imagesSprite1.tilePosition.y ===300){
            isWin();
          }

               
        
          function isWin(){
            console.log("!!!!!!!WOOON");
            hasMoney +=40;
            quantityWins +=1;
            moneyText.text = `money: ${hasMoney}`;
            quantityWinsText.text = `wins: ${quantityWins}`;

            app.stage.addChild(youWonContainer);
            setTimeout(() => {
              app.stage.removeChild(youWonContainer)
              
            }, 2000);

          }
          
        }, 3500);
        }



        

        



}
















