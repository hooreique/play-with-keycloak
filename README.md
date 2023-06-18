## Play with Keycloak

Keycloak 을 사용하여 간단히 사용자 인증 (회원 가입, 로그인, 로그아웃) 을 구현할 수 있다. [OIDC](https://en.wikipedia.org/wiki/OpenID) (OpenID Connect) 를 사용한다.

[Keycloak Docker image](https://www.keycloak.org/getting-started/getting-started-docker) 를 이용하여 간단하게 Keycloak 을 사용한 예시이다.

[Vue](https://vuejs.org/) 로 구현된 간단한 Front-end 애플리케이션이 함께한다.

## Keycloak

[`https://www.keycloak.org/`](https://www.keycloak.org/)

> Open Source Identity and Access Management

## Prerequisite

- Windows
- Docker Desktop
- Node.js
- [PNPM](https://pnpm.io/) (Optional)

## Getting started

### Run Keycloak container

[`run-my-keycloak.ps1`](./run-my-keycloak.ps1) 을 실행하여 Keycloak 인스턴스를 개발 용으로 실행한다. (컨테이너 이름 `my-keycloak`)

([`stop-my-keycloak.ps1`](./stop-my-keycloak.ps1) 을 실행하여 실행 중인 `my-keycloak` 컨테이너를 종료할 수 있다.)

### Enter the Keycloak admin web interface

[`http://localhost:8333`](http://localhost:8333) 에 접속하여 관리자로 로그인한다.

[`run-my-keycloak.ps1`](./run-my-keycloak.ps1) 파일에서 관리자의 ID PW 를 확인·수정할 수 있다.

### Set up a realm and client

![Figure 1](./figure/fig-1.png)

Realm 을 하나 만든다.

`master` realm 은 Keycloak 인스턴스를 관리하는 realm 으로 여기고 애플리케이션에서 사용하지 않는 것이 좋다.

![Figure 2](./figure/fig-2.png)

이 예제 소스에서는 `my-realm` 이라는 이름을 사용한다.

![Figure 3](./figure/fig-3.png)

Client 를 하나 만든다. Client 는 어떤 Realm 을 사용하는 애플리케이션들이라고 생각하면 된다.

![Figure 4](./figure/fig-4.png)

![Figure 5](./figure/fig-5.png)

이 예제 소스에서는 `my-vue` 라는 Client ID 를 사용한다.

![Figure 6](./figure/fig-6.png)

Capability config 는 특별히 건드리지 않았다. 실제 애플리케이션에 맞는 적절한 설정이 필요할 것이다.

![Figure 7](./figure/fig-7.png)

이 예제 소스는 다음과 같은 Login settings 을 사용한다.

![Figure 8](./figure/fig-8.png)

![Figure 9](./figure/fig-9.png)

![Figure 10](./figure/fig-10.png)

Keycloak UI 에서 회원 가입이 가능하도록 Realm 설정을 한다.

이 Keycloak 관리 UI 에서 User 를 직접 추가할 수도 있다.

![Figure 11](./figure/fig-11.png)

![Figure 12](./figure/fig-12.png)

User registration 항목 빼고는 선택 사항이다.

![Figure 13](./figure/fig-13.png)

![Figure 14](./figure/fig-14.png)

### Run the application (Vue)

```
cd ./vue/
```

```
pnpm install --shamefully-hoist
```

```
pnpm run dev
```

[`http://localhost:3000`](http://localhost:3000)

![Figure 101](./figure/fig-101.png)

![Figure 102](./figure/fig-102.png)

![Figure 103](./figure/fig-103.png)

## Keycloak JavaScript Adapter Reference Doc

[Keycloak JavaScript Adapter Reference Doc](https://wjw465150.gitbooks.io/keycloak-documentation/content/securing_apps/topics/oidc/javascript-adapter.html)
