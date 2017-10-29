// state요소는 어플리케이션 state가 아니고, 오직 스테이트는 리듀서가 권한을 가지고 있다.
export default function (state = null, action) {
  // 리덕스는 리듀서가 undefined를 반환하는 것을 허락하지 않음.
  // ES6 에서 어떤 요소가 undefined면 null로 반환해라.
  switch (action.type) {
    case 'BOOK_SELECTED':
      return action.payload;
  }
  return state;
}