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
  }
}

function markCellTwo() {
  document.getElementById("t2").innerHTML = "X";

}
function markCellThree() {
  document.getElementById("t3").innerHTML = "X";

}

function markCellFour() {
  document.getElementById("t4").innerHTML = "X";

}

function markCellFive() {
  document.getElementById("t5").innerHTML = "X";

}

function markCellSix() {
  document.getElementById("t6").innerHTML = "X";

}

function markCellSeven() {
  document.getElementById("t7").innerHTML = "X";

}

function markCellNine() {
  document.getElementById("t8").innerHTML = "X";

};






