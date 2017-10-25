import React from 'react';
// react 라이브러리를 불러왔다.(코어 라이브러리)
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

// YouTube Data API v3 사용자 인증 키
// $ npm install --save youtube-api-search
const API_KEY = 'AIzaSyCjFQtFxm-VbzeEPGOURRoAbDcVk7O0jWc';


// 새 컴포넌트. 
// Create a new component. This component should produce
// some HTML
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
  // const : ES6 표현 중 하나 이전에는 변수 선언에 var 를 사용 -> const로 선언한 변수는 절대로 변하지 않는 상수. 재할당 되지 않는다.
  // JSX : 부분적인 템플릿 혹은 변형된 자바스크립트 표면적으로 보이지 않는 자바스크립트
}

// 리액트야 내가 만든 컴포넌트를 html로 넣어줘
// Take This Components generated HTML and Put it
// on the page (in the DOM)

// React.render(App);
// 에러 메세지: React.render is deprecated. Please use ReactDOM.render from require('react-dom') instead.

// ReactDOM.render(App);
// 에러 메세지: ReactDOM.render(): Invalid component element. Instead of passing a component class, make sure to instantiate it by passing it to React.createElement. => DOM에 렌더링하기 전에, 컴포넌트를 인스턴스화 해야한다!!


// ReactDOM.render(<App />);
// JSX에서 태그 사이에 아무것도 없으면 <App></App> 을 <App />으로 쓸 수 있다.
// 에러 메세지: _registerComponent(...): Target container is not a DOM element. => 타겟 컨테이너는 DOM요소가 아니다. => ReactDOM이 이를 렌더링하지만 어디서 렌더링해야할지 모르겠다.

ReactDOM.render(<App />, document.querySelector('.container'));
// index.html 에 루트 html노드 자식으로 보내자!
