import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { createPost } from '../actions/index';
import { Link } from 'react-router'

// context 와 props 
// context는 부모에서 자식으로 전달할 필요가 없다는 것
// context를 자식 컴포넌트로 전달할 필요가 없다. 자식 컴포넌트는 이 정보를 부모의 컴포넌트의 context로 부터 접근하고 싶다고 말할 수 있다. (구체적인 전달방법 없이 어플리케이션에서 데이터를 접근하는 가장 쉬운 방법) 하지만 context를 자주 사용하는것은 피해야 한다.
// context를 이용할 유일한 시점은 리액트 라우터로 작업을 할 때이다. -> context API는 여전히 플럭스 안에 있고 리액트의 미래 릴리즈 버전에 바뀔 수도 있기 때문

class PostsNew extends Component {
  // context 타입 프로퍼티 정의, 렌더 컴포넌트나 렌더 메서드 위에 정적인 선언을 한다.
  static contextTypes = {
    router: PropTypes.object
  };

  onSubmit(props) {
    this.props.createPost(props)
    .then(() => { 
      // 블로그 포스트가 생성되고 유저 인덱스로 네이게이팅한다.
      // 그리고 나서 this.context.router.push호출하여 새로운 패스로 네이게이팅한다.
      this.context.router.push('/');
     });
  }

  render() {
    const { fields: { title, categories, content }, handleSubmit } = this.props;
    // console.log(title);
    // ES6 구문 원래는 -> const title = this.props.fields.title;
    // ES6 구문 원래는 -> const handleSubmit = this.props.handleSubmit

    return (
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
        <h3>Create A New Post</h3>

        <div className={`form-group ${title.touched && title.invalid ? 'has-danger' : ''}`}>
        {/* 인풋이 터치되고, 타이틀이 타당하지 않으면 클래스네임(has-danger)을 추가하고 아니면 빈 문자열을 추가해라 */}
        {/* valid 플래그는 불린 값으로 참 혹은 거짓을 반환한다. */}
          <label>Title</label>
          <input type="text" className="form-control" {...title} />
          <div className="text-help">
            {title.touched ? title.error : ''}
            {/* touched는 리덕스 폼의 프로퍼티로서, 유저가 터치 했다고 알려줌 기본이 false */}
          </div>
        </div>

        <div className={`form-group ${categories.touched && categories.invalid ? 'has-danger' : ''}`}>
          <label>Categories</label>
          <input type="text" className="form-control" {...categories} />
          <div className="text-help">
            {categories.touched ? categories.error : ''}
          </div>
        </div>

        <div className={`form-group ${content.touched && content.invalid ? 'has-danger' : ''}`}>
          <label>Content</label>
          <textarea type="text" className="form-control" {...content} />
          <div className="text-help">
            {content.touched ? content.error : ''}
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/" className="btn btn-danger">Cancel</Link>
      </form>
    );
  }
}

function validate(values) {
  const errors = {};

  if (!values.title) {
    errors.title = 'Enter a username';
  }
  if (!values.categories) {
    errors.categories = 'Enter a categories';
  }
  if (!values.content) {
    errors.content = 'Enter a content';
  }

  return errors;
}

// connect: 첫번째 요소는 mapStateToProps(전달을 원하지 않으면 null을 전달할 수 있다.) 이고 두번째는 mapDispatchToProps이다.
// reduxForm: 첫번째는 form config, 두번째는 mapStateToProps, 세번째는 mapDispatchToProps

export default reduxForm({
  form: 'PostsNewForm',
  fields: ['title','categories','content'],
  validate
}, null, { createPost })(PostsNew);


// 유저가 문자열을 작성하면 -> 이것이 어플리케이션 스테이트로 저장돠고 새 스테이트는 form과 formReducer가 된다.
// state === {
//   form: {
//     PostsNewForm: {
//       title: '...',
//       categories: '...',
//       content: '...'
//     }
//   }
// }