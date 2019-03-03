chrome.contextMenus.create(
    {
        title: 'Push string to page',
        contexts: ['selection', 'page', 'link'],
        onclick: function (value) {
            //{
            // "editable":false,
            // "frameId":0,
            // "menuItemId":185,
            // "pageUrl":"https://www.facebook.com/ViHoangSon/timeline?lst=590381901%3A590381901%3A1551589795",
            // "selectionText":"ho con cái để ứng phó với thời đại ngập"
            // }
            //alert(JSON.stringify(value));
            chrome.tabs.create({url: 'http://vihoangson.com?params=' + encodeURIComponent(value.selectionText)})
        }
    }
)