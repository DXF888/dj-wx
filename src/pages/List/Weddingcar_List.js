import React from 'react';
import { Link } from 'react-router-dom';

import {Tabs ,ListView, ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';

import WeddingPhotography_list from '../../components/Dj_filtrate/weddingPhotography_list';
import MallItem6 from '../../components/Dj_MallItem/List_wedding_car';

import List_Header from '../../components/Dj_List/Dj_List_Header';

import "./weddingCar.less";

class WeddingPhotography_List extends React.Component {
	constructor(props) {
	    super(props);
	    console.log(props);
	    let getval = props.match.url.split('/');
		let Mingchen = getval.slice(-1).join();
	    this.state = {
	    	mingchen : Mingchen,
	    	url : 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_car_list',
	    	childComponent : MallItem6,
	    }
   	}
	
	render() {
		return (
			<div className='weddingcar'>
				<List_Header mingchen={this.state.mingchen} />
				<WeddingPhotography_list childComponent={this.state.childComponent}  url={this.state.url} />
			</div>
		);
	}
}
  
export default WeddingPhotography_List;