

let gameBoard = (function(){

    let gridItem = document.querySelectorAll('.grid');
    let winElement = document.querySelector('.win')

    let counter = 0
    let playerOneTurn = true;
    let playerTwoTurn = false;

    let playerOneArray = [];
    let playerTwoArray = [];

    const winningSequences = 
    [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]


    const winnerCheck = ()=> 
        winningSequences.forEach(item => {
            if (item.every(elem => playerOneArray.includes(elem))){winElement.textContent = 'Player One Wins'}
            else if (item.every(elem => playerTwoArray.includes(elem))) {winElement.textContent = 'Player Two Wins'}
            

        })

    const turn = () =>{
        console.log(winningSequences)
        gridItem.forEach(item =>{item.addEventListener('click', () =>{
      
            if (playerOneTurn === true && item.textContent === ''){
                item.textContent = 'X';
                let playerOneData = item.getAttribute('data-number')
                playerOneArray.push(parseInt(playerOneData));
                winnerCheck()
                console.log(playerOneArray)
                playerOneTurn = false;
                playerTwoTurn = true;
                
            }

            else if (playerTwoTurn === true && item.textContent === ''){
                item.textContent = 'O';
                let PlayerTwoData = item.getAttribute('data-number')
                playerTwoArray.push(parseInt(PlayerTwoData))
                winnerCheck()
                console.log(playerTwoArray)
                playerOneTurn = true;
                playerTwoTurn = false;

        }
        })})
    }


    return {turn}
})()


gameBoard.turn()

