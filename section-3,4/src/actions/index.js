// 여기는 왜 export default 가 아니라 export 만 썼을까,.,,,?
export function selectBook(book) {
  // console.log('A book has been selected:', book.title);

  // 선택한 책은 액션 생성자고 액션 반환이 필요하다. 타입 프로퍼티 오브젝트이다.
  return {
    // 모든 액션은 목적에 따른 타입을 가지고 있어야 한다.
    type: 'BOOK_SELECTED',
    payload: book
  };
}

