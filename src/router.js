import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import List from './pages/List/List';
import Detail from './pages/Detail/Detail';


function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" exact component={IndexPage} />
        <Route path="/List/:category"  component={List} />
        <Route path="/Detail/:id" component={Detail} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
