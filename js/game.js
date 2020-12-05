const obstacleImage = new Image();
obstacleImage.src = 'images/obstacles.png';

const backgroundImage = new Image();
backgroundImage.src = 'images/back_middle.png';

const backgroundImageLeft = new Image();
backgroundImageLeft.src = 'images/back_left.png';

const backgroundImageRight = new Image();
backgroundImageRight.src = 'images/back_right.png';

const backgroundImageUp = new Image();
backgroundImageUp.src = 'images/back_up.png';

const backgroundImageDown = new Image();
backgroundImageDown.src = 'images/back_down.png';

const backgroundImageCornerUpLeft = new Image();
backgroundImageCornerUpLeft.src = 'images/back_top_left.png';

const backgroundImageCornerUpRight = new Image();
backgroundImageCornerUpRight.src = 'images/back_top_right.png';

const backgroundImageCornerDownLeft = new Image();
backgroundImageCornerDownLeft.src = 'images/back_down_left.png';

const backgroundImageCornerDownRight = new Image();
backgroundImageCornerDownRight.src = 'images/back_down_right.png';

const scoreImage = new Image();
scoreImage.src = 'images/pot_score.png';

const playSound = new Audio('sounds/play.mp3');


const winSound = new Audio('sounds/win.mp3');
winSound.volume = 0.01;
winSound.loop = true;

const loseSound = new Audio('sounds/lose.mp3');
loseSound.volume = 0.01;
loseSound.loop = true;

class Game {
  constructor(canvas) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');
    this.active = true;
    this.win = false;
    this.setKeyBindings();
    this.context.translate(50, 50);
    this.tile = 60;
    this.rows = 13;
    this.cols = 17;
  }

  reset() {
    playSound.play();
    playSound.volume = 0.01;
    playSound.loop = true;
    winSound.pause();
    loseSound.pause();
    this.active = true;
    this.win = false;
    this.player = new Character(this, 0, 0);
    this.enemiesVertical = [];
    this.enemiesHorizontal = [];
    this.veggies = [];
    this.boni = [];
    this.createVeggies();
    this.createEnemies();
    this.createBoni();
    this.moveEnemyStamp = 0;
    this.score = 0;
    this.pot = new Pot(this, this.player);
  }

  drawGrid() {
    this.context.save();
    this.context.lineWidth = 1;
    this.context.fillStyle = 'green';
    this.context.fillRect(0, 0, this.cols * this.tile, this.rows * this.tile);
    for (let column = 0; column < this.cols; column++) {
      for (let row = 0; row < this.rows; row++) {
        if (
          column > 0 &&
          column < this.cols - 1 &&
          row > 0 &&
          row < this.rows - 1
        ) {
          this.context.drawImage(
            backgroundImage,
            column * this.tile,
            row * this.tile,
            this.tile,
            this.tile
          );
        } else if (column == 0 && row > 0 && row < this.rows - 1) {
          this.context.drawImage(
            backgroundImageLeft,
            column * this.tile - 10,
            row * this.tile,
            this.tile + 10,
            this.tile
          );
        } else if (column == this.cols - 1 && row > 0 && row < this.rows - 1) {
          this.context.drawImage(
            backgroundImageRight,
            column * this.tile,
            row * this.tile,
            this.tile + 10,
            this.tile
          );
        } else if (row == 0 && column > 0 && column < this.cols - 1) {
          this.context.drawImage(
            backgroundImageUp,
            column * this.tile,
            row * this.tile - 10,
            this.tile,
            this.tile + 10
          );
        } else if (
          row == this.rows - 1 &&
          column > 0 &&
          column < this.cols - 1
        ) {
          this.context.drawImage(
            backgroundImageDown,
            column * this.tile,
            row * this.tile,
            this.tile,
            this.tile + 10
          );
        } else if (column == 0 && row == 0) {
          this.context.drawImage(
            backgroundImageCornerUpLeft,
            column * this.tile - 10,
            row * this.tile - 10,
            this.tile + 10,
            this.tile + 10
          );
        } else if (column == this.cols - 1 && row == this.rows - 1) {
          this.context.drawImage(
            backgroundImageCornerDownRight,
            column * this.tile,
            row * this.tile,
            this.tile + 10,
            this.tile + 10
          );
        } else if (column == 0 && row == this.rows - 1) {
          this.context.drawImage(
            backgroundImageCornerDownLeft,
            column * this.tile - 10,
            row * this.tile,
            this.tile + 10,
            this.tile + 10
          );
        } else if (column == this.cols - 1 && row == 0) {
          this.context.drawImage(
            backgroundImageCornerUpRight,
            column * this.tile,
            row * this.tile - 10,
            this.tile + 10,
            this.tile + 10
          );
        }
      }
    }
    /*
    for (let column = 0; column <= 17; column++) {
      this.context.beginPath();
      this.context.moveTo(column * this.tile, 0);
      this.context.lineTo(column * this.tile, this.rows * this.tile);
      this.context.stroke();
      this.context.closePath();
    }

    for (let row = 0; row <= 13; row++) {
      this.context.beginPath();
      this.context.moveTo(0, row * this.tile);
      this.context.lineTo(this.cols * this.tile, row * this.tile);
      this.context.stroke();
      this.context.closePath();
    }*/
    this.context.restore();
  }

  loop() {
    this.drawEverything();
    if (this.active == true && this.win == false) {
      window.requestAnimationFrame(() => {
        this.loop();
      });
      /*setTimeout(() => {
        this.loop();
      }, 400);*/
    } else if (this.active == true && this.win == true) {
      playSound.pause();
      winSound.play();
      screenPlay.style.display = 'none';
      screenWin.style.display = 'initial';
    } else {
      playSound.pause();
      loseSound.play();
      screenPlay.style.display = 'none';
      screenGameOver.style.display = 'initial';
    }
  }

  drawObstacles() {
    this.context.save();
    this.context.fillStyle = 'grey';
    //const obstacleImage = new Image();
    //obstacleImage.src = 'images/obstacles.png';
    for (let i = 0; i < this.cols; i++) {
      for (let j = 0; j < this.rows; j++) {
        if (i % 2 != 0 && j % 2 != 0) {
          /*this.context.fillRect(
            (i * this.tile) + (this.tile/10), 
            (j * this.tile) + (this.tile/10), 
            ((this.tile/10)*8), 
            ((this.tile/10)*8)
            );*/

          this.context.drawImage(
            obstacleImage,
            i * this.tile + this.tile / 10,
            j * this.tile + this.tile / 10,
            (this.tile / 10) * 8,
            (this.tile / 10) * 8
          );
        }
      }
    }
  }

  drawEverything() {
    //console.log("x" + this.player.col + "y" + this.player.row)
    this.drawGrid();
    this.drawObstacles();
    this.player.drawPlayer();
    //console.log("logic runs")
    this.player.resetCollision();
    this.drawScore();
    if (this.pot.active == true) {
      this.pot.draw();
    }
    if (this.pot.flamesActive == true) {
      this.pot.drawFlames();
    }

    for (let bonus of this.boni) {
      bonus.draw();
    }

    for (let veggie of this.veggies) {
      veggie.draw();
    }

    const currentTimeStamp = Date.now();
    if (currentTimeStamp > this.moveEnemyStamp + 400) {
      for (let enemy of this.enemiesVertical) {
        enemy.checkCollision();
        enemy.move();
        enemy.checkCollision();
      }
      for (let enemy of this.enemiesHorizontal) {
        enemy.checkCollision();
        enemy.move();
        enemy.checkCollision();
      }
      this.moveEnemyStamp = currentTimeStamp;
    }

    for (let enemy of this.enemiesVertical) {
      enemy.checkCollision();
      enemy.draw();
      enemy.checkCollision();
    }
    for (let enemy of this.enemiesHorizontal) {
      enemy.checkCollision();
      enemy.draw();
      enemy.checkCollision();
    }



    this.collisionPlayerFruits();
    this.collisionPlayerEnemy();
    this.collisionBonus();
    //this.pot.drawPot();
  }

  drawScore() {
    let imageRatio = 400 / 650;
    let showWidth = this.tile * this.rows * imageRatio;
    let showHeight = this.tile * this.rows;
    let changeRatio = showWidth / scoreImage.width;
    let scorePart = (405 * changeRatio) / 146;
    let gettingFull = this.score * scorePart;
    this.context.fillStyle = 'white';
    this.context.fillRect(
      this.tile * this.cols + 55,
      5,
      showWidth - 10,
      showHeight - 10
    );
    this.context.fillStyle = '#f22b4d';
    this.context.fillRect(
      this.tile * this.cols + 55,
      this.tile * this.rows - (70 * changeRatio + gettingFull),
      396 * changeRatio,
      gettingFull
    );

    this.context.drawImage(
      scoreImage,
      this.tile * this.cols + 50,
      0,
      showWidth,
      showHeight
    );
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
    console.dir(this.veggies);
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
      let enemy = new EnemyHorizontal(
        this,
        iHorizontal[index],
        jHorizontal[index]
      );
      this.enemiesVertical.push(enemy);
    }
  }

  createBoni() {
    for (let i = 0; i < 17; i++) {
      for (let j = 0; j < 13; j++) {
        if (i % 2 == 0 || j % 2 == 0) {
          if (
            (i == 10 && j == 2) ||
            (i == 16 && j == 0) ||
            (i == 0 && j == 12) ||
            //vertical
            (i == 2 && j == 2) ||
            (i == 6 && j == 8) ||
            (i == 0 && j == 12)
          ) {
            let bonus = new Bonus(this, i, j);
            this.boni.push(bonus);
          }
        }
      }
    }
  }

  collisionBonus() {
    for (let bonus of this.boni) {
      if (
        this.player.col == bonus.col &&
        this.player.row == bonus.row &&
        bonus.active == true
      ) {
        const indexOfBonus = this.boni.indexOf(bonus);

        this.pot.potRadius += 1;
        console.log('Bonus' + this.pot.potRadius);
        bonus.active = false;
      }
    }
  }

  collisionPot() {
    if (
      //POT
      (this.player.col == this.pot.col && this.player.row == this.pot.row) ||
      //UP
      (this.player.col == this.pot.col &&
        this.player.row < this.pot.row &&
        this.player.row >= this.pot.row - this.pot.potRadius) ||
      //DOWN
      (this.player.col == this.pot.col &&
        this.player.row > this.pot.row &&
        this.player.row <= this.pot.row + this.pot.potRadius) ||
      //LEFT
      (this.player.col < this.pot.col &&
        this.player.col >= this.pot.col - this.pot.potRadius &&
        this.pot.row == this.player.row) ||
      //RIGHT
      (this.player.col > this.pot.col &&
        this.player.col <= this.pot.col + this.pot.potRadius &&
        this.pot.row == this.player.row)
    ) {
      //console.log('Active ' + this.active);
      this.active = false;
    }

    for (let veggie of this.veggies) {
      if (
        //UP
        (veggie.col == this.pot.col &&
          veggie.row < this.pot.row &&
          veggie.row >= this.pot.row - this.pot.potRadius) ||
        //DOWN
        (veggie.col == this.pot.col &&
          veggie.row > this.pot.row &&
          veggie.row <= this.pot.row + this.pot.potRadius) ||
        //LEFT
        (veggie.col < this.pot.col &&
          veggie.col >= this.pot.col - this.pot.potRadius &&
          this.pot.row == veggie.row) ||
        //RIGHT
        (veggie.col > this.pot.col &&
          veggie.col <= this.pot.col + this.pot.potRadius &&
          this.pot.row == veggie.row)
      ) {
        //const indexOfVeggie = this.veggies.indexOf(veggie);
        if (veggie.active == true) {
          veggie.active = false;
          this.score += 1;
        }
      }
    }

    const veggiesActive = this.veggies.filter((veggie) => {
      return veggie.active == true;
    });
    console.dir(veggiesActive);
    console.log(veggiesActive.length);
    if (veggiesActive == 0) {
      this.win = true;
    }

    for (let enemy of this.enemiesHorizontal) {
      if (
        //UP
        (enemy.col == this.pot.col &&
          enemy.row <= this.pot.row &&
          enemy.row >= this.pot.row - this.pot.potRadius) ||
        //DOWN
        (enemy.col == this.pot.col &&
          enemy.row >= this.pot.row &&
          enemy.row <= this.pot.row + this.pot.potRadius) ||
        //LEFT
        (enemy.col < this.pot.col &&
          enemy.col >= this.pot.col - this.pot.potRadius &&
          this.pot.row == enemy.row) ||
        //RIGHT
        (enemy.col > this.pot.col &&
          enemy.col <= this.pot.col + this.pot.potRadius &&
          this.pot.row == enemy.row)
      ) {
        //const indexOfEnemy = this.enemiesHorizontal.indexOf(enemy);
        enemy.active = false;
      }
    }

    for (let enemy of this.enemiesVertical) {
      if (
        (enemy.col == this.pot.col &&
          enemy.row < this.pot.row &&
          enemy.row >= this.pot.row - this.pot.potRadius) ||
        //DOWN
        (enemy.col == this.pot.col &&
          enemy.row >= this.pot.row &&
          enemy.row <= this.pot.row + this.pot.potRadius) ||
        //LEFT
        (enemy.col < this.pot.col &&
          enemy.col >= this.pot.col - this.pot.potRadius &&
          this.pot.row == enemy.row) ||
        //RIGHT
        (enemy.col > this.pot.col &&
          enemy.col <= this.pot.col + this.pot.potRadius &&
          this.pot.row == enemy.row)
      ) {
        //const indexOfEnemy = this.enemiesVertical.indexOf(enemy);
        enemy.active = false;
      }
    }
  }

  collisionPlayerEnemy() {
    for (let enemy of this.enemiesHorizontal) {
      if (
        this.player.col == enemy.col &&
        this.player.row == enemy.row &&
        enemy.active == true
      ) {
        this.active = false;
      }
    }
    for (let enemy of this.enemiesVertical) {
      if (
        this.player.col == enemy.col &&
        this.player.row == enemy.row &&
        enemy.active == true
      ) {
        this.active = false;
      }
    }
  }

  collisionPlayerFruits() {
    for (let veggie of this.veggies) {
      if (
        this.player.col == veggie.col &&
        this.player.row - 1 == veggie.row &&
        veggie.active == true
      ) {
        this.player.collisionUp = true;
      }
      if (
        this.player.col == veggie.col &&
        this.player.row + 1 == veggie.row &&
        veggie.active == true
      ) {
        this.player.collisionDown = true;
      }
      if (
        this.player.col - 1 == veggie.col &&
        this.player.row == veggie.row &&
        veggie.active == true
      ) {
        this.player.collisionLeft = true;
      }
      if (
        this.player.col + 1 == veggie.col &&
        this.player.row == veggie.row &&
        veggie.active == true
      ) {
        this.player.collisionRight = true;
      }
    }
  }

  setKeyBindings() {
    window.addEventListener('keydown', (event) => {
      switch (event.keyCode) {
        case 32:
          this.pot.createPot();
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
    });
  }
}
