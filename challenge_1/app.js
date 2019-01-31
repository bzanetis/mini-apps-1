console.log("let's party")


//array possibly? updates after each turn
var board = ["p", "p", "p", "p", "p", "p", "p", "p", "p"];

var counter = 0;


//create a whoseTurn func that alternates between x and o boolean values
 //should iterate < 10x
function whoseTurn() {
  if (counter % 2 === 0) {
    counter++;
    return "O";
  } else {
    counter++;
    return "X";
  }
};


//truth check on if it's empty
//need an onClick function that adds an X for each time a td is clicked
//
function markCellOne() {
  console.log(document.getElementById("t1").innerHTML);
  if (document.getElementById("t1").innerHTML === "") {
    document.getElementById("t1").innerHTML = whoseTurn();
  };
};

function markCellTwo() {
  if (document.getElementById("t2").innerHTML === "") {
    document.getElementById("t2").innerHTML = whoseTurn();
  };
};

function markCellThree() {
  if (document.getElementById("t3").innerHTML === "") {
    document.getElementById("t3").innerHTML = whoseTurn();
  };
};

function markCellFour() {
  if (document.getElementById("t4").innerHTML === "") {
    document.getElementById("t4").innerHTML = whoseTurn();
  };
};

function markCellFive() {
  if (document.getElementById("t5").innerHTML === "") {
    document.getElementById("t5").innerHTML = whoseTurn();
  };
};

function markCellSix() {
  if (document.getElementById("t6").innerHTML === "") {
    document.getElementById("t6").innerHTML = whoseTurn();
  };
};

function markCellSeven() {
  if (document.getElementById("t7").innerHTML === "") {
  document.getElementById("t7").innerHTML = whoseTurn();
  };
};

function markCellEight() {
  if (document.getElementById("t8").innerHTML === "") {
    document.getElementById("t8").innerHTML = whoseTurn();
  };
};

function markCellNine() {
  if (document.getElementById("t9").innerHTML === "") {
    document.getElementById("t9").innerHTML = whoseTurn();
  };
};





