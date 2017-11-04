import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators} from 'redux';
import { fetchPosts } from '../actions/index';
import { Link } from 'react-router';
// 링크태그 -> 실제 링크처럼 작용하고, anchor 태그랑 엮을 필요가 없고, 다른 라우트나 어플리케이션과 연결할 필요가 없다.


class PostsIndex extends Component {
  componentWillMount() {
    // 라이프사이클 메소드
    // 해당 함수는 컴포넌트가 처음 DOM에 렌더링 되자마자 자동적으로 호출되는 것.
    // 리렌더링될때 다시 호출되지 않는다. 즉 다시 호출되지 않는다.

    this.props.fetchPosts();
  }

  renderPosts() {
    return this.props.posts.map((post) => {
      return (
        <li className="list-group-item" key={post.id}>
          <Link to={"posts/" + post.id}>
            <span className="pull-xs-right">{post.categories}</span>
            <strong>{post.title}</strong>
          </Link>
        </li>
      );
    });

    // return (
    //   <li className="list-group-item">{this.state.posts}</li>
    // )
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link to="/posts/new" className="btn btn-primary">
            Add a Post
          </Link>
        </div>
        <h3>Posts</h3>
        <ul className="list-group">
          {this.renderPosts()}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { posts: state.posts.all };
}

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchPosts }, dispatch);
// }
// {fetchPosts: fetchPosts}

export default connect (mapStateToProps, { fetchPosts })(PostsIndex);