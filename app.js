var gameBoard = (function() {
    'use strict';

    const personFactory = (name, counter, turn) => {
        const sayHello = () => console.log('hello!');
        return { name, counter, turn, sayHello };
      };

      const playerOne = personFactory('Player One', 'x' , true)
      const playerTwo = personFactory('Player Two', 'o' , false)

      console.log(playerOne.counter)
      console.log(playerTwo.counter)
      console.log(playerTwo.turn)


    const playerArrayOne = [];
    const playerArrayTwo = []

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

    const counterPlacer = () => {
        const boxes = document.querySelectorAll('.grid')
        boxes.forEach(boxes  => boxes.addEventListener('click', event =>{
            
            if (playerOne.turn === true)
            {boxes.textContent = playerOne.counter;
             playerOne.turn = false;
             playerTwo.turn = true;
              playerArrayOne.push(event.target.id);    
            }

            else if (playerTwo.turn === true )
            {boxes.textContent = playerTwo.counter;
            playerTwo.turn = false;
            playerOne.turn = true;
        playerArrayTwo.push(event.target.id)}

        }
        )
        )}

    const arrayMatch = () => {
        let winNums = winningSequences;
        let playerOneNums = playerArrayOne;
        let playerTwoNums = playerArrayTwo;
        winNums.forEach (item => {
            console.log(item)
            if(item === playerOneNums)
            {alert ( 'you have won')}
                
        });

           console.log(playerOneNums, playerTwoNums)
    }

        arrayMatch()

        counterPlacer()
  })();


