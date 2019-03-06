
$('body').html('');

var myGamePiece;
var myGamePiece2;

function startGame() {
    myGameArea.start();
    myGamePiece = new component(30, 30, "red", 10, 120);
    myGamePiece.update()
    myGamePiece2 = new component(30, 30, "blue", 30, 10);    
    myGamePiece2.update()
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 300;
        this.canvas.height = 300;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    },
    clear : function() {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }    

}

function component(width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;    
    // ctx = myGameArea.context;
    // ctx.fillStyle = color;
    // ctx.fillRect(this.x, this.y, this.width, this.height);
    this.update = function() {
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

startGame();





$(document).keydown(function(e){

    switch(e.which){
        case 37:        
        k = 'left'

        myGamePiece.x -=  1;
        break;
        case 38:        
        k = 'up'
        myGamePiece.y -=  1;
        break;
        case 39:                
        k = 'right'
        myGamePiece.x += 1;
        break;
        case 40:        
        k = 'down'
        myGamePiece.y += 1;
        break;
        default:
        k = 'other'
        //myGamePiece.x = myGamePiece.x + 1;
        break;
    }
    myGameArea.clear();
    myGamePiece.update();
    console.log(k);
    console.log(myGamePiece.x);
    
    flag = 'on';


})
