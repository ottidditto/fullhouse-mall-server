const express = require('express');
const path = require('path');
const app = express();

// client-side rendering : 프론트 빌드파일을 가져와서 서버에서 html렌더링
app.use(express.static(path.join(__dirname, 'fullhouse-mall-front/build')));
app.get('/', function (요청, 응답) {
  응답.sendFile(path.join(__dirname, '/fullhouse-mall-front/build/index.html'));
});

// 실행 : node server.js
// 링크 : http://localhost:8080/
app.listen(8080, function () {
  console.log('listening on 8080')
  console.log('welcome to fullhouse mall server!')
});