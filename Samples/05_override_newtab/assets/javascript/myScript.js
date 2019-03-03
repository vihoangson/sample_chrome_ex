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