## 개발환경
* Node.js v18.16.1
---
## 실행방법
```
npm install -g nodemon
npm run dev
```
## ENDPOINT
1. 회원가입 | post /user/signup/
2. 로그인 | post /user/signin/
3. 로그아웃 | get /user/signout/
4. 객체 탐지 후 알림 | post /
5. 알림음 변경 | put /user/:id/ring 
6. 수면 패턴 조회 | get /user/:id/pattern

## ERD
![ERD](https://github.com/uniqquej/high-five/assets/109218139/e7c8f08d-88fa-4df1-8d4e-6dd5e7de3368)
