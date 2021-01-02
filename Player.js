class Player {
  constructor(){
    this.index=null;
    this.distance=0;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",(data)=>{
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index; //to make use of variables created inside the crunstructor 
    database.ref(playerIndex).set({
      name:this.name, 
      distance:this.distance
    });
  }

  //special func. will hv a complete detail of the players
  //static- will stay there/fixed

  static getPlayerInfo(){
   var playerInfoRef=database.ref("players");
   playerInfoRef.on("value",(data)=>{
    allPlayers=data.val()

   })
  }
}
