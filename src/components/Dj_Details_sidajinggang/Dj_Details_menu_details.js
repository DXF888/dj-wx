import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';
import Menu_youhui from './Dj_Details_menu_details_youhui';
import Menu_taocan from './Dj_Details_menu_details_taocan';
import Menu_caiming from './Dj_Details_menu_details_caiming';
import Details_header from './Dj_Details_header.js';

import { WingBlank, ActivityIndicator,Flex ,Button,WhiteSpace} from 'antd-mobile';


import './Dj_Details_menu_details.less';

class Dj_Details_menu extends React.Component {
	constructor(props){
		super(props);
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(-1).join();
		let Id1 = getval.slice(2,3).join();
		this.state = {
			loadinig: true,
			data: [],
			show: true,
			id:Id,
			id1:Id1
		};
	}
	
	render() {
	  const { data,loadinig, show } = this.state;
	  console.log(data);
	  return (
	  	<div>
	  	  {
	  		show
	  		  ? <div className='menu-detils'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ? 
			  		  	        			<div>
			  		  	        				<Details_header />
			  		  	        				<p className='tcxq'><span>套餐详情</span></p>
			  		  	        				<div>
			  		  	        					<p className='menu-taocanming'>￥{data[this.state.id].packageprice}/桌<span className='menu-taocanming-s'>{data[this.state.id].bigpackagename}</span></p>
			  		  	        				</div>
			  		  	        				<div className='menu-img'></div>
			  		  	        				{<Menu_caiming />}
			  		  	        				<p className='wenxints'>温馨提示:最终价格以酒店实价为主哦</p>
												{<Menu_youhui />}
			  		  	        				<WhiteSpace size="sm" />
			  		  	        				<p className='tcxq2'><span>精选套餐</span></p>
												{<Menu_taocan />}
			  		  	        			</div>
	  		  	        : data.smallpackagelist.map(({listimg, banquethallid ,businessname,tablemax}, idx) => (
									    <Link to={`/menu/${idx}`} href={idx} key={idx} className='menu_item'>
											<p>菜单名称:<span>{bigpackagename}</span>价格:<span>{packageprice}</span></p>
		  		  	        			</Link>
		  		  	        		))
	  		  	  }
	  		    </div>
	  		    : null
	  	  }
	  	</div>
	  );
	}
	componentDidMount() {
		fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_Package',{
				hotelId:this.state.id1
			})
		  .then((_data) => {
		  	console.log(_data);
		  	if(_data.response.length !== 0){
		  		console.log(_data.response);
		  		this.setState({
		  				loadinig:false,
		  				data: _data.response
		  		});
		  	}else{
		  		this.setState({
		  			show:false,
		  		});
		  	}
		  });
	}
};

export default Dj_Details_menu;
