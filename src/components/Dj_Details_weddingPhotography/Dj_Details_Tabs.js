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

function Details2(url10,argt10){
	console.log(url10,argt10);
	if(true){
		return <Dj_Details_banquet url={url10} argt={argt10} / >
	}
	
}

class Dj_Details_Tabs extends React.Component {
	constructor(props){
		super(...props);
		this.url = '';
		this.argt = '';
	}
  render() {
    const tabs = [
      { title: '首页' },
      { title: '案例' },
      { title: '评论' },
    ];
    let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(1,2).join();
		if(Id == 'dress'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_dress_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_d_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_d_case_list';
			this.argt = 'weddingdressid';
		}else if(Id == 'weddingphotography'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_photography_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_p_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_case_list';
			this.argt = 'weddingphotographyid';
		}else if(Id == 'company'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_weddingcompany_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_c_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_c_case_list';
			this.argt = 'weddingcompanyid';
		}else if(Id == 'dessert'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_dessert_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_dessert_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_dessert_case_list';
			this.argt = 'dessertid';
		}else if(Id == 'car'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_weddingcar_home_page';
			this.url2 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_car_package_list';
			this.url3 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_car_case_list';
			this.argt = 'weddingcarid';
		}
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