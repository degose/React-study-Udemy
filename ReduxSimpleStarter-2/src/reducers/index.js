import { combineReducers } from 'redux';
import BooksReducer from './reducer_books';
import ActiveBook from './reducer-active-book';

// 리듀서는 어플리케이션 스테이트를 반환하는 함수

const rootReducer = combineReducers({
  books: BooksReducer,
  activeBook: ActiveBook
});

export default rootReducer;
