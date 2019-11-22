# BBIBBI

## 스토리 라인(기능 명세)

- 메인 페이지 접속
  - 보내는 번호가 적혀져있으며 disable임
  - 받는 번호 input
  - 메세지 input
  - send button
  
- ~~용어사전페이지~~

  - ~~Api 주소로 들어가 입력한 번호의 뜻을 보여줌~~

- 받은메세지함

  - 보낸 번호(전화번호가 아닌 id)
  - 메세지
  - 하루만 볼 수 있게 함

- 음성사서함

  - 음성을 주고 받을 수 있음 한번만 보내거나 하루만 들을 수 있게 함

- 로그인
  1. 휴대전화번호만 입력 및 인증
  2. 세션 유지
  
- 회원가입
  1. 휴대전화번호 입력 및 인증
  2. Id 만들기(자동생성 또는 여섯자리의 숫자?)
  
  

## API 문서 작성하기

| 구분       | url    | method | parameter    | response(default로 error가 포함) |
| ---------- | ------ | ------ | ------------ | -------------------------------- |
| 로그인     | /login | POST   | Phone number |                                  |
| 회원가입   | /join  | POST   | Phone number |                                  |
| 메인페이지 | /main  | POST   | Phone number |                                  |



## DB

- users
  - phone number
  - id
- message
  - number
  - meaning

## Gitflow

- `master`

  배포되는 버전만 존재하는 브랜치 입니다.

- `develop`

  `master`에서 시작되었고, 앞으로 배포할 기능을 개발하게 될 브랜치 입니다. 기능 구현이 완료되면 `master`로 merge합니다.

- `feature`

  `develop`에서 시작하는 브랜치이며, 구현해야하는 기능 별로 브랜치를 관리합니다. 구현해야할 기능이 완성되면 `develop`으로 merge합니다.

  참고 : `feature/login`

## 세부 순서

1. 최고 책임자가 `master`브랜치를 구성합니다.

2. `develop` 브랜치를 따서 필요한 파일 트리를 모두 추가하고, github에다가 업로드합니다.

3. trello의 `할 일`에 해야할 일 카드를 만듭니다.

4. 일을 시작하면 trello에서 `하고 있는 일`로 해당 카드를 옮깁니다.

5. 브랜치를 따기전에 먼저 `git pull` 하시고, `develop`에서 `feature/할일` 브랜치를 만듭니다.

6. 해당 기능 구현이 완료되면, github에 해당 브랜치를 업로드하고, pull request를 보냅니다.

   참고 : `git push origin feature/할일`

7.  책임자와 코드리뷰 등을 진행한 다음, `develop`브랜치에 merge하고, 해당 카드를 `완료`로 이동합니다.

8. `할 일`을 모두 완료할 때까지 3~7을 계속 반복합니다.



## 과정



### 11.01 PM05:44



![스크린샷 2019-11-01 오후 5 39 32](https://user-images.githubusercontent.com/50814969/68013056-3cccdf00-fccf-11e9-8926-0d19efcd1319.png)
![스크린샷 2019-11-01 오후 5 39 39](https://user-images.githubusercontent.com/50814969/68013059-3f2f3900-fccf-11e9-8d59-fd9065a38979.png)
![스크린샷 2019-11-01 오후 5 40 09](https://user-images.githubusercontent.com/50814969/68013062-40606600-fccf-11e9-9d34-1d646dd797a3.png)

### 11.19 PM05:20

- 삐삐 용어 사전 페이지 만듦(api에서 데이터 가져와서 화면에 출력)
<img src="https://user-images.githubusercontent.com/50814969/69129061-ffe75180-0af0-11ea-9720-78dd0cf15c56.png" alt="image" style="zoom: 25%;" /> <img src="https://user-images.githubusercontent.com/50814969/69129070-04136f00-0af1-11ea-898d-70ffc98d8ad4.png" alt="image" style="zoom:25%;" />

### 11.20

- [Firebase 사용(bbibbi-firebase)](https://firebase.google.com/docs/auth/ios/phone-auth?hl=ko)



### 11.21

- 휴대폰으로 회원가입 및 인증 완료
  - 13버전에서는 firebase인증이 되지 않는다. 12버전은 된다.(시뮬레이터로만 테스트, 그래서 문자 오는 것은 확인하지 못했지만 firebase varify에서 redirect됨)
- 해야할 일 : Login UI 만들기, 통신 공부하기



### 11.22

- 회원가입 및 로그인 UI 완료
  - 보완점 : 현재는 신규 회원일 때 인증이 되면 자동 사용자 추가 후 바로 메인페이지로 넘어감,  신규 회원일 때는 회원가입 페이지로 넘어가고픔
  - 회원가입 로그인 UI 정리 필요