const potImage = new Image();
potImage.src = 'images/Marmalade.png';

class Pot {
    constructor(game, player) {
        this.game = game
        this.player = player
        this.col = undefined
        this.row = undefined
        this.active = false
    }

    createPot(){
        this.col = this.player.col
        this.row = this.player.row;
        this.active = true
        setTimeout(() => {
            this.active = false;
            this.game.collisionPot();
            console.log("pot active false");
            console.log(this.active);
          }, 1000);
    }

    draw(){
        if (this.col != undefined ||this.row != undefined){
            //const potImage = new Image();
            //potImage.src = 'images/Marmalade.png';
            //potImage.addEventListener('load', () => {
                this.game.context.drawImage(
                    potImage,
                    (this.col * 50)+5,
                    (this.row *50)+5,
                    40,
                    40);
            //});
        }
    }

}


/*
function getPotCoord(player){
    this.coor = [player.col, player.row]
    return coor
}

function drawPot(coor){
    if (coor != undefined){
        //context.save();
        //context.fillStyle = 'coral';
        //context.fillRect(
            //(coor[0] * 50)+5, 
            //(coor[1] *50)+5,
            //40,
            //40,
        //)
        const potImage = new Image();
        potImage.src = 'images/Marmalade.png';
        potImage.addEventListener('load', () => {
            drawGrid();
            drawObstacles();
            drawPlayer();
            context.drawImage(
                potImage,
                (coor[0] * 50)+5,
                (coor[1] *50)+5,
                40,
                40);
        });
    }else {
        console.log('Pot not drawn')
    }

}

*/