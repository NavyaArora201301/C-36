class Game {
  constructor(){
    //no need of constructor in Game
    //we need only gameState  
  }
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",(data)=>{
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef=await database.ref("playerCount").once("value") //.once for starting only
      if(playerCountRef.exists()){//exists means to stop the gameState from changing if players=0
   playerCount=playerCountRef.val(); // to fetch the value from the firebase

   player.getCount();    
  }
      
      form = new Form()
      form.display();
    }
  }
 play(){
   form.hide()
   textSize(27);
   text("Game Is Starting", 120,100);
   Player.getPlayerInfo();

   if(allPlayers!=undefined){ 
    var displayPosition=130;

    for(var plr in allPlayers){ //storing the value of allPlayers in variable plr n the loop will work till it has worked on all the players
    if (plr==="player"+player.index){ //it will work different for different browsers
     fill("red")
    }
    else{
      fill("black")
    }
      displayPosition+=20;
      textSize(18);
      text(allPlayers[plr].name+":"+allPlayers[plr].distance,120,displayPosition)
    }
    }
     if(keyDown(UP_ARROW)&&player.index!=null){
      player.distance+=50;
      player.update();
     }
 }

}
