    if(false){
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "GET",
        data: {
            kim: 'note',
            fake: {
                name: "paul rudd",
                movies: '111'
            }
        },
        success: function (response) {
        // console.log(response.data[0].avatar);
        //$(".slider__overlay h2").html(response.data[0].avatar);
        // console.log(JSON.stringify(response.fake));
        //$("body").html('<img src="'+response.data[0].avatar+'">');
    }
});
}


$('body').html('');
var m = 0;
var flag = 'on';
function myfn(){
    m++;
    k = Math.random();
    if(flag == 'on'){
        $('body').append (k+" ");
    }
    flag = 'off';
    $('.m').after(m);
    draw();
}

function draw(){
    let px = Math.floor((Math.random() * 1000) + 1);
    let py = Math.floor((Math.random() * 1000) + 1);
    new component(30, 30, "blue", px , py );    
}

$('body').append(
    $("<canvas class='m' id='myCanvas'></canvas>").css({width:'100px',height:'100px',background:'red',position:'absolute'})
    );



$(document).keydown(function(e){

    switch(e.which){
        case 37:
        $(".m").css({left:$(".m").css('left')+1});
        k = 'left'
        break;
        case 38:
        $(".m").css({background:'yellow'});
        k = 'up'
        break;
        case 39:
        $(".m").css({background:'green'});
        $(".m").css({left:$(".m").css('left')-1});
        k = 'right'
        break;
        case 40:
        $(".m").css({background:'black'});
        k = 'down'
        break;
        default:
        k = 'other'
        break;
    }
    flag = 'on';

})


// ============ ============  ============  ============ 

if(true){
    var myGamePiece;

    function startGame() {
        myGameArea.start();
        myGamePiece = new component(30, 30, "red", 10, 120);
        myGamePiece2 = new component(30, 30, "blue", 30, 10);
        for(i=0;i<10;i++){
            let px = Math.floor((Math.random() * 1000) + 1);
            let py = Math.floor((Math.random() * 1000) + 1);
            new component(30, 30, "blue", px , py );
        }
    }

    var myGameArea = {
        canvas : document.createElement("canvas"),
        start : function() {
            this.canvas.width = 1000;
            this.canvas.height = 1000;
            this.context = this.canvas.getContext("2d");
            document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        }
    }

    function component(width, height, color, x, y) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;    
        ctx = myGameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    startGame();

    setInterval(myfn, 3000);

}
