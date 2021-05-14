class Question{
  constructor() {
    this.name = createInput("Write your name");
    this.answer= createInput("Write your answer")
    this.button = createButton('Submit');
    this.greeting = createElement('h1');
    this.title = createElement('h2');
    this.reset = createButton('Reset');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
  }
  hide(){
    this.button.hide();
    this.name.hide();
    this.title.hide();
  }

  display(){
    this.title.html("MY QUIZ");
    this.title.position(500, 0);

    this.question.html("Question:-  What is the cost of a full NASA space suit? (in dollars)")
    this.question.position(150,80);
    this.option1.html("1:- 9 million")
    this.option1.position(150,100)
    this.option2.html("2:- 12 million")
    this.option2.position(150,120)
    this.option3.html("3:- 10 million")
    this.option3.position(150,140)
    this.option4.html("4:- 15 million")
    this.option4.position(150,160)

    this.name.position(500,250);
    this.answer.position(250,250);
    this.button.position(440,300);
    this.reset.position(900,20);
    
    this.button.mousePressed(()=>{
      this.name.hide();
      this.answer.hide();
      this.button.hide();
      contestant.name = this.name.value();
      contestant.answer = this.answer.value();
      contestantCount+=1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);
    });

    this.reset.mousePressed(()=>{
      contestant.updateCount(0);
      quiz1.update(0);
    });

  }
}
