

// 1) Define the required variables used to track the state of the game

// 2) Store cached element references

// 3) Upon loading, the game state should be initialized, and a function should be 
//    called to render this game state

// 4) The state of the game should be rendered to the user

// 5) Define the required constants

// 6) Handle a player clicking a square with a `handleClick` function

// 7) Create Reset functionality









/*-------------------------------- Constants --------------------------------*/

const winningCombos = [
    [0, 1, 2]
    [3, 4, 5]
    [6, 7, 8]
    [0, 3, 6]
    [1, 4, 7]
    [2, 5, 8]
    [0, 4, 8]
    [2, 4, 6]

]




/*---------------------------- Variables (state) ----------------------------*/

let board 
let turn 
let winner 
let tie
 


/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')
const messageEl = document.getElementById('#message')
const resetBtn = document.getElementById('#reset')

/*----------------------------- Event Listeners -----------------------------*/



/*-------------------------------- Functions --------------------------------*/

init()

function init() {
    board = [null, null, null, null, null,null, null, null,null ];
    turn = 1
    winner = false
    tie = false
    render()
    console.log(init)
}


function render() {
    updateBoard()
    updateMessage()
}




function updateBoard() {
    // board.forEach((element, idx) => {
    //     if (element === 1)

    // }) 
    

}



function updateMessage() {
    if (winner === false && tie === false)
         msg = {
    else if (winner === false && tie === true) }
        msg = 'You Tied' {
    else 
        msg = 

}

}
function handleClick(evt) {

}



function checkForTie() {

}


function checkForWinner() {

}

function switchPlayerTurn() {

}
















c









