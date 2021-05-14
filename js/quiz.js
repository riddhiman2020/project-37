class quiz {
    constructor(){
  
    }
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
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
          contestant=new Contestant();
          // playerCountRef
          var contestantCountRef= await database.ref("contestantCount").once("value")
          if(contestantCountRef.exists()){
            contestantCount = contestantCountRef.val()
            contestant.getCount();
          }
          
          question = new Question ()
          question .display();
        }
    }
    play(){
      question.hide();
      background("yellow")
      fill(0)
      textSize(25)
      text("RESULT OF THE QUIZ",340,50)
      text("===================",320,65)

      Contestant.getPlayerInfo();
      if(allPlayers !== undefined){
        var y=230;
        fill("blue")
        textSize(25)
        text("NOTE: Contestant who answered correct are highlighted in green color!",130,230)


      for(var plr in allPlayers){

       var correctans="2";
       if(correctans===allPlayers[plr].answer)
         fill ("green")
       else
         fill ("red");

         y+=30
         textSize(20)
         text(allPlayers[plr].name + ': ' + allPlayers[plr].answer,250,y)
      }
    }
  }

}
    