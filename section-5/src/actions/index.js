import axios from 'axios';

const API_KEY = '90474bb0c07da94ad9b45f28533901c1';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';
// 왜 문자열로 하지 않고 따로 변수를 만들어서 가져왔을까? => 액션 생성자와 리듀서 사이에 액션 타입을 계속 일정하게 유지하기 위해

// API리퀘스트 날씨정보 가져오기
export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);
  
  console.log('Request:', request);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}

