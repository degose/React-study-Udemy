// import React from 'react';

// Syntactic sugar
// {}는 React라이브러리를 불러와 Component라 부르는 변수를 프로퍼티 형태로 가져오라는 것
import React, { Component } from 'react';

// 함수형 컴포넌트
// const SearchBar = () => {
//   return <input />;
// };

// ES6 클래스 컴포넌트
// 클래스 컴포넌트는 내부적인 정보를 저장하려할때 사용된다.
// ES6 클래스는 자바스크립트의 프로퍼티와 메소드로 이루어짐
// SearchBar라 불리는 클래스를 생성하고 / React.Component로부터 모든 기능을 제공받아라
// class SearchBar extends React.Component {
class SearchBar extends Component {
  // 함수형에는 state가 없고 오직 class형에만 쓸 수 있다.
  // 첫번째로 시작되고, 클래스가 생성될 때마다 자동적으로 실행된다.
  // 변수나 상태값을 초기화할때
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }

  // 항사 render 메소드를 정의하고, JSX를 반환해야한다.
  render() {
    // return <input onChange={this.onInputChange} />;
    return (
      <div className="search-bar">
        <input 
          value={this.state.term} 
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

  // 이벤트 핸들러 : 사용자 입력
  // event는 이벤트를 가지는 요소를 가리킴
  // onInputChange(event) {
  //   // 우리가 모니터링할 코드(input)
  //   console.log('input', event.target.value);
  // }
}

// 내보내고 싶은 코드 어디든 SearchBar를 불러올 수 있다.
export default SearchBar;