class Contestant {
    constructor(){
      this.index = null;
     // this.distance = 0;
      this.name = null;
      this.answer = 0;
    }
  
    getCount(){
      var contestantCountRef = database.ref('contestantCount');
      contestantCountRef.on("value",(data)=>{
        contestantCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        contestantCount: count,
      });
    }
  
    update(){
      var contestantIndex = "contestants/contestant" + this.index;
      database.ref(contestantIndex).set({
        name:this.name,
        //distance:this.distance
        answer:this.answer
      });
    }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  