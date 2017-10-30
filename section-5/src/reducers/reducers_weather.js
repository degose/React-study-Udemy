import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
  // console.log('Action received', action);

  switch (action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]; // [city, city, city] NOT [city, [city, [city]]]
      // ES6 ... =>  배열에서 모든 엔트리를 가져와서 새 배열에 집어넣는 일종의 형식
      // return state.concat([action.payload.data]);
      // return state.push(action.payload.data);
      // concat은 기존 배열을 바꾸는 것이 아닌 새 배열을 만들어 기존것과 새로운 것을 포함시킨다.
      // 리듀서 안에서는 state값을 바로 바꾸지 않고 스테이트의 새 배열을 생성하여 바꾼다.
  }

  return state;
}