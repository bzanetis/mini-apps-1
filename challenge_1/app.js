console.log("let's party")


//array possibly? updates after each turn
var startBoard = [["", "", ""],[ "", "", ""],["", "", ""]];
var activeBoard = [["", "", ""],[ "", "", ""],["", "", ""]];
var counter = 0;

var resetData = function() {
  startBoard = [];

}

//currentBoard ---> updates each play by .push into inner row array
//check after each push to see if there's a winner
//[row, col] coordinate (nested for loop)



//create a whoseTurn func that alternates between x and o boolean values
 //should iterate < 10x
function whoseTurn() {
  if (counter % 2 === 0) {
    counter++;
    return "X";
  } else {
    counter++;
    return "O";
  }
};

//func that will mark square with an X or O depending on where is clicked and which turn
function markCellOne() {

  if (event.target.innerHTML === "") {
    var player = whoseTurn();
    event.target.innerHTML = player;
    var col = event.target.id;  //index of each row
    var row = event.target.className;  //each row is an inner array of col vals
    activeBoard[row][col] = player;
    checkForWinner(activeBoard);
    //console.log(activeBoard)
    //startBoard[row][col] = event.target.innerHTML;

  }

};


//check board ---> check for horizontal win [0, 0] + [0, 1] + [0, 2] etc..
function checkForWinner (activeBoard) {
  //console.log(activeBoard)
  var col = event.target.id;
  var row = event.target.className;
  var horizPlays = [];
  var vertPlays = [];
  var diagonalPlays = [];


  var winCheckForHorizontal = function(activeBoard) {
//console.log(activeBoard)
    //loop through to get board coords
    for (var i = 0; i < activeBoard.length; i++) {
      for (var j = 0; j < activeBoard[i].length; j++) {

        console.log(activeBoard)
        // console.log(activeBoard[i])

        //check if spot clicked [row, col] = a vert win, if so push X into vertPlays arr
        if (activeBoard.allValuesSame()) {
          return "x wins!";

        };
        // if (([row, col] = ["0", "0"]) || ([row, col] = ["0", "1"]) || ([row, col] = ["0", "2"])) {
        //   return "x wins!"
          // console.log(horizPlays)
        // }
      }
    }

  }

  winCheckForHorizontal(activeBoard);

};

Array.prototype.allValuesSame = function() {
  for(var i = 1; i < this.length; i++){
    if(this[i] !== this[0])
    return false;
    }
    return true;
}




