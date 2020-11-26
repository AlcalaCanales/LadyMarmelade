class Pot {
constructor(player) {
    this.col = player.col;
    this.row = player.row;
}
}



function getPotCoord(player){
    coor = [player.col, player.row]
    return coor
}

function drawPot(coor){
    if (coor != undefined){
        /*context.save();
        context.fillStyle = 'coral';
        context.fillRect(
            (coor[0] * 50)+5, 
            (coor[1] *50)+5,
            40,
            40,
        )*/
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