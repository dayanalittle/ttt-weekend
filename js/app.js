

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
    [0, 1, 2], 
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]




/*---------------------------- Variables (state) ----------------------------*/

let board
let turn
let winner
let tie



/*------------------------ Cached Element References ------------------------*/

const squareEls = document.querySelectorAll('.sqr')

const messageEl = document.getElementById('message')

const gameBoard = document.querySelector('.board')

// const resetBtn = document.getElementById('#reset')

/*----------------------------- Event Listeners -----------------------------*/


squareEls.forEach((element) => {
    element.addEventListener("click", (event) => {
        handleClick(event)
    })
})



/*-------------------------------- Functions --------------------------------*/

init()

function init() {
    board = [null, null, null, null, null, null, null, null, null];
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
    board.forEach((element, idx) => {
        if (element === 1) {
            squareEls[idx].textContent = "X"
        } else if (element === -1) {
            squareEls[idx].textContent = "O"
        } else {
            squareEls[idx].textContent = ""
        }
    })
}



function updateMessage() {
    if (winner === false && tie === false) {

        if(turn === 1){
            messageEl.textContent = "X's" +" turn"
        }else{
            messageEl.textContent = "O's" +" turn"
        }

    } else if (winner === false && tie === true) {
        messageEl.textContent = "Yall's Tied"
    } else {
        messageEl.textContent = "Winner,Winner, Chicken Dinner!"

    }


}





[1,2,3,4] //length is 4, but the index ends at 3
function handleClick(evt) {
    const sqIdx = parseInt(evt.target.id.slice(evt.target.id.length - 1))
    console.log(evt.target.id[evt.target.id.length - 1] )
    console.log(sqIdx)
    if(board[sqIdx] || winner === true){ // if 1 or -1 its true, if null false
        return;
    }

    placePiece(sqIdx)
    checkForTie()
    checkForWinner()
    switchPlayerTurn()

    render()
}


function placePiece(index){
    board[index] = turn
}



function checkForTie() {
    for(let i = 0;  i < board.length; i++){
        if(board[i] === null){
            return;
        }
    }
    tie = true
}


function checkForWinner() {
    for(let i = 0; i < winningCombos.length; i++){
        let total = 0
        winningCombos[i].forEach(element => {
            total += board[element]
        })
        total = Math.abs(total)
        if(total === 3){
            winner = true
        }
    }
}

function switchPlayerTurn() {
    if(winner === true){
        return;
    }

    turn *= -1
}

























