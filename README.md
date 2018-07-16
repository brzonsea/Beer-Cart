## Getting Started

이 프로젝트의 는 mock_data 폴더의 db.json 파일의 데이터를
JSON Server 을 통해 api 콜을 요청하는 형식입니다.
JSON Server 를 먼저 설치하고 실행해야 데이터에 접근 할 수 있습니다.


Install JSON Server
```
npm install -g json-server
```

를 통해 JSON Server 를 설치하신 후에는 프로젝트 root 디렉토리에서

```
json-server --watch ./mock_data/db.json
```
를 입력하여 JSON Server 를 실행시킬 수 있습니다.

JSON Server 실행시 나오는
Home url 을
${Proj_Root}/src/config/apiUrl.js 폴더 안의 apiUrl 값에 넣어주세요.
