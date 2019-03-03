# Bài 7: Làm toolbar ở mỗi trang

[Link youtube auth:codedamn](https://www.youtube.com/channel/UCJUmE61LxhbhudzUugHL2wQ)

[Link youtube: Bài 7](https://www.youtube.com/watch?v=OoVkku_xxoI&list=PLYxzS__5yYQlWil-vQ-y7NR902ovyq1Xi&index=7)

content_scripts: Dùng để add các script được active với các trang được match bởi property matches

[Document content_scripts](https://developer.chrome.com/extensions/content_scripts)
```$xslt
  "content_scripts": [
    {
      "matches": ["https://*/*"],
      "css": ["assets/css/myStyles.css"],
      "js": ["assets/javascript/jquery.js","assets/javascript/contentScript.js"]
    }
  ],
```
Chý ý cái này để các trang con có thể access vào được bằng iframe

[Document web_accessible_resources](https://developer.chrome.com/extensions/manifest/web_accessible_resources)

```$json
  "web_accessible_resources": [
    "toolbar.html"
  ]
```

