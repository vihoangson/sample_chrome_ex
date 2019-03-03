count_like();

function count_like() {
    chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    fblike: 'getliks'
                }, function (response) {
                    $('#number_like').html(response.number);
                }
            )
        });
}
function do_like() {
    chrome.tabs.query({
            active: true,
            currentWindow: true
        },
        function (tabs) {
            chrome.tabs.sendMessage(
                tabs[0].id,
                {
                    fblike: 'dolike'
                }, function (response) {
                    $('#number_like').html(response.number);
                }
            )
        });
}

$("#likeAll").click(function(){
    do_like();
});
