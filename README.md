## 개발환경
* Node.js v18.16.1
---
## 실행방법
```
npm install
npm install -g nodemon
npm run dev
```
## 프로젝트 개요
아이의 수면 분리를 위해 침실에 설치하여 아이의 상황을 모니터링할 수 있는 서비스 <br>
아이가 뒤집힌 상황이나, 눈을 뜨고 있는 상황이 지속된다면 알림 소리를 내어 상황을 알려줄 수 있다.<br>
또한 일정 크기 이상의 소리가 나면 알림 소리를 낸다.

## 사용 모델
- VGG19 (transfer learning) > 눈을 뜨고 감은 모양 감지
- BlazeFace > 화면에서 얼굴 탐지
- coco-ssd > 화면에서 사람 탐지

## ENDPOINT
1. 회원가입 | post /user/signup/
2. 로그인 | post /user/signin/
3. 로그아웃 | get /user/signout/
4. 객체 탐지 후 알림 | post /
5. 알림음 변경 | put /user/:id/ring 
6. 수면 패턴 조회 | get /user/:id/pattern

## ERD
![ERD](https://github.com/uniqquej/high-five/assets/109218139/e7c8f08d-88fa-4df1-8d4e-6dd5e7de3368)

## 결과 화면
1. 아이가 눈을 감고 있음
![image](https://github.com/uniqquej/high-five/assets/109218139/5e9144c9-cce6-4d6d-aeaa-1eb2b81b4e88)

2. 아이가 눈을 뜨고 있음
![image (3)](https://github.com/uniqquej/high-five/assets/109218139/4f5244e7-f122-42e9-8983-868484a1befc)

3. 아이가 뒤집혀 있음
![image (1)](https://github.com/uniqquej/high-five/assets/109218139/3762ef19-4c67-494f-8fda-356009060ab0)

4. 카메라에 아이가 없음
![image (2)](https://github.com/uniqquej/high-five/assets/109218139/cc3b396b-2762-40a5-9050-0ff984f306ed)

5. 알림 내용 기록 후 그래프로 확인
![image (4)](https://github.com/uniqquej/high-five/assets/109218139/79bd67dc-695b-4cf8-b51e-2d2ff4b5cd7e)


