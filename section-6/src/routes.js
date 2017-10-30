import React from 'react';
import { Route, IndexRoute } from 'react-router';
// IndexRoute는 Route와 비슷하게 작동하지만 해당 url을 자식이 아닌 부모인 path만 매치시킨다.

import App from './components/app';
import PostsIndex from './components/posts_index';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={PostsIndex} />
  </Route>
);
