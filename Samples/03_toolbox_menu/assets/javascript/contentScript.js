
function getNumberLike() {
    let number = $('._666k').length;
    return number;
}

function doLike() {
    $('._4jy0._4jy4._517h._51sy._42ft').each(function(){
         //this.click();
    })
    $('._666k_42ft').each(function(){
        this.click();
    })
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.fblike == "getliks") {
            numberlike = getNumberLike();
            sendResponse({number: numberlike});
        }
        if (request.fblike == "dolike") {
            numberlike = getNumberLike();
            doLike();
            sendResponse({number: numberlike});
        }

    });