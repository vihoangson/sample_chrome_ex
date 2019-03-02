$('button').click(function () {

    $.ajax({
        url: "https://reqres.in/api/users",
        type: "POST",
        data: {
            name: $("#registerSubmit").serialize(),
            movies: ["I Love You Man", "Role Models"]
        },
        success: function (response) {
            $(".container").prepend(JSON.stringify(response));
        }
    });

});