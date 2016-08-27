"use strict";
var MAX_NUMBER = 10;
var button = [];

//******************************
// M O D E L
//******************************
var excercise = {
    // create new excercise
    createNew : function(){
      this.number1 = Math.floor(Math.random() * (MAX_NUMBER + 1)); // 0 - 10
      this.number2 = Math.floor(Math.random() * (MAX_NUMBER + 1 - excercise.number1));
      this.result = excercise.number1 + excercise.number2;
    },

    isRight : function(number){
      return number === this.result;
    }
};

//******************************
// V I E W
//******************************
var view = {
    getIds : function(){
      this.labelNumber1 = document.getElementById("labelNumber1");
      this.labelOperator = document.getElementById("labelOperator");
      this.labelNumber2 = document.getElementById("labelNumber2");
      this.labelResult = document.getElementById("labelResult");
      this.labelTruth = document.getElementById("labelTruth");
    },

    // set number shown in left label
    setNumber1 : function(number){
      this.labelNumber1.innerHTML = number;
    },

    // set number shown in right label
    setNumber2 : function(number){
      this.labelNumber2.innerHTML = number;
    },

    // set operator shown in label
    setOperator : function(operator){
      this.labelOperator.innerHTML = operator;
    },

    // set result shown in label
    setResult : function(number){
      this.labelResult.innerHTML = number;
    },

    showExercise : function(exc){
      this.setNumber1(exc.number1);
      this.setNumber2(exc.number2);
      this.setResult("?");
    },

    setTrue : function(){
      this.labelTruth.innerHTML = "RICHTIG!";
      this.labelTruth.className = "true";
    },

    setFalse : function(){
      this.labelTruth.innerHTML = "FALSCH!";
      this.labelTruth.className = "false";
    },

    // neither true nor false
    setNeitherNor : function() {
      this.labelTruth.innerHTML = "";
    }
};

//******************************
// M A I N
//******************************
document.addEventListener("DOMContentLoaded", function(event) {
  // labels for output
  view.getIds();

  // buttons + click-listener
  for(var i = 0; i <= MAX_NUMBER; i++){
    button[i] = document.getElementById("button" + i);
    button[i].addEventListener("click", buttonClicked);
  }

  var buttonNew = document.getElementById("buttonNew");
  buttonNew.addEventListener("click", buttonNewClicked);

  // create new Excercise with random numbers
  excercise.createNew();

  // show excercise
  view.showExercise(excercise);
});

//******************************
// C O N T R O L L E R
//******************************
// click-listener for all number-buttons
var buttonClicked = function(event){
    // get index of clicked button
    var indexClicked = -1;
    for(var i=0; i<button.length; i++){
      if(this === button[i]){
        indexClicked = i;
      }
    }

    // show result choosen by the user
    view.setResult(indexClicked);

    // right or false?
    if(excercise.isRight(indexClicked)){
      view.setTrue();
    }else{
      view.setFalse();
    }
};

// click-listener for new-button
var buttonNewClicked = function(event){
  excercise.createNew();
  view.showExercise(excercise);
  view.setNeitherNor();
};
