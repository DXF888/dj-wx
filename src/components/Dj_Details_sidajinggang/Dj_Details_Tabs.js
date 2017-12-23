import React from 'react';
import { Tabs, WhiteSpace } from 'antd-mobile';
import Dj_Details from './Dj_Details';
import Dj_Details2 from './Dj_Details2';
import Dj_Details3 from './Dj_Details3';
import Dj_Details_banquet from './Dj_Details_banquet';
import Dj_Details_case from './Dj_Details_case';
import Details_interest from './Dj_Details_interest';
import Details_interest2 from './Dj_Details_interest2';
import Banquet_details from './Dj_Details_banquet-details.js';

import Dj_comment from '../Dj_comment/comment';
import './Dj_Details_Tabs.less';


class Dj_Details_Tabs extends React.Component {
	constructor(props){
		super(...props);
		this.url = '';
		this.argt = '';
	}
  render() {
    let thisURL = location.hash;
	let getval = thisURL.split('/');
	let Id = getval.slice(2,3).join();
	var tabs_title = '';
		if(Id == 'emcee'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_emcee_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_emcee_package';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_emcee_vedio_list';
			this.argt = 'emceeid';
			tabs_title = '视频'
		}else if(Id == 'dresser'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_dresser_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_dresser_package';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_dresser_case_list';
			this.argt = 'dresserid';
			tabs_title = '案例'
		}else if(Id == 'photographer'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_photographer_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_photographer_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_photographer_case_list';
			this.argt = 'photographerid';
			tabs_title = '案例'
		}else if(Id == 'camera'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_camera_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_camera_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_camera_vedio_list';
			this.argt = 'cameraid';
			tabs_title = '视频'
		}else if(Id == 'actor'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_actor_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_actor_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_actor_vedio_list';
			this.argt = 'actorid';
			tabs_title = '视频'
		}
	const tabs = [
      { title: '首页' },
      { title: tabs_title },
      { title: '评论' },
    ];
    return (
      <div className='Tabs'>
        <Tabs tabs={tabs}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          	<div className='tab-content'>
				  	<WhiteSpace size='xs' />
				  	<Dj_Details_banquet url={this.url2} argt={this.argt} / >
				  	<Dj_Details2 url={this.url} argt={this.argt} />
				  	<WhiteSpace size='xs' />
				  	<Details_interest2 />
				  	<Details_interest url={this.url} argt={this.argt} />
			</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          	<div className='tab-content'>
			      	<Dj_Details_case url={this.url3} argt={this.argt} />
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