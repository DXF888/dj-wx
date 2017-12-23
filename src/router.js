import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Hotel_List from './pages/List/Hotel_List';
import WeddingPhotography_List from './pages/List/weddingPhotography_List';
import Weddingcar_List from './pages/List/Weddingcar_List';

import Sidajinggang_List from './pages/List/sidajinggang_List';

import Detail from './pages/Detail/Detail';
import Detail_weddingPhotography from './pages/Detail/Detail_weddingPhotography';
import Detail_dress from './pages/Detail/Detail_dress';
import Detail_company from './pages/Detail/Detail_company';
import Detail_dessert from './pages/Detail/Detail_dessert';
import Detail_emcee from './pages/Detail/Detail_siyi';
import Detail_car from './pages/Detail/Detail_weddingcar';

import Banquet from './pages/Banquet/Banquet';
import Regular_dinner from './pages/Banquet/regular_dinner';
import Menu_details from './components/Dj_Details/Dj_Details_menu_details';

import Case from './pages/Banquet/case';

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path="/" exact component={IndexPage} />
        <Route path="/List/婚宴酒店"  component={Hotel_List} />
        <Route path="/List/婚纱摄影"  component={WeddingPhotography_List} />
        <Route path="/List/婚纱礼服"  component={WeddingPhotography_List} />
        <Route path="/List/婚庆公司"  component={WeddingPhotography_List} />
        <Route path="/List/婚礼甜点"  component={WeddingPhotography_List} />
        <Route path="/List/四大金刚"  component={Sidajinggang_List} />
        <Route path="/List/婚车预定"  component={Weddingcar_List} />
        <Route path="/Detail/:id" component={Detail} />
        <Route path="/weddingphotography/:id" component={Detail_weddingPhotography} />
        <Route path="/dress/:id" component={Detail_dress} />
        <Route path="/company/:id" component={Detail_company} />
        <Route path="/dessert/:id" component={Detail_dessert} />
        <Route path="/emcee/:id" component={Detail_emcee} />
        <Route path="/car/:id" component={Detail_car} />
        
        <Route path="/regularDinner/:id" component={Regular_dinner} />
        <Route path="/banquet/:id" component={Banquet} />
        <Route path="/menu/:id" component={Menu_details} />
        <Route path="/case/:id" component={Case} />
        <Route path="/search" component={Menu_details} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
