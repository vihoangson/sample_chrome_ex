var url = chrome.extension.getURL('toolbar.html');
$("body").append('<iframe src="' + url + '" style="height:35px" id="toolbar"></iframe>');

$("body").css({
    'padding-top': '35px'
})
$(".toggle").click(function () {
        $("body").css({color: 'red'});
    }
);