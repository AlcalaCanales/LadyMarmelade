class Flames {
  constructor(game, col, row) {
    this.game = game;
    this.col = col;
    this.row = row;
    this.active = false;
    this.bonus = 1;
    this.up = {};
    this.down = {};
    this.rigth = {};
    this.left = {};
    /*
    this.up.col = this.game.pot.col;
    this.up.row = this.game.pot.row - bonus;
    this.down.col = this.game.pot.col;
    this.down.row = this.game.pot.row + bonus;
    this.left.col = this.game.pot.col - bonus;
    this.left.row = this.game.pot.row;
    this.right.col = this.game.pot.col + bonus;
    this.right.row = this.game.pot.row;
    */
  }
/*
  draw() {
    index = [-1, 0, 1];
    this.context.save();
    this.context.fillStyle = 'coral';
    if (this.game.pot.col == -1 && this.game.pot.row==0){
      console.log(this.game.pot.col);
      console.log(this.game.pot.row);
      this.context.fillRect(
        (this.game.pot.col + (-1)) * 50 + 5,
        (this.game.pot.row + (0)) * 50 + 5,
        40,
        40
      );
    
    }else if (this.game.pot.col ==1 && this.game.pot.row ==0){
      console.log(this.game.pot.col);
      console.log(this.game.pot.row);
      this.context.fillRect(
        (this.game.pot.col + (1)) * 50 + 5,
        (this.game.pot.row + (0)) * 50 + 5,
        40,
        40
      );
    
    }else if (this.game.pot.col ==0 && this.game.pot.row==-1){
      console.log(this.game.pot.col);
      console.log(this.game.pot.row);
      this.context.fillRect(
        (this.game.pot.col + (0)) * 50 + 5,
        (this.game.pot.row + (-1)) * 50 + 5,
        40,
        40
      );
    
    }else if (this.game.pot.col ==0 && this.game.pot.row==1){
      console.log(this.game.pot.col);
      console.log(this.game.pot.row);
      this.context.fillRect(
        (this.game.pot.col + (0)) * 50 + 5,
        (this.game.pot.row + (1)) * 50 + 5,
        40,
        40
      );
    }
    
    this.context.restore();
    
  }*/
}
