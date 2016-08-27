"use strict";
var MAX_NUMBER = 10;
var button = [];

//******************************
// M O D E L
//******************************
var excercise = {};

// create new excercise
excercise.createNew = function(){
  excercise.number1 = Math.floor(Math.random() * (MAX_NUMBER + 1)); // 0 - 10
  excercise.number2 = Math.floor(Math.random() * (MAX_NUMBER + 1 - excercise.number1));
  excercise.result = excercise.number1 + excercise.number2;
};

excercise.isRight = function(number){
  return number === excercise.result;
};

//******************************
// V I E W
//******************************
var view = {};

view.getIds = function(){
  view.labelNumber1 = document.getElementById("labelNumber1");
  view.labelOperator = document.getElementById("labelOperator");
  view.labelNumber2 = document.getElementById("labelNumber2");
  view.labelResult = document.getElementById("labelResult");
  view.labelTruth = document.getElementById("labelTruth");
};

// set number shown in left label
view.setNumber1 = function(number){
  view.labelNumber1.innerHTML = number;
};

// set number shown in right label
view.setNumber2 = function(number){
  view.labelNumber2.innerHTML = number;
};

// set operator shown in label
view.setOperator = function(operator){
  view.labelOperator.innerHTML = operator;
};

// set result shown in label
view.setResult = function(number){
  view.labelResult.innerHTML = number;
};

view.showExercise = function(exc){
  view.setNumber1(exc.number1);
  view.setNumber2(exc.number2);
  view.setResult('?');
};

view.setTrue = function(){
  view.labelTruth.innerHTML = "RICHTIG!";
  view.labelTruth.className = "true";
};

view.setFalse = function(){
  view.labelTruth.innerHTML = "FALSCH!";
  view.labelTruth.className = "false";
};

// neither true nor false
view.setNeitherNor = function() {
  view.labelTruth.innerHTML = "";
};

//******************************
// M A I N
//******************************
document.addEventListener("DOMContentLoaded", function(event) {
  // labels for output
  view.getIds();

  // buttons + click-listener
  for(var i = 0; i<=MAX_NUMBER; i++){
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
