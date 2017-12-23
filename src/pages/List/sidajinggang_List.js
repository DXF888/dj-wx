import React from 'react';
import { Link } from 'react-router-dom';

import {Tabs ,ListView, ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';
import Sidajinggang_List from '../../components/Dj_filtrate/sidajinggang_list';
import List_Header from '../../components/Dj_List/Dj_List_Header';
import MallItem5 from '../../components/Dj_MallItem/List_sidajinggang';
import Hotel_filtrate from '../../components/Dj_filtrate/filtrate5';
import "./sidajinggang_List.less";

class WeddingPhotography_List extends React.Component {
	constructor(props) {
	    super(props);
	    let getval = props.match.url.split('/');
		let Mingchen = getval.slice(-1).join();
	    this.state = {
	    	mingchen : Mingchen,
	    	url : '',
	    	childComponent : MallItem5,
	    	newData : {
	    		sortorder: '',
	    		page:1
	    	},
	    	flag : false
	    }
   	}
	amend(msg){
  	console.log(msg);
  	this.setState({
  		newData:msg
  	});
  	console.log(this.state.newData);
  }
	render() {
		const tabs = [
	      { title: '司仪' },
	      { title: '化妆' },
	      { title: '摄影' },
	      { title: '摄像' },
	      { title: '演员' }
	    ];
		return (
			<div className='sidajinggang'>
				<List_Header mingchen={this.state.mingchen} />
				<div className='Tabs sticky'>
			        <Tabs tabs={tabs}
			        >
			          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			          	<div className='tab-content'>
			          		{/*<Hotel_filtrate amend = {msg => this.amend(msg)} />*/}
					      	<Sidajinggang_List sida_type = 'emcee' childComponent={this.state.childComponent} newData = {this.state.newData}  url='http://120.55.70.81:8088/dajiaserver/Rest/shop/get_emcee_list' />
					    </div>
			          </div>
			          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			          	<div className='tab-content'>
			          		{/*<Hotel_filtrate amend = {msg => this.amend(msg)} />*/}
					      	<Sidajinggang_List sida_type = 'dresser'  childComponent={this.state.childComponent} newData = {this.state.newData} url='http://120.55.70.81:8088/dajiaserver/Rest/shop/get_dresser_list' />
					   	</div>
			          </div>
			          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			          	<div className='tab-content'>
			          		{/*<Hotel_filtrate amend = {msg => this.amend(msg)} />*/}
					      	<Sidajinggang_List sida_type = 'photographer' childComponent={this.state.childComponent} newData = {this.state.newData} url='http://120.55.70.81:8088/dajiaserver/Rest/shop/get_photographer_list' />
					    </div>
			          </div>
			          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			          	<div className='tab-content'>
			          		{/*<Hotel_filtrate amend = {msg => this.amend(msg)} />*/}
					      	<Sidajinggang_List sida_type = 'camera' childComponent={this.state.childComponent} newData = {this.state.newData} url='http://120.55.70.81:8088/dajiaserver/Rest/shop/get_camera_list' />
					    </div>
			          </div>
			          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			          	<div className='tab-content'>
			          		{/*<Hotel_filtrate amend = {msg => this.amend(msg)} />*/}
					      	<Sidajinggang_List sida_type = 'actor' childComponent={this.state.childComponent} newData = {this.state.newData} url='http://120.55.70.81:8088/dajiaserver/Rest/shop/get_actor_list' />
					    </div>
			          </div>
			        </Tabs>
		      	</div>
      		</div>
		);
	}
}
  
export default WeddingPhotography_List;