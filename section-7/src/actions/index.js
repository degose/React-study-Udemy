import axios from 'axios';

export function fetchUsers() {
  const request = axios.get('http://jsonplaceholder.typicode.com/users');

  // 바닐라 리덕스는 플레인 자바스크립트 오브젝트를 액션으로 반환하기를 기대한다.
  // 반면에 Redux Thunk 는 다른 리턴 타입을 이용하게 하고 이는 자바스크립트 함수이다.
  return (dispatch) => {
    request.then(({data}) => {
      dispatch({type: 'FETCH_PROFILES', payload: data})
    });
  };
}
