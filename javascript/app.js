$(document).ready(function(){
    $('button').click(function(){
        alert(123);
    });
    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: {
            name: "paul rudd",
            movies: ["I Love You Man", "Role Models"]
        },
        success: function(response){
            console.log(response);
        }
    });
})