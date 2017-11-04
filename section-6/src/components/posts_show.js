import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchPost, deletePost } from '../actions/index';
import { Link } from 'react-router';

class PostsShow extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  componentWillMount() {
    this.props.fetchPost(this.props.params.id);
    
    // const { id } = this.props.match.params;
    // this.props.fetchPost(id);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id)
    .then(() => { this.context.router.push('/'); })

    // const { id } = this.props.match.params;
    
    // this.props.deletePost(id, () => {
    //   this.props.history.push("/");
    // });
  }

  render() {
    const { post } = this.props;

    // console.log(this.props.post);
    if (!post) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <Link to="/">Back to Index</Link>
        <button 
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Post
        </button>
        <h3>{post.title}</h3>
        <h6>Categories: {post.categories}</h6>
        <p>{post.content}</p>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { post: state.posts.post };
}

// function mapStateToProps({ posts }, ownProps) {
//   return { post: posts[ownProps.match.params.id] };
// }

export default connect(mapStateToProps, { fetchPost, deletePost })(PostsShow);