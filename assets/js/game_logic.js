
//GAME LOGIC
let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning_blocks')

const O_TEXT = "O"
const X_TEXT = "X"
let currentPlayer = X_TEXT
let spaces = Array(9).fill(null)

//Start game and boxes function
const startGame = () => {
  boxes.forEach(box => box.addEventListener('click', boxClicked))
}

//Start game and boxes function
/*const stopGame = () => {
  boxes = null
}
*/
function boxClicked(e) {

  const id = e.target.id

  if(!spaces[id]) {
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

if (playerHasWon() !==false) {
  let winning_blocks = playerHasWon()
  setTimeout(()=> {
    playerText = alert(`${currentPlayer} Ha vinto!`)
  },200)

  winning_blocks.map( box => boxes[box].style.backgroundColor=winnerIndicator)
  return
}
    currentPlayer = currentPlayer == X_TEXT ? O_TEXT : X_TEXT
  }
}

//Winning combos
const winningCombos = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

function playerHasWon() {
  for (var condition of winningCombos) {
    let [a, b, c] = condition

    if (spaces[a] && (spaces[a] == spaces[b] && spaces[a] == spaces[c])) {
      return[a,b,c]
    }
  }
  return false
}

//Restart button function
restartBtn.addEventListener('click', restart)

function restart() {
  spaces.fill(null)

  boxes.forEach(box => {
    box.innerText = ''
    box.style.backgroundColor = ''
  })

  playerText = 'Tic Tac Toe'

  currentPlayer = X_TEXT
}

startGame()
