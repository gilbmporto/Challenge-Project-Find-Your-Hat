const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
  constructor(arrOfField) {
    this.field = arrOfField;
  }

  print() {
    for (let i = 0; i < (this.field).length; i++) {
        console.log((this.field[i]).join(''));
    }
  }

  winOrLose() {

  }

  playerPath() {

  }

  promptAndPlay() {
    
  }

}

const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

  myField.print();