console.log("let's party")


//array possibly? updates after each turn
var startBoard = [["", "", ""],[ "", "", ""],["", "", ""]];

//currentBoard ---> updates each play by .push into inner row array
//check after each push to see if there's a winner
//[row, col] coordinate (nested for loop)


var counter = 0;


//create a whoseTurn func that alternates between x and o boolean values
 //should iterate < 10x
function whoseTurn() {
  if (counter % 2 === 0) {
    counter++;
    return "X";
  } else {
    counter++;
    return "0";
  }
};


//truth check on if it's empty
//when below is run --> need to set the [row, col] in board array
//
function markCellOne() {

  if (event.target.innerHTML === "") {
    event.target.innerHTML = whoseTurn();
    var col = event.target.id;  //index of each row
    var row = event.target.className;  //each row is an inner array of col vals
    console.log(row, col)
    updateBoard(row, col);
  };
};

// horiz --> check all within target row
//vertical --> check all rows at index = col
//func to update board
function updateBoard(row, col) {
  if (counter % 2 === 0) {
    startBoard[row][col] = "X";
  } else {
    startBoard[row][col] = "O";
  };
  console.log(startBoard)
};



//func to check board


