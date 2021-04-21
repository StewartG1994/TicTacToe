var gameBoard = (function() {
    'use strict';

    const personFactory = (name, counter) => {
        const sayHello = () => console.log('hello!');
        return { name, counter, sayHello };
      };
      const playerOne = personFactory('Player One', 'x')
      const playerTwo = personFactory('Player Two', 'o')



  })();