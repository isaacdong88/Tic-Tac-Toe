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
//Keep track how many games each player won for to 2 matchs is the winner
let player1Win = 0
let player2Win = 0
//Keep track of rounds played
let rounds = 0
//Keep track of the winner
let winner = ''
//Keep tracks who went first, so each round alternates
let wentFirst = ''

// Create functions that will track which spot each player go and determines either to draw a 'X' or an 'O' on the board. Will need one function for each spot

//Create function that will check the gameboard for the 8 winning combinations, need 8 if statements. If there is a combination thats have all three matches declare the winner and end the match. Another condition set to check for ties

// 8 if statements, 3 checks horizontal win, 3 vertical win and 2 diagonal wins

//Winning Combinations
//(r1c1,r1c2,r1c3), (r2c1,r2c2,r2c3), (r3c1,r3c2,r3c3)
//(r1c1,r2c1,r3c1), (r1c2,r2c2,r3c2), (r1c3,r2c3,r3c3)
//(r1c1,r2c2,r3c3), (r1c3,r2c2,r3c1)

//Query Select the scoreboards divs to append scores to the display
const scoreX = document.querySelector('.scoreX')
const scoreO = document.querySelector('.scoreO')
//Query Select the next round button, will also function as play again button
const nextBtn = document.querySelector('.nextBtn')
//Query Select the name div show style will change will its the players turn
const nameX = document.querySelector('.nameX')
const nameO = document.querySelector('.nameO')
nameX.style.backgroundColor = 'green'
//Query select the score board so can update message to show wins and winner
const message = document.querySelector('.scores')

const gameTracker = () => {
    // Row 1 win check
    if(gameBoard[0][0]===gameBoard[0][1] && gameBoard[0][1]===gameBoard[0][2] && gameBoard[0].includes(' ') === false) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //Row 2 win check
    else if(gameBoard[1][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[1][2] && gameBoard[1].includes(' ') === false) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //Row 3 win check
    else if(gameBoard[2][0]===gameBoard[2][1] && gameBoard[2][1]===gameBoard[2][2] && gameBoard[2].includes(' ') === false) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //Column 1 win check
    else if(gameBoard[0][0]===gameBoard[1][0] && gameBoard[1][0]===gameBoard[2][0] && gameBoard[0][0].includes(' ') === false ) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //Column 2 win check
    else if(gameBoard[0][1]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][1] && gameBoard[0][1].includes(' ') === false ) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //Column 3 win check
    else if(gameBoard[0][2]===gameBoard[1][2] && gameBoard[1][2]===gameBoard[2][2] && gameBoard[0][2].includes(' ') === false ) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //Diagonal win check '\'
    else if(gameBoard[0][0]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][2] && gameBoard[0][0].includes(' ') === false ) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //Diagonal win check '/'
    else if(gameBoard[0][2]===gameBoard[1][1] && gameBoard[1][1]===gameBoard[2][0] && gameBoard[0][2].includes(' ') === false ) {
        if(player1===false) {
            winner = 'Player X'
            player1Win += 1
            rounds += 1
            scoreX.innerHTML = player1Win
            message.innerHTML = `${winner} wins round ${rounds}`
        } else {
            winner = 'Player O'
            player2Win += 1
            rounds += 1
            scoreO.innerHTML = player2Win
            message.innerHTML = `${winner} wins round ${rounds}`
        }
    }
    //check for tie
    else if (gameBoard[0].includes(' ')===false && gameBoard[1].includes(' ')===false && gameBoard[2].includes(' ')===false && winner==='') {
        winner = 'Tie'
        rounds += 1
        message.innerHTML = `Round ${rounds} ${winner}`
    }
    //Condition to check player to first reach 2 wins, change next button to play again starts whole new game
    if(player1Win===2 || player2Win===2) {
        nextBtn.innerHTML = 'Play Again'
        message.innerHTML = `${winner} is the Winner!`
    }
}

//Game reset function, resets values. Onclick event on next round button
const newRound = () => {
    gameBoard = [
    [' ',' ',' '],
    [' ',' ',' '],
    [' ',' ',' ']
    ]
    winner = ''
    message.innerHTML = 'Scores'
    let r1c1 = document.querySelector('.r1c1')
    r1c1.innerHTML = ''
    let r1c2 = document.querySelector('.r1c2')
    r1c2.innerHTML = ''
    let r1c3 = document.querySelector('.r1c3')
    r1c3.innerHTML = ''
    let r2c1 = document.querySelector('.r2c1')
    r2c1.innerHTML = ''
    let r2c2 = document.querySelector('.r2c2')
    r2c2.innerHTML = ''
    let r2c3 = document.querySelector('.r2c3')
    r2c3.innerHTML = ''
    let r3c1 = document.querySelector('.r3c1')
    r3c1.innerHTML = ''
    let r3c2 = document.querySelector('.r3c2')
    r3c2.innerHTML = ''
    let r3c3 = document.querySelector('.r3c3')
    r3c3.innerHTML = ''
    //Condition checks who went first to set up next match so the other player starts
    if(wentFirst==="X") {
        player1 = false
        player2 = true
        wentFirst = ''
        nameX.style.backgroundColor = ''
        nameO.style.backgroundColor = 'green'
    } else if (wentFirst==="O") {
        player1 = true
        player2 = false
        wentFirst = ''
        nameX.style.backgroundColor = 'green'
        nameO.style.backgroundColor = ''
    }
    wentFirst = ''
    //Condition resets the whole match after one player wins the match winning two rounds first
    if(nextBtn.innerHTML==='Play Again'){
        player1Win = 0
        player2Win = 0
        rounds = 0
        scoreX.innerHTML = 0
        scoreO.innerHTML = 0
        nextBtn.innerHTML = 'Next Round'
    }
}

//Function for spot R1C1 determines either to place X or O and append to gameboard array accordingly
const r1c1 = () => {
    //A condition that will only allow player to place on empty spot
    if(gameBoard[0][0]===" " && winner==="") {
        if(player1) {
            //When a player goes will grab the innerhtml of that div to determine where to append to gameboard array
            let letterX = document.querySelector('.r1c1')
            letterX.innerHTML = "X"
            gameBoard[0][0] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            //Condtion to keep track who went first
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r1c1')
            letterO.innerHTML = "O"
            gameBoard[0][0] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = '' 
            if(wentFirst==="") {
                wentFirst = "O"
            }
        }
        gameTracker()
    }
}
//Function for spot R1C2 determines either to place X or O and append to gameboard array accordingly
const r1c2 = () => {
    if(gameBoard[0][1]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r1c2')
            letterX.innerHTML = "X"
            gameBoard[0][1] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r1c2')
            letterO.innerHTML = "O"
            gameBoard[0][1] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = '' 
            if(wentFirst==="") {
                wentFirst = "O"
            } 
        }
        gameTracker()
    }
}
//Function for spot R1C3 determines either to place X or O and append to gameboard array accordingly
const r1c3 = () => {
    if(gameBoard[0][2]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r1c3')
            letterX.innerHTML = "X"
            gameBoard[0][2] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r1c3')
            letterO.innerHTML = "O"
            gameBoard[0][2] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = '' 
            if(wentFirst==="") {
                wentFirst = "O"
            } 
        }
        gameTracker()
    }
}
//Function for spot R2C1 determines either to place X or O and append to gameboard array accordingly
const r2c1 = () => {
    if(gameBoard[1][0]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r2c1')
            letterX.innerHTML = "X"
            gameBoard[1][0] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r2c1')
            letterO.innerHTML = "O"
            gameBoard[1][0] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = ''  
            if(wentFirst==="") {
                wentFirst = "O"
            }
        }
        gameTracker()
    }
}
//Function for spot R2C2 determines either to place X or O and append to gameboard array accordingly
const r2c2 = () => {
    if(gameBoard[1][1]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r2c2')
            letterX.innerHTML = "X"
            gameBoard[1][1] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r2c2')
            letterO.innerHTML = "O"
            gameBoard[1][1] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = '' 
            if(wentFirst==="") {
                wentFirst = "O"
            }
        }
        gameTracker()
    }
}
//Function for spot R2C3 determines either to place X or O and append to gameboard array accordingly
const r2c3 = () => {
    if(gameBoard[1][2]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r2c3')
            letterX.innerHTML = "X"
            gameBoard[1][2] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r2c3')
            letterO.innerHTML = "O"
            gameBoard[1][2] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = '' 
            if(wentFirst==="") {
                wentFirst = "O"
            }
        }
        gameTracker()
    }
}
//Function for spot R3C1 determines either to place X or O and append to gameboard array accordingly
const r3c1 = () => {
    if(gameBoard[2][0]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r3c1')
            letterX.innerHTML = "X"
            gameBoard[2][0] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r3c1')
            letterO.innerHTML = "O"
            gameBoard[2][0] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = ''  
            if(wentFirst==="") {
                wentFirst = "O"
            }
        }
        gameTracker()
    }
}
//Function for spot R3C2 determines either to place X or O and append to gameboard array accordingly
const r3c2 = () => {
    if(gameBoard[2][1]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r3c2')
            letterX.innerHTML = "X"
            gameBoard[2][1] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r3c2')
            letterO.innerHTML = "O"
            gameBoard[2][1] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = ''  
            if(wentFirst==="") {
                wentFirst = "O"
            }
        }
        gameTracker()
    }
}
//Function for spot R3C3 determines either to place X or O and append to gameboard array accordingly
const r3c3 = () => {
    if(gameBoard[2][2]===" " && winner==="") {
        if(player1) {
            let letterX = document.querySelector('.r3c3')
            letterX.innerHTML = "X"
            gameBoard[2][2] = "X"
            console.log(gameBoard)
            player1 = false
            player2 = true
            nameX.style.backgroundColor = ''
            nameO.style.backgroundColor = 'green'
            if(wentFirst==="") {
                wentFirst = "X"
            }
        } else {
            let letterO = document.querySelector('.r3c3')
            letterO.innerHTML = "O"
            gameBoard[2][2] = "O"
            console.log(gameBoard)
            player1 = true
            player2 = false 
            nameX.style.backgroundColor = 'green'
            nameO.style.backgroundColor = '' 
            if(wentFirst==="") {
                wentFirst = "O"
            }
        }
        gameTracker()
    }
}
