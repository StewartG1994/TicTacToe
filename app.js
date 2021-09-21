const player = (name)=>{
    return {name}
}

let gameBoard = (function(){
 
    let gridItem = document.querySelectorAll('.grid');
    let winElement = document.querySelector('.win');
    let restartElem  =document.querySelector('.restart')

    let counter = 0;
    let playerOneTurn = true;
    let playerTwoTurn = false;
    let playerOne = null;
    let playerTwo = null;
    let playerOneWin = null;
    let playerTwoWin = null;

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

    const playGame = () =>  {
        let playerOneId = document.querySelector('.p1Name');
        let playerTwoId = document.querySelector('.p2Name');
        let start = document.querySelector('.start');
        
        start.addEventListener('click', () =>{
           playerOne = player(playerOneId.value);
           playerTwo = player(playerTwoId.value);
           winElement.textContent = (playerOne.name + " make your move")
           turn()
        })
    }
    
    const pReload = () =>{

        restartElem.addEventListener('click', ()=> {
            location.reload();
            return false;

          })      
    }  

    const winnerCheck = ()=> 
        winningSequences.forEach(item => {
       
            if (item.every(elem => playerOneArray.includes(elem))){winElement.textContent = playerOne.name + ' wins'; playerOneWin = true; counter++}
            else if (item.every(elem => playerTwoArray.includes(elem))) {winElement.textContent = playerTwo.name + ' wins'; playerTwoWin = true; counter++}
            else if (counter === 9 && playerOneWin === null && playerTwoWin === null) {winElement.textContent = 'Draw'}
        })

    const turn = () =>{

        gridItem.forEach(item =>{item.addEventListener('click', () =>{
    
             if (playerOneTurn === true && item.textContent === '' && playerOneWin === null & playerTwoWin === null){
                item.textContent = 'X';
                let playerOneData = item.getAttribute('data-number')
                playerOneArray.push(parseInt(playerOneData));
                winElement.textContent = playerTwo.name + ' make your move';
                winnerCheck()        
                playerOneTurn = false;
                playerTwoTurn = true;   
                
            }

            else if (playerTwoTurn === true && item.textContent === '' && playerOneWin === null & playerTwoWin === null){
                item.textContent = 'O';
                let PlayerTwoData = item.getAttribute('data-number')
                playerTwoArray.push(parseInt(PlayerTwoData))
                winElement.textContent = playerOne.name + ' make your move'
                winnerCheck()
                playerOneTurn = true;
                playerTwoTurn = false;
                
        }

           if  (playerOneWin || playerTwoWin === true ) {restartElem.style.color = 'red'; restartElem.style.border = '3px solid red'}
        })})
       
    }
    return { pReload, playGame}
})()

gameBoard.playGame()
gameBoard.pReload()