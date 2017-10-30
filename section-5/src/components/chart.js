import _ from 'lodash';
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesReferenceLine } from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

// 단지 부모로부터 데이터를 받기 때문에 컨테이너가 아닌 컴포넌트로 제작
// 차트안에서 어떤 스테이트도 사용하지 않고, 단지 부모로부터 props를 받기만 하기때문에 함수형 컴포넌트로 제작한다.

export default (props) => {
  return (
    <div>
      <Sparklines height={120} width={180} data={props.data}>
        <SparklinesLine color={props.color} />
        <SparklinesReferenceLine type="avg" />
      </Sparklines>
      <div>{average(props.data)} {props.units}</div>
    </div>
  );
}