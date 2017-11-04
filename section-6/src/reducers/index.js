import { combineReducers } from 'redux';
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form';
// redux-form으로부터 reducer를 불러오는데, formReducer 변수로 생성하는것. -> 이는 다른 리듀서에서 불러오는 부분에 대해서 이름이 충돌할 가능성을 없애기 위한 용도

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
