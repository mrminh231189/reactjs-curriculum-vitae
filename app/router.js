import React from 'react';
import { Router, Route, useRouterHistory, IndexRoute } from 'react-router';
import { createHistory, useBasename } from 'react-router/node_modules/history';
// Layouts
import MainLayout from './components/main-layout';
import SearchLayout from './components/search-layout';

// Pages
import Home from './components/home';
import UserList from './components/user-list';
import UserProfile from './components/user-profile';
import WidgetList from './components/widget-list';

const browserHistory = useRouterHistory(createHistory)({
  basename: "/reactjs-curriculum-vitae"
});

export default (
  <Router history={browserHistory}>
    <Route path="/" component={MainLayout}>
      <IndexRoute component={Home} />

      <Route path="users">
        <Route component={SearchLayout}>
          <IndexRoute component={UserList} />
        </Route>
        <Route path=":userId" component={UserProfile} />
      </Route>

      <Route path="widgets">
        <Route component={SearchLayout}>
          <IndexRoute component={WidgetList} />
        </Route>
      </Route>

    </Route>
  </Router>
);
