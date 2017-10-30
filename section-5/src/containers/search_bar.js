import React, {Component} from 'react';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = { term: ''};

    // 콜백 컨텍스트 이슈 해결
    // 아래 onInputChange 함수안에 this.setState의 this를 찾지 못하는 이슈
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // 모든 DOM 이벤트 헨들러인 onChange, onClick, onHover, onScroll... 은 이벤트 오브젝트가 따라온다.
  onInputChange(event) {
    console.log(event.target.value);
    this.setState({term: event.target.value})
  }

  onFormSubmit(event) {
    // 브라우저의 전체 form으로 제출하려는 것을 막는다.
    event.preventDefault();

    // 날씨 데이터 가져오기
    this.props.fetchWeather(this.state.term);
    // 검색이 끝나면 초기화하기
    this.setState({term: ''});
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Get a five-day forecast in your favorite cities"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({fetchWeather}, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
// null => 리덕스가 스테이트를 유지하고 있으니 컨테이너가 이에대해 신경쓰지 말아라. 어떤 스테이트도 필요없다.