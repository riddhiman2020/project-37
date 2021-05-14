var canvas;
var gameState=0;
var contestantCount, database, quiz1, question, contestant;
var allPlayers;

function setup(){
  canvas = createCanvas(1000,400);
  database = firebase.database();
  quiz1 = new quiz();
  quiz1.getState();
  quiz1.start();
}


function draw(){
  background("pink");
    if(contestantCount === 4){
      quiz1.update(1);
    }
    if(gameState === 1){
      clear();
      quiz1.play();
    }
    if(gameState === 2){
      quiz1.end();
    }
  }
