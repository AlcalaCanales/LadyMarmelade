

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.reset();
    this.setKeyBindings();
    this.createVeggies();
    this.createEnemies();

    //Images
    this.obstacleImage = new Image();
    this.obstacleImage.src = 'images/obstacles.png';

    this.context.translate(50, 50);
    this.active = true
  }

  reset() {
    this.player = new Character(this, 0, 0);
    this.enemiesVertical = [];
    this.enemiesHorizontal = [];
    this.veggies = [];
    this.score = 0;
    this.pot = new Pot(this, this.player);
    this.active = true
  }

  drawGrid() {
    this.context.save();
    this.context.lineWidth = 1;
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, 850, 650);
    for (let column = 0; column <= 17; column++) {
      this.context.beginPath();
      this.context.moveTo(column * 50, 0);
      this.context.lineTo(column * 50, 650);
      this.context.stroke();
      this.context.closePath();
    }

    for (let row = 0; row <= 13; row++) {
      this.context.beginPath();
      this.context.moveTo(0, row * 50);
      this.context.lineTo(850, row * 50);
      this.context.stroke();
      this.context.closePath();
    }
    this.context.restore();
  }

  drawObstacles() {
    this.context.save();
    this.context.fillStyle = 'grey';
    //const obstacleImage = new Image();
    //obstacleImage.src = 'images/obstacles.png';
    for (let i = 0; i < 16; i++) {
      for (let j = 0; j < 12; j++) {
        if (i % 2 != 0 && j % 2 != 0) {
          this.context.fillRect(i * 50 + 5, j * 50 + 5, 40, 40);
        }
      }
    }
  }

  createVeggies() {
    for (let i = 0; i < 17; i++) {
      for (let j = 0; j < 13; j++) {
        if (i % 2 == 0 || j % 2 == 0) {
          if (
            !(
              (i == 0 && j == 0) ||
              (i == 1 && j == 0) ||
              (i == 0 && j == 1) ||
              //horizontal
              (i > 3 && i < 7 && j == 2) ||
              (i > 10 && i < 14 && j == 6) ||
              (i > 8 && i < 12 && j == 10) ||
              //vertical
              (i == 16 && j > 6 && j < 10) ||
              (i == 0 && j > 2 && j < 6) ||
              (i == 0 && j > 7 && j < 11) ||
              (i == 4 && j > 4 && j < 8) ||
              (i == 8 && j > 6 && j < 10)
            )
          ) {
            let veggie = new Veggie(this, i, j);
            this.veggies.push(veggie);
          }
        }
      }
    }
    //console.dir(this.veggies)
  }

  createEnemies() {
    let iVertical = [16, 0, 0, 4, 8];
    let jVertical = [7, 3, 8, 5, 7];
    let iHorizontal = [4, 11, 9];
    let jHorizontal = [2, 6, 10];
    for (let index = 0; index < iVertical.length; index++) {
      let enemy = new EnemyVertical(this, iVertical[index], jVertical[index]);
      this.enemiesVertical.push(enemy);
    }
    for (let index = 0; index < iHorizontal.length; index++) {
      let enemy = new EnemyHorizontal(this, iHorizontal[index], jHorizontal[index]);
      this.enemiesVertical.push(enemy);
    }
  }

  loop(){
    this.drawEverything();
    if (this.active) {
      setTimeout(() => {
        this.loop();
      }, 400);
    } else{
      console.log("game over")
    }
  }

  collisionPot() {
    //console.dir(this.veggies)
    for (let veggie of this.veggies) {
      if (
        (this.pot.col == veggie.col && this.pot.row - 1 == veggie.row) ||
        (this.pot.col == veggie.col && this.pot.row + 1 == veggie.row) ||
        (this.pot.col - 1 == veggie.col && this.pot.row == veggie.row) ||
        (this.pot.col + 1 == veggie.col && this.pot.row == veggie.row)
      ) {
        const indexOfVeggie = this.veggies.indexOf(veggie);
        this.veggies.splice(indexOfVeggie, 1);
      }
    }
    for (let enemy of this.enemiesHorizontal) {
      if (
        (this.pot.col == enemy.col && this.pot.row - 1 == enemy.row) ||
        (this.pot.col == enemy.col && this.pot.row + 1 == enemy.row) ||
        (this.pot.col - 1 == enemy.col && this.pot.row == enemy.row) ||
        (this.pot.col + 1 == enemy.col && this.pot.row == enemy.row)
      ) {
        const indexOfEnemy = this.enemiesHorizontal.indexOf(enemy);
        this.enemiesHorizontal.splice(indexOfEnemy, 1);
      }
    }

    for (let enemy of this.enemiesVertical) {
      if (
        (this.pot.col == enemy.col && this.pot.row - 1 == enemy.row) ||
        (this.pot.col == enemy.col && this.pot.row + 1 == enemy.row) ||
        (this.pot.col - 1 == enemy.col && this.pot.row == enemy.row) ||
        (this.pot.col + 1 == enemy.col && this.pot.row == enemy.row)
      ) {
        const indexOfEnemy = this.enemiesVertical.indexOf(enemy);
        this.enemiesVertical.splice(indexOfEnemy, 1);
      }
    }

    //console.dir(this.veggies)
    this.drawEverything();
    this.pot.drawPot();
    console.log('colisionPotFruits');
  }

  /*
    loop() {
        this.drawEverything();
        if (this.active) {
          window.requestAnimationFrame(() => {
            this.loop();
          });
        } else {
          screenPlayElement.style.display = 'none';
          screenGameOverElement.style.display = 'initial';
        }
      }
*/
  drawEverything() {
    //console.log("x" + this.player.col + "y" + this.player.row)
    this.drawGrid();
    this.drawObstacles();
    this.player.drawPlayer();
    //console.log("logic runs")
    this.resetCollision();
    for (let veggie of this.veggies) {
      veggie.draw();
    }
    for (let enemy of this.enemiesVertical) {
      enemy.draw();
      enemy.checkCollision();
      enemy.move();
    } 
    for (let enemy of this.enemiesHorizontal) {
      enemy.draw();
      enemy.checkCollision();
      enemy.move();
    }
    this.collisionPlayerFruits();
    this.collisionPlayerEnemy();
    //this.pot.drawPot();
  }

  runLogic(){
    
  }

  collisionPlayerEnemy() {
    for (let enemy of this.enemiesHorizontal) {
      if (this.player.col == enemy.col && this.player.row == enemy.row) {
        console.log('game over');
      } 
    }
    for (let enemy of this.enemiesVertical) {
      if (this.player.col == enemy.col && this.player.row == enemy.row) {
        console.log('game over');
      }
    }
  }

  collisionPlayerFruits() {
    for (let veggie of this.veggies) {
      if (this.player.col == veggie.col && this.player.row - 1 == veggie.row) {
        this.player.collisionUp = true;
      }
      if (this.player.col == veggie.col && this.player.row + 1 == veggie.row) {
        this.player.collisionDown = true;
      }
      if (this.player.col - 1 == veggie.col && this.player.row == veggie.row) {
        this.player.collisionLeft = true;
      }
      if (this.player.col + 1 == veggie.col && this.player.row == veggie.row) {
        this.player.collisionRight = true;
      }
    }
    /*
        console.log("colision left is" + this.player.collisionLeft)
        console.log("colision rigth is" + this.player.collisionRight)
        console.log("colision down is" + this.player.collisionDown)
        console.log("colision up is" + this.player.collisionUp)*/
  }

  resetCollision() {
    this.player.collisionUp = false;
    this.player.collisionDown = false;
    this.player.collisionLeft = false;
    this.player.collisionRight = false;
    
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 32:
          this.pot.getPotCoord();
          this.collisionPot();
          break;

        case 37:
          console.log('LEFT!!');

          if (this.player.collisionLeft === false) {
            this.player.moveLeft();
            break;
          }
          break;
        case 38:
          console.log('UP!!');

          if (this.player.collisionUp === false) {
            this.player.moveUp();
            break;
          }
          break;

        case 39:
          console.log('RIGHT!!');
          if (this.player.collisionRight === false) {
            this.player.moveRight();
            break;
          }
          break;

        case 40:
          console.log('DOWN!!');

          if (this.player.collisionDown === false) {
            this.player.moveDown();
            break;
          }
          break;
      }

      //this.drawEverything();
    });
  }
}

/*
function drawGrid() {
    // TODO: write the code of the function
    context.save();
    context.lineWidth = 1;
    context.fillStyle = 'green';
    context.fillRect(0, 0, 850, 650);
    for (let column = 0; column <= 17; column++) {
    context.beginPath();
    context.moveTo(column * 50, 0);
    context.lineTo(column * 50, 650);
    context.stroke();
    context.closePath();
    }

    for (let row = 0; row <= 13; row++) {
    context.beginPath();
    context.moveTo(0, row * 50);
    context.lineTo(850, row * 50);
    context.stroke();
    context.closePath();
    }
    context.restore();
}
*/
