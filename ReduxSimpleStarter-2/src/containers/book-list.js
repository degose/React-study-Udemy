import React, { Component } from 'react';
// React와 Redux는 함께 만들어진게 아니라 전혀 다른 라이브러리. 둘의 연결하는 역할이 'react-redux'
import { connect } from 'react-redux';

class BookList extends Component {
  renderList() {
    // 리액트 뷰와 리덕스 스테이트를 합쳐주는 것
    return this.props.books.map((book) => {
      return (
        <li key={book.title} className="list-group-item">{book.title}</li>
      );
    });
  }

  render() {
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

function mapStateToProps(state) {
  // booklist 안의 props의 형태로 보여질 것이다.
  // 어플리케이션 스테이트를 가져와 무엇이든지 함수로 반환하고, 컨테이너 안에 어떤 것을 props의 형태로 보여줄지를 나타낸다.
  // 반환되는 어떤 오브젝트든 이 컴포넌트의 this.props로 연결된다.
  return {
    books: state.books
  };
}

// connect 함수는 BookList(컴포넌트)를 가져오고 mapStateToProps(함수)를 가져와 컨테이너를 반환해라.
// 컨테이너는 리덕스에 속한 스테이트를 다룰 수 있는 컴포넌트
// 컨테이너 내보내기
export default connect(mapStateToProps)(BookList);