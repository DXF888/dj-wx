import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Dj_Details from './Dj_Details';
import Dj_Details2 from './Dj_Details2';
import Dj_Details3 from './Dj_Details3';
import Dj_Details_banquet from './Dj_Details_banquet';
import Dj_Details_menu from './Dj_Details_menu';
import Details_interest from './Dj_Details_interest';
import Details_interest2 from './Dj_Details_interest2';
import Banquet_details from './Dj_Details_banquet-details.js';

import Dj_comment from '../Dj_comment/comment';
import './Dj_Details_Tabs.less';

class Dj_Details_Tabs extends React.Component {

  render() {
    const tabs = [
      { title: '首页' },
      { title: '婚宴菜单' },
      { title: '评论' },
    ];

    return (
      <div className='Tabs'>
        <Tabs tabs={tabs}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          	<div className='tab-content'>
			  	<WhiteSpace size='xs' />
			  	<Dj_Details_banquet />
			  	<Dj_Details2 />
			  	<WhiteSpace size='xs' />
			  	<Details_interest2 />
			  	<Details_interest />
		    </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          	<div className='tab-content'>
		      	<Dj_Details_menu />
		    </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          	<div className='tab-content'>
		      	<Dj_comment />
		    </div>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Dj_Details_Tabs;