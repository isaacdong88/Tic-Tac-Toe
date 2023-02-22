// Create A gameboard array with three separate arrays for 3rows

// let gameBoard = [
//     ['r0c0','r0c1','r0c2'],
//     ['r1c0','r1c1','r1c2'],
//     ['r2c0','r2c1','r2c2']
// ]

let gameBoard = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
]

// Create Player1 and Player2 variables acts as on/off switch between turns
let player1 = true
let player2 = false
console.log(gameBoard)
console.log(gameBoard[0][1])
let winner = ''

// Create functions that will track which spot each player go and determines either to draw a 'X' or an 'O' on the board. Will need one function for each spot

//Create function that will check the gameboard for the 8 winning combinations, need 8 if statements. If there is a combination thats have all three matches declare the winner and end the match. Another condition set to check for ties

// 8 if statements, 3 checks horizontal win, 3 vertical win and 2 diagonal wins

//Winning Combinations
//(r1c1,r1c2,r1c3), (r2c1,r2c2,r2c3), (r3c1,r3c2,r3c3)
//(r1c1,r2c1,r3c1), (r1c2,r2c2,r3c2), (r1c3,r2c3,r3c3)
//(r1c1,r2c2,r3c3), (r1c3,r2c2,r3c1)

//A condition that will only allow player to place on empty spot

//When a player goes will grab the innerhtml of that div to determine where to append to gameboard array

const gameTracker = () => {
    // Row 1 win check
    if(gameBoard[0][0]===gameBoard[0][1] && gameBoard[0][1]===gameBoard[0][2] && gameBoard[0].includes(' ') === false) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    //Row 2 win check
    if(gameBoard[1][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[1][2] && gameBoard[1].includes(' ') === false) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    //Row 3 win check
    if(gameBoard[2][0]===gameBoard[2][1] && gameBoard[2][1]===gameBoard[2][2] && gameBoard[2].includes(' ') === false) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    //Column 1 win check
    if(gameBoard[0][0]===gameBoard[1][0] && gameBoard[1][0]===gameBoard[2][0] && gameBoard[0][0].includes(' ') === false ) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    
    //Column 2 win check
    if(gameBoard[0][1]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][1] && gameBoard[0][1].includes(' ') === false ) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    //Column 3 win check
    if(gameBoard[0][2]===gameBoard[1][2] && gameBoard[1][2]===gameBoard[2][2] && gameBoard[0][2].includes(' ') === false ) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    //Diagonal win check '\'
    if(gameBoard[0][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][2] && gameBoard[0][0].includes(' ') === false ) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    //Diagonal win check '/'
    if(gameBoard[0][2]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][0] && gameBoard[0][2].includes(' ') === false ) {
        console.log('You Win')
        winner = 'player'
    } else {
        console.log('No Win')
    }
    //check for tie
    if (gameBoard[0].includes(' ')===false && gameBoard[1].includes(' ')===false && gameBoard[2].includes(' ')===false && winner==='') {
        console.log('Tie')
    }
}
// gameTracker()

//Function for spot R1C1 determines either to place X or O and append to gameboard array accordingly
const r1c1 = () => {
    if(gameBoard[0][0]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r1c1')
            letterX.innerHTML = "X"
            gameBoard[0][0] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r1c1')
            letterO.innerHTML = "O"
            gameBoard[0][0] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R1C2 determines either to place X or O and append to gameboard array accordingly
const r1c2 = () => {
    if(gameBoard[0][1]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r1c2')
            letterX.innerHTML = "X"
            gameBoard[0][1] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r1c2')
            letterO.innerHTML = "O"
            gameBoard[0][1] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R1C3 determines either to place X or O and append to gameboard array accordingly
const r1c3 = () => {
    if(gameBoard[0][2]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r1c3')
            letterX.innerHTML = "X"
            gameBoard[0][2] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r1c3')
            letterO.innerHTML = "O"
            gameBoard[0][2] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R2C1 determines either to place X or O and append to gameboard array accordingly
const r2c1 = () => {
    if(gameBoard[1][0]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r2c1')
            letterX.innerHTML = "X"
            gameBoard[1][0] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r2c1')
            letterO.innerHTML = "O"
            gameBoard[1][0] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R2C2 determines either to place X or O and append to gameboard array accordingly
const r2c2 = () => {
    if(gameBoard[1][1]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r2c2')
            letterX.innerHTML = "X"
            gameBoard[1][1] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r2c2')
            letterO.innerHTML = "O"
            gameBoard[1][1] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R2C3 determines either to place X or O and append to gameboard array accordingly
const r2c3 = () => {
    if(gameBoard[1][2]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r2c3')
            letterX.innerHTML = "X"
            gameBoard[1][2] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r2c3')
            letterO.innerHTML = "O"
            gameBoard[1][2] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R3C1 determines either to place X or O and append to gameboard array accordingly
const r3c1 = () => {
    if(gameBoard[2][0]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r3c1')
            letterX.innerHTML = "X"
            gameBoard[2][0] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r3c1')
            letterO.innerHTML = "O"
            gameBoard[2][0] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R3C2 determines either to place X or O and append to gameboard array accordingly
const r3c2 = () => {
    if(gameBoard[2][1]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r3c2')
            letterX.innerHTML = "X"
            gameBoard[2][1] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r3c2')
            letterO.innerHTML = "O"
            gameBoard[2][1] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Function for spot R3C3 determines either to place X or O and append to gameboard array accordingly
const r3c3 = () => {
    if(gameBoard[2][2]===" ") {
        if(player1) {
            let letterX = document.querySelector('.r3c3')
            letterX.innerHTML = "X"
            gameBoard[2][2] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
        } else {
            let letterO = document.querySelector('.r3c3')
            letterO.innerHTML = "O"
            gameBoard[2][2] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
        }
        gameTracker()
    }
}
//Create a button for play again that resets the game
