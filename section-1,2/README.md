# React

- 참고: http://blog.gaerae.com/2016/04/hello-react.html
- Flux: https://haruair.github.io/flux/docs/overview.html
- Flux와 Redux: https://taegon.kim/archives/5288

### React는 MVC 프레임워크가 아니다.
- UI 컴포넌트를 만드는 일만 한다.
- MVC -> 데이터의 흐름이 양방향 -> 복잡도 증가
- Flux -> MVC의 대안 -> 데이터 흐름이 단방향인 시스템 아키텍처
  - Store: 데이터를 저장 (MVC의 Model)
  - Dispatcher: 데이터를 관리 (MVC의 Controll), Action이 시작될 때 어떻게 Store가 업데이트 되어야 하는지 결정
  - View: Store가 변경된 경우 같이 변경
  - 단방향: 데이터는 단방향으로 흐르고 데이터 계층이 자기가 영향을 미치는 View 업데이트 완료 후 다음 작업을 진행한다.

### JSX(JavaScript XML)
- 템플릿을 사용하지 않아 뷰 로직과 뷰 문법을 통합하여 확장 및 보수가 쉬워졌다.

### Virtual DOM(가상 DOM)
- 데이터가 변할 때 바뀐 부분만을 업데이트
- Virtual DOM에 DOM tree 구조를 가지고 있어 변경이 생기면 구조를 비교하여 최소한의 요소만 DOM에 적용.

### Unidirectional Data Flow(단방향 데이터 흐름)
- 양방향: (상위 컴포넌트 <=> 하위 컴포넌트) -> 양방향 데이터 바인딩을 하게 되면 개발 비용은 일시적으로 적다고 느낄 수 있지만, 장기적으로 데이터 흐름을 이해하기 어려워 개발 비용이 증가
- 단방향: (상위 컴포넌트  => 하위 컴포넌트) 

### Server Side Rendering 지원
- 클라이언트 사이드 렌더링: HTML + JavaScript + Data + View 순으로 진행하는 시간 소요로 초기 구동 속도가 느림.
- 자바스크립트를 실행하지 못하는 검색 엔진 봇들은 처음 렌더링 된 빈 HTML만 수집하기 때문에 콘텐츠가 없다고 판단하므로 검색엔진최적화(SEO)에 취약