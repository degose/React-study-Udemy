import React, {Component} from 'react';

export default class BookList extends Component {
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