# :bulb: lol - dex

## :tada: 프로젝트 소개

게임 리그오브레전드의 챔피언 리스트, 아이템 리스트, 챔피언 로테이션을 확인할 수 있음

## :rocket: 배포 링크

https://lol-dex-alpha.vercel.app/

## :receipt: 주요 기능 소개

### :one: 홈페이지

- 렌더링 방식 : Server Side Rendering (SSR)
- 각 상세페이지로 이동할 수 있음
- 메타데이터 설정을 통해 SEO향상
- 다크모드 기능으로 UX향상
- 반응형

### :two: 챔피언 리스트 페이지

- 렌더링 방식 : Incremental Static Regeneration (ISR)
- ISR방식으로 정보가 하루마다 갱신됨
- 이미지 최적화를 위해 `<Image>` 사용
- LIstCard 컴포넌트로 재사용성을 높임

### :three: 챔피언 상세 페이지

- 렌더링 방식 : Server Side Rendering (SSR)
- 페이지별 메타데이터 설정
- 동적 라우팅으로 id에 따라 페이지 생성

### :four: 아이템 리스트 페이지

- 렌더링 방식 : Static Site Generation (SSG)
- 아이디, 비밀번호, 이름 값 등록
- 프로필 이미지

### :five: 챔피언 로테이션

- 렌더링 방식 : Client Side Rendering (CSR)
- 현재 무료로 플레이 가능한 챔피언들을 확인할 수 있는 페이지
- 로테이션 데이터는 주기적으로 변경되므로 클라이언트에서 최신 데이터를 가져옴

## 소감

- 다양한 렌더링 방식을 이용해 헷갈리기도 했지만 이번 프로젝트를 하면서 어느정도 개념을 이해한 것 같다.
