import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';

// middleware는 함수로 액션을 취하고 액션타입과 액션 페이로드, 다른 요소에 의존하여 미들웨어는 액션을 전달하도록 선택하고, 액션을 조작하고, 모든 것을 멈출 수 있다.(액션 가로채기) 이는 리듀서로 가기전에 벌어진다. (일종의 문지기 역할)
const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));
