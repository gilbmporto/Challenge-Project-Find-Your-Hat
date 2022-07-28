const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(arrOfField) {
    this.field = arrOfField;
    this.playerInitPos = arrOfField[0][0];
    this.x = 0;
    this.y = 0;
    this.gameOver = false;
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
        let newPlayerPos = prompt('Which way do we go?');
        if (newPlayerPos == 'r') {
            console.clear();
            (this.x)++;
            this.field[this.y][this.x] = pathCharacter;
        } else if (newPlayerPos == 'd') {
            console.clear();
            (this.y)++;
            this.field[this.y][this.x] = pathCharacter;
        } else if (newPlayerPos == 'l') {
            console.clear();
            (this.x)--;
            this.field[this.y][this.x] = pathCharacter;
        } else if (newPlayerPos == 'u') {
            console.clear();
            (this.y)--;
            this.field[this.y][this.x] = pathCharacter;
        }   
    }


  }


const myField = new Field([
    ['*', '░', 'O'],
    ['░', 'O', '░'],
    ['░', '^', '░'],
  ]);

function playGame() {
    var gameOver = false;
    myField.print();
    while(!gameOver) {
        myField.promptAndPlay();
        myField.print();
    };
};

playGame();