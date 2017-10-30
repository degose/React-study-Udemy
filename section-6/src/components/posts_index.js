import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';
import { fetchPosts } from '../actions/index';

// export default () => {
//   return <div>List of Blog posts</div>
// }

class PostsIndex extends Component {
  componentWillMount() {
    // 라이프사이클 메소드
    // 해당 함수는 컴포넌트가 처음 DOM에 렌더링 되자마자 자동적으로 호출되는 것.
    // 리렌더링될때 다시 호출되지 않는다. 즉 다시 호출되지 않는다.

    this.props.fetchPosts();
  }

  render() {
    return (
      <div>List of blog posts</div>
    )
  }
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// {fetchPosts: fetchPosts}

export default connect (null, { fetchPosts })(PostsIndex);