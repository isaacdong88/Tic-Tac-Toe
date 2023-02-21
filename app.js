// Create A gameboard array with three separate arrays for 3rows

// let gameBoard = [
//     ['r1c1','r1c2','r1c3'],
//     ['r2c1','r2c2','r2c3'],
//     ['r3c1','r3c2','r3c3']
// ]

let gameBoard = [
    ['','',''],
    ['','',''],
    ['','','']
]

let player1 = true
let player2 = false

console.log(gameBoard)

// Create Player1 and Player2 variables acts as on/off switch between turns

// Create function that will track which spot each player go and determines either to draw a 'X' or an 'O' on the board. The same function will also check each time the 8 winning combinations, need 8 if statements. If there is a combination thats have all three matches declare the winner and end the match.

// 8 if statements, 3 checks horizontal win, 3 vertical win and 2 diagonal wins

//Winning Combinations
//(r1c1,r1c2,r1c3), (r2c1,r2c2,r2c3), (r3c1,r3c2,r3c3)
//(r1c1,r2c1,r3c1), (r1c2,r2c2,r3c2), (r1c3,r2c3,r3c3)
//(r1c1,r2c2,r3c3), (r1c3,r2c2,r3c1)

//When a player goes will grab the innerhtml of that div to determine where to append to gameboard array


//Create a button for play again that resets the game
