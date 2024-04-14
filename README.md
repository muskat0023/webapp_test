battery-simulator_v1/
├── frontend/
│   ├── node_modules/
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.js
│   │   │   ├── Sidebar.js
│   │   │   ├── LogoutButton.js
│   │   │   ├── ContentContainer.js
│   │   │   ├── SimulatorButton.js
│   │   │   ├── Footer.js
│   │   │   ├── SimulatorHeader.js
│   │   │   ├── SimulatorInputForm.js
│   │   │   ├── SimulatorContentContainer.js
│   │   │   └── SimulatorFooter.js
│   │   ├── pages/
│   │   │   ├── LoginPage.js
│   │   │   ├── RegisterPage.js
│   │   │   ├── SimulatorSelectPage.js
│   │   │   └── SimulatorPage.js
│   │   ├── services/
│   │   │   └── AuthService.js
│   │   ├── App.js
│   │   └── index.js
│   ├── package-lock.json
│   └── package.json
├── backend/
│   ├── controllers/
│   │   ├── auth_controller.py
│   │   └── model_controller.py
│   ├── models/
│   │   └── user_model.py
│   ├── routes/
│   │   ├── auth_routes.py
│   │   └── model_routes.py
│   ├── middlewares/
│   │   └── auth_middleware.py
│   ├── config/
│   │   ├── config.py
│   │   └── db.py
│   ├── services/
│   │   └── auth_service.py
│   ├── venv/
│   ├── app.py
│   └── requirements.txt
├── onnx_models/
│   └── forming_model.onnx
│   └── forming_params.json
├── README.md
└── .gitignore

1. 프론트엔드 개발 (Fullstack A)
   - 사용자 인증 및 권한 관리
     - 로그인, 로그아웃 기능 구현
     - 관리자 및 일반 사용자 권한 구분
     - 토큰 기반 인증 구현
   - 시뮬레이터 선택 페이지
     - 5개 시뮬레이터 선택 버튼 구현
     - 선택한 시뮬레이터 페이지로 이동 기능 구현
   - 시뮬레이터 페이지
     - 입력 파라미터 폼 구현
     - 시뮬레이션 실행 버튼 구현
     - 결과 표시 영역 구현
   - UI/UX 디자인
     - 와이어프레임 및 목업 제작
     - 디자인 컴포넌트 구현
     - 반응형 디자인 적용

2. 백엔드 개발 (Fullstack B)
   - RESTful API 개발
     - 인증 관련 API 구현
     - 시뮬레이터 관련 API 구현
     - 요청/응답 데이터 검증 및 에러 처리
   - 데이터베이스 설계 및 구축
     - 사용자 모델 및 시뮬레이션 결과 모델 설계
     - SQLite 데이터베이스 연동
     - ORM(Object-Relational Mapping) 적용
   - ONNX 모델 통합 및 실행
     - ONNX Runtime 설정
     - 모델 로딩 및 추론 기능 구현
     - 입력 데이터 전처리 및 출력 데이터 후처리
   - 모델 레지스트리 구축
     - 모델 버전 관리 시스템 구현
     - 모델 메타데이터 저장 및 추적
   - CI/CD 파이프라인 구성
     - 코드 버전 관리 시스템 연동 (Git)
     - 자동화된 빌드 및 테스트 환경 구성
     - 배포 자동화 스크립트 작성


아래와 같이 백엔드 엔지니어를 위한 문서를 작성해보았습니다.

```markdown
# 백엔드 엔지니어를 위한 인증 및 인가 기능 구현 가이드

안녕하세요. 프론트엔드 개발자입니다. 현재 프로젝트에서 필요한 인증 및 인가 기능에 대해 안내드리고자 합니다. 백엔드에서 구현해주셔야 할 기능과 API 엔드포인트에 대한 설명을 포함하고 있습니다. 협업을 위해 필요한 내용을 효율적으로 전달하고자 합니다.

## 1. 로그인 기능

- API 엔드포인트: `POST /api/auth/login`
- 요청 데이터:
  ```json
  {
    "username": "사용자 아이디",
    "password": "비밀번호"
  }
  ```
- 응답 데이터:
  ```json
  {
    "token": "JWT 토큰"
  }
  ```
- 로그인 성공 시 JWT 토큰을 발급하고 응답에 포함시켜 주세요.
- 로그인 실패 시 적절한 에러 메시지와 함께 응답 상태 코드를 반환해 주세요.

## 2. 회원가입 기능

- API 엔드포인트: `POST /api/auth/signup`
- 요청 데이터:
  ```json
  {
    "username": "사용자 아이디",
    "email": "이메일",
    "password": "비밀번호"
  }
  ```
- 응답 데이터: 회원가입 성공 시 적절한 메시지와 함께 응답 상태 코드를 반환해 주세요.
- 회원가입 실패 시 적절한 에러 메시지와 함께 응답 상태 코드를 반환해 주세요.

## 3. 로그아웃 기능

- API 엔드포인트: `POST /api/auth/logout`
- 요청 헤더: `Authorization: Bearer JWT토큰`
- 로그아웃 성공 시 서버에서 토큰을 무효화하고 적절한 응답 상태 코드를 반환해 주세요.
- 로그아웃 실패 시 적절한 에러 메시지와 함께 응답 상태 코드를 반환해 주세요.

## 4. JWT 토큰 인증 기능

- 프론트엔드에서는 로그인 성공 시 받은 JWT 토큰을 `localStorage`에 저장하고, 이후 API 요청 시 `Authorization` 헤더에 토큰을 포함하여 전송합니다.
- 백엔드에서는 전달받은 JWT 토큰을 검증하고, 토큰에 포함된 사용자 정보를 추출하여 인증 및 인가 처리를 진행해 주세요.
- 토큰 검증 실패 시 적절한 에러 메시지와 함께 응답 상태 코드를 반환해 주세요.

## 5. 기타

- 보안을 위해 비밀번호는 해싱하여 저장해 주세요.
- 사용자 정보는 안전하게 관리되어야 합니다.
- 에러 처리 시 적절한 응답 상태 코드와 메시지를 반환해 주세요.
- API 문서화를 통해 프론트엔드와 백엔드 간의 원활한 소통이 이루어질 수 있도록 해주세요.

위 내용을 참고하여 백엔드에서 필요한 기능을 구현해 주시기 바랍니다. 추가적인 요구사항이나 질문이 있다면 언제든 말씀해 주세요. 원활한 협업을 위해 노력하겠습니다.

감사합니다.
```

위의 문서는 프론트엔드 개발자의 관점에서 백엔드 엔지니어에게 필요한 인증 및 인가 기능에 대해 전달하는 내용입니다. 각 기능별로 API 엔드포인트, 요청/응답 데이터 형식, 주의사항 등을 명시하여 효율적인 협업이 이루어질 수 있도록 하였습니다.

이 문서를 참고하여 백엔드 엔지니어가 해당 기능을 구현할 수 있도록 가이드라인을 제공할 수 있습니다. 필요한 경우 추가 설명이나 수정 사항을 반영하여 문서를 보완할 수 있습니다.

# 백엔드 엔지니어를 위한 ONNX 모델 API 엔드포인트 구현 요청서

안녕하세요. 프론트엔드 개발자입니다. ONNX 모델을 사용하여 시뮬레이션을 수행하는 기능을 구현하기 위해 백엔드에서 API 엔드포인트를 구현해주시기를 요청드립니다. 아래는 필요한 API 엔드포인트와 요구사항에 대한 상세 설명입니다.

## 1. ONNX 모델 정보 제공 API

- API 엔드포인트: `GET /model-info`
- 응답 데이터:
  ```json
  {
    "input_shape": [input_dim],
    "output_shape": [output_dim]
  }
  ```
- `input_shape`는 ONNX 모델의 입력 차원을 나타내는 배열입니다.
- `output_shape`는 ONNX 모델의 출력 차원을 나타내는 배열입니다.
- 이 API를 통해 프론트엔드에서는 모델의 입력 차원과 출력 차원을 동적으로 파악하여 시뮬레이터 페이지를 구성할 수 있습니다.

## 2. 시뮬레이션 실행 API

- API 엔드포인트: `POST /predict`
- 요청 데이터:
  ```json
  {
    "data": [input_data]
  }
  ```
- `data`는 시뮬레이션을 위한 입력 데이터를 나타내는 배열입니다.
- 입력 데이터의 차원은 ONNX 모델의 입력 차원과 일치해야 합니다.
- 응답 데이터:
  ```json
  {
    "predictions": [output_data]
  }
  ```
- `predictions`는 시뮬레이션 실행 결과를 나타내는 배열입니다.
- 출력 데이터의 차원은 ONNX 모델의 출력 차원과 일치해야 합니다.

## 3. 오류 처리

- 입력 데이터의 차원이 올바르지 않은 경우 적절한 오류 메시지와 함께 400 Bad Request 상태 코드를 반환해주세요.
- 서버 내부 오류가 발생한 경우 적절한 오류 메시지와 함께 500 Internal Server Error 상태 코드를 반환해주세요.

## 4. CORS 설정

- 프론트엔드에서 API 엔드포인트에 접근할 수 있도록 CORS(Cross-Origin Resource Sharing)를 설정해주세요.
- 필요한 경우 특정 도메인만 허용하도록 제한할 수 있습니다.

## 5. 테스트 및 문서화

- 구현된 API 엔드포인트에 대한 테스트를 진행하여 정상적으로 동작하는지 확인해주세요.
- API 문서를 작성하여 프론트엔드 개발자가 API를 쉽게 이해하고 사용할 수 있도록 해주세요.
- 테스트 케이스와 예상 응답 데이터를 포함하여 문서화해주시면 더욱 좋습니다.

위 요구사항을 참고하여 ONNX 모델 API 엔드포인트를 구현해주시기 바랍니다. 구현 과정에서 궁금한 점이나 추가적인 요구사항이 있다면 언제든 말씀해주세요. 원활한 협업을 위해 노력하겠습니다.

감사합니다.