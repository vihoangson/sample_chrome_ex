# Bài 3: MAKE TOOLKIT RIGHT CLICK

[Link youtube auth:codedamn](https://www.youtube.com/channel/UCJUmE61LxhbhudzUugHL2wQ)

[Document - Context menu](https://developer.chrome.com/extensions/samples#search:contextmenus)

[Video tutorial](https://www.youtube.com/watch?v=Johz4yWM-0E&list=PLYxzS__5yYQlWil-vQ-y7NR902ovyq1Xi&index=10)

Set property in manifest.json

```$xslt
  "permissions": [
    "contextMenus"
  ],
```

Call in background.js

```$xslt
chrome.contextMenus.create(
    {
        title: 'son',
        contexts: ['selection','page','link'],
        onclick:function(value){
            //value = {
            // "editable":false,
            // "frameId":0,
            // "menuItemId":185,
            // "pageUrl":"https://www.facebook.com/ViHoangSon/timeline?lst=590381901%3A590381901%3A1551589795",
            // "selectionText":"ho con cái để ứng phó với thời đại ngập"
            // }
            alert(JSON.stringify(value));
            chrome.tabs.create({url:'http://vihoangson.com?param='+value.selectionText})
        }
    }
)
```

Struct reponse callback in selection

```$xslt
    {
         "editable":false,
         "frameId":0,
         "menuItemId":185,
         "pageUrl":"https://www.facebook.com/ViHoangSon/timeline?lst=590381901%3A590381901%3A1551589795",
         "selectionText":"ho con cái để ứng phó với thời đại ngập"
     }
```

Hàm dùng để mã hóa các ký tự đặc biết đưa lên url

```$xslt
encodeURIComponent(value.selectionText)
```