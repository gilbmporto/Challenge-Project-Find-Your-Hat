const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';
var winY;
var winX;
var holeY;
var holeX;
var currentXHole;
var currentYHole;
var currentHoleLocation
var arrOfHolesCoordinates = [];
var gameOver = false;

class Field {
    constructor(arrOfField) {
    this.field = arrOfField;
    this.playerInitPos = arrOfField[0][0];
    this.x = 0;
    this.y = 0;
  }

  print() {
    for (let i = 0; i < (this.field).length; i++) {
        console.log((this.field[i]).join(''));
    };
  }

    testLocation() {
      if((this.x) < 0 || (this.y) < 0 || (this.x) > ((this.field).length - 1) || (this.y) > ((this.field[0]).length - 1)) {
        console.log('You left out of the map! O_O!');
        gameOver = true;
      }
      if ((this.field)[winY][winX] !== '^') {
        console.log('You found hat! Congrats!');
        gameOver = true;
      };
      for (let count = 0; count < arrOfHolesCoordinates.length; count++) {
        currentHoleLocation = arrOfHolesCoordinates[count];
        currentYHole = currentHoleLocation[0];
        currentXHole = currentHoleLocation[1];
        if ((this.field[currentYHole][currentXHole] !== hole)) {
          console.log('Fire into the hole! You died!');
          gameOver = true;
        }
      }
  }

    whereIsEverything() {
      for (let i = 0; i < (this.field).length; i++) {
        for (let j = 0; j < (this.field)[i].length; j++) {
          if ((this.field)[i][j] === hat) {
            winY = i;
            winX = j;
          };
        };
      }
      for (let i = 0; i < (this.field).length; i++) {
        for (let j = 0; j < (this.field)[i].length; j++) {
          if ((this.field)[i][j] === hole) {
            holeY = i;
            holeX = j;
            arrOfHolesCoordinates.push([holeY, holeX]);
          }
        }
      }
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
            if ((this.y) === ((this.field).length)) {
              console.log('You left out of the map! End of game!');
              gameOver = true;
              process.exit();
            }
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
    ['*', '░', '░', '░', '░'],
    ['░', 'O', '░', 'O', '░'],
    ['░', '░', 'O', 'O', '░'],
    ['░', '░', '^', 'O', '░'],
    ['░', '░', '░', '░', '░'],
  ]);

function playGame() {
    myField.print();
    myField.whereIsEverything();
    setTimeout(() => {
      while(!gameOver) {
        myField.promptAndPlay();
        myField.testLocation();
        myField.print();
    };
    }, 1000);

};

playGame();