class Form {
  constructor() {
    this.input=createInput("Name"); 
    this.button=createButton("Play");
    this.greeting=createElement("H3")
  }

  hide(){
    this.input.hide()
    this.button.hide()
    this.greeting.hide()
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide()
      this.button.hide()
      // not form.hide() cause........

      player.name = this.input.value();
      
      playerCount+=1;
      player.index=playerCount //giving the index the value of the count
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name )
      this.greeting.position(130, 160)
    });

  }
}
