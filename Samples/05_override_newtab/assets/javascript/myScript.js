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

$('body').html('');
var m = 0;
var flag = 'on';
function myfn(){
    m++;
    //k = Math.random();
    if(flag == 'on'){
        //$('body').prepend (k+" ");
    }
    flag = 'off';
}

$('body').append(
    $("<canvas class='m'></canvas>").css({width:'100px',height:'100px',background:'red',position:'absolute'})
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

setInterval(myfn, 3);
