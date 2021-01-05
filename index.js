


const app = new PIXI.Application({
    width: 1024, height: 480, backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1,
});

document.body.appendChild(app.view);

const appView = document.body.appendChild(app.view);









PIXI.loader
  .add("bg" , "./images/BG.png")
  .add("imagesSprite0" , "./images/sprite.png")
  // .add("btn", "./images/BTN_Spin.png")
  // .add("btn-dis", "./images/BTN_Spin_d.png")
  // .add("wildSymbol", "./images/SYM1.png")
  // .add("symbol2", "./images/SYM2.png")
  // .add("symbol3", "./images/SYM3.png")
  // .add("symbol4", "./images/SYM4.png")
  // .add("symbol5", "./images/SYM5.png")
  // .add("symbol6", "./images/SYM6.png")
  .load(setup);





function setup() {
  
    let pixiLoader = PIXI.loader.resources ;

    //  Фон stage

  let bg = new PIXI.Sprite(pixiLoader.bg.texture );
  bg.width = 1024;
  bg.height = 480;
  
  app.stage.addChild(bg);

  


  let imagesSprite0 = new PIXI.TilingSprite(pixiLoader.imagesSprite0.texture, 235, 930);
  imagesSprite0.position.x = 70;
  imagesSprite0.tilePosition.y =0;
  imagesSprite0.vx = 0;
  imagesSprite0.vy = 0;

  app.stage.addChild(imagesSprite0);


  app.ticker.add(delta => gameLoop(delta));


  function gameLoop(delta){
    
    imagesSprite0.vy = 5;
    imagesSprite0.tilePosition.y += imagesSprite0.vy;
  }















  // let arr = [];
 




// let wildSymbol = new PIXI.Sprite(pixiLoader.wildSymbol.texture);
// wildSymbol.anchor.set(0.5, 0.5);
// wildSymbol.x = 150;
// wildSymbol.y = appView.height / 6;

// wildSymbol.scale.set(0.7, 0.7);

// app.stage.addChild(wildSymbol);
// arr.push(wildSymbol);




// let symbol2 = new PIXI.TilingSprite(pixiLoader.symbol2.texture, 207, 150);
// symbol2.anchor.set(0.5, 0.5);
// symbol2.x = 150;
// // symbol2.y =appView.height / 2.1;
// symbol2.y =50;
// symbol2.width = 50


// app.stage.addChild(symbol2)
// arr.push(symbol2);




// let symbol3 = new PIXI.Sprite(pixiLoader.symbol3.texture);
// symbol3.anchor.set(0.5, 0.5);
// symbol3.x = 150;
// symbol3.y = appView.height / 1.2;


// app.stage.addChild(symbol3)
// arr.push(symbol3);




// let symbol4 = new PIXI.Sprite(pixiLoader.symbol4.texture);
// symbol4.anchor.set(0.5, 0.5);
// symbol4.x = 150;
// symbol4.y = -60;


// app.stage.addChild(symbol4)
// arr.push(symbol4);


// let symbol5 = new PIXI.Sprite(pixiLoader.symbol5.texture);
// symbol5.anchor.set(0.5, 0.5);
// symbol5.x = 150;
// symbol5.y = -190;

// app.stage.addChild(symbol5)
// arr.push(symbol5);



// app.ticker.add(delta => gameLoop(delta, arr));

// let mainContainer = new PIXI.Container();

// mainContainer.addChild(symbol2);
// mainContainer.addChild(symbol3);
// app.stage.addChild(mainContainer)
// mainContainer.position.x = -20;
// mainContainer.position.y = 0;
// mainContainer.height = 300;

// subContainer = new PIXI.Container();
// subContainer.addChild(mainContainer);

// app.stage.addChild(subContainer);
// subContainer.height = 200;






let animation = true;



      function StopAnimation(){
         animation = false;
        }
        

     

}














