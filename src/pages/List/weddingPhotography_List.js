import React from 'react';
import { Link } from 'react-router-dom';

import { ListView, ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';

import WeddingPhotography_list from '../../components/Dj_filtrate/weddingPhotography_list';
import List_Header from '../../components/Dj_List/Dj_List_Header';
import MallItem from '../../components/Dj_MallItem/List_photography';
import MallItem1 from '../../components/Dj_MallItem/List_dress';
import MallItem2 from '../../components/Dj_MallItem/List_Dessert';
import MallItem3 from '../../components/Dj_MallItem/List_Company';

class WeddingPhotography_List extends React.Component {
	constructor(props) {
	    super(props);
	    console.log(props);
	    let getval = props.match.url.split('/');
		let Mingchen = getval.slice(-1).join();
	    this.state = {
	    	mingchen : Mingchen,
	    	url : '',
	    	childComponent : '',
	    	newData:{
	    		sortorder:'',
	    		page:1
	    	}
	    }
   	}
	
	componentWillMount(){
		console.log(this.state.mingchen);
		if(this.state.mingchen == '婚纱礼服'){
			this.state.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_dress_list';
			this.state.childComponent = MallItem1
		}else if(this.state.mingchen =='婚庆公司') {
			this.state.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_weddingcompany_list';
			this.state.childComponent = MallItem3
		}else if(this.state.mingchen == '婚礼甜点'){
			this.state.url = 'http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_dessert_list';
			this.state.childComponent = MallItem2
		}else if(this.state.mingchen == '婚纱摄影'){
			this.state.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_photography_list';
			this.state.childComponent = MallItem
		}
		console.log(this.state.url);
	}
	
	render() {
		return (
			<div>
				<List_Header mingchen={this.state.mingchen} />
				<WeddingPhotography_list newData={this.state.newData} childComponent={this.state.childComponent}  url={this.state.url} />
			</div>
		);
	}
}
  
export default WeddingPhotography_List;