// Create A gameboard array with three separate arrays for 3rows

// let gameBoard = [
//     ['r0c0','r0c1','r0c2'],
//     ['r1c0','r1c1','r1c2'],
//     ['r2c0','r2c1','r2c2']
// ]

let gameBoard = [
    ['','X','X'],
    ['X','','X'],
    ['X','X','']
]

// Create Player1 and Player2 variables acts as on/off switch between turns
let player1 = true
let player2 = false
console.log(gameBoard)
console.log(gameBoard[0][1])

// Create function that will track which spot each player go and determines either to draw a 'X' or an 'O' on the board. The same function will also check each time the 8 winning combinations, need 8 if statements. If there is a combination thats have all three matches declare the winner and end the match.

// 8 if statements, 3 checks horizontal win, 3 vertical win and 2 diagonal wins

//Winning Combinations
//(r1c1,r1c2,r1c3), (r2c1,r2c2,r2c3), (r3c1,r3c2,r3c3)
//(r1c1,r2c1,r3c1), (r1c2,r2c2,r3c2), (r1c3,r2c3,r3c3)
//(r1c1,r2c2,r3c3), (r1c3,r2c2,r3c1)

//When a player goes will grab the innerhtml of that div to determine where to append to gameboard array

const gameTracker = () => {
    // Row 1 win check
    if(gameBoard[0][0]===gameBoard[0][1] && gameBoard[0][1]===gameBoard[0][2] && gameBoard[0].includes('') === false) {
        console.log('You Win')
    } else {
        console.log('No Win')
    }
    //Row 2 win check
    if(gameBoard[1][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[1][2] && gameBoard[1].includes('') === false) {
        console.log('You Win')
    } else {
        console.log('No Win')
    }
    //Row 3 win check
    if(gameBoard[2][0]===gameBoard[2][1] && gameBoard[2][1]===gameBoard[2][2] && gameBoard[2].includes('') === false) {
        console.log('You Win')
    } else {
        console.log('No Win')
    }
}
gameTracker()

console.log(gameBoard[0].includes(''))

//Create a button for play again that resets the game
