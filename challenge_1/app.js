console.log("let's party")


// my_element.addEventListener('click', function (e) {
//   console.log(this.className)           // logs the className of my_element
//   console.log(e.currentTarget === this) // logs `true`

// })

//array possibly? updates after each turn
var board = [];

//set onClick val by determining if even or odd -- or boolean?
var X = true;
var O = false;

//need an onClick function that adds an X for each time a td is clicked
//
function markCellOne() {
  document.getElementById("t1").innerHTML = "X";

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

}
