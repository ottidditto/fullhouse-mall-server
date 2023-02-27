const express = require('express');
const path = require('path');
const app = express();

// client-side rendering : 프론트 빌드파일을 가져와서 서버에서 html렌더링
app.use(express.static(path.join(__dirname, 'fullhouse-mall-front/build')));

// 라우팅은 react-router-dom에서 수행하도록 설정되어있음
app.get('*', function (request, response) {
  response.sendFile(path.join(__dirname, '/react-project/build/index.html'));
});

// 실행 : node server.js
// 링크 : http://localhost:8080/
app.listen(8080, function () {
  console.log('listening on 8080')
  console.log('welcome to fullhouse mall server!')
});

// 커밋 테스트
// ㅁㄴㅇㄹ