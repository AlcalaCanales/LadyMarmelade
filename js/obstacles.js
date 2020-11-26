/*class Obstacle {
  constructor(col, row) {
    this.col = col;
    this.row = row;
  }
}
/*
function drawObstacles(){
  context.save();
  context.fillStyle = 'grey';
  const obstacleImage = new Image();
  obstacleImage.src = 'images/obstacles.png';
  for (i=0; i<16; i++){
    for (j=0; j<12; j++){
      if (i%2 !=0 && j%2 != 0){
        context.fillRect(
          (i * 50)+5, 
          (j * 50)+5,
          40,
          40,
        )

        
        obstacleImage.addEventListener('load', () => {
            context.drawImage(
              obstacleImage,
              (i * 50)+5, 
              (j * 50)+5,
              40,
              40,
            )
        });
      };
    };
  };
  context.restore();
}

*/
    