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

    const gameBoardArray = [];

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

    


  })();
