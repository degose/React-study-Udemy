// 액션 생성자의 목적은 블로그 포스트를 API로 부터 가져오는 것이다.
import axios from 'axios';

// 액션 타입 정의
export const FETCH_POSTS = 'FETCH_POSTS';

const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=slkejlfkjslaasee';

export function fetchPosts() {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  return {
    type: FETCH_POSTS,
    payload: request
  };
}