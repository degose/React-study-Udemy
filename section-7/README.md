# 랠리코딩

### 바닐라 Redux
- React + Redux Cycle(동기적)
  - `React` - User clicks something -> `Action Creator` -> `Action` -> `Middleware` -> `Reducer` -> `State` -> `React`
  - 동기적이라는 의미는 액선 생성자를 호출할 때, 즉시 액션을 반환하고 이는 바로 미들웨어로 흘러가 리듀서를 만난다. 그런데 대부분의 웹 어플리케이션을 만들다보면, 이 데이터를 가져오는 것을 비동기적인 채널을 통해 할 필요가 있다. -> 액션 생성자를 호출할때, 데이터를 API로 부터 가져오는 것은 흔한 패턴이다. 
- Redux Thunk의 목적은 우리에게 dispatch 메소드로 바로 컨트롤이 가능하게 한다. dispatch 메소드는 리덕스 스토어가 가지고 있는 부분의 메소드이다.
  - `Action Creator` -> `Action` -> `dispatch` -> `Reducer, Reducer, Reducer ...`

### Redux Thunk

#### Thunk sequence of events
- Time ------>
- `Component call 'fetchUsers'` -> `Request to API made` -> `fetchUsers returns function` -> `RT calls function w/dispatch` -> Time passes... -> `Request resolves` -> `Call dispatch with action`

### Redux + firebase
- ReactFire: https://www.firebase.com/docs/web/libraries/react/
- Bad - Flow of data from Firebase is circumventing Redux
  - `Firebase` <-> `ReactFire` <-> `React` <-> `Redux`
- Good - Redux owns relationship with Firebase
  - `React` <-> `Redux` <-> `Firebase`
- Redux + Firebase
  - `Firebase Ref` -> `event` -> `Action` -> `Reducers` -> `State`