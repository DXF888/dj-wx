import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';
import Menu_youhui from './Dj_Details_menu_details_youhui';

import { WingBlank, ActivityIndicator,Flex ,Button,WhiteSpace} from 'antd-mobile';

import './Dj_Details_menu_details_taocan.less';

class Dj_Details_menu_taocan extends React.Component {
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
	  return (
	  	<div>
	  	  {
	  		show
	  		  ? <div className='menu'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ? 
		  		  	        		data.map(({bigpackagename,packageprice}, idx) => (
			  		  	        		<Link to={`/menu/${this.state.id1}/${idx}`} href={idx} key={idx} className='menu_item'>
											<p><span>{bigpackagename}</span><span className='menu-jq'>￥{packageprice}/桌</span></p>
		  		  	        			</Link>
		  		  	        		))
	  		  	        : data.smallpackagelist.map(({listimg, banquethallid ,businessname,tablemax}, idx) => (
									    <Link to={`menu/${this.state.id1}/${idx}`} href={idx} key={idx} className='menu_item'>
											<p><span>{bigpackagename}</span>价格:<span className='jq'>{packageprice}/桌</span></p>
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
		  	if(_data.response.length !== 0){
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

export default Dj_Details_menu_taocan;
