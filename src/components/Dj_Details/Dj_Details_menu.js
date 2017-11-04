import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex ,Button,WhiteSpace} from 'antd-mobile';

import './Dj_Details_menu.less';

class Dj_Details_menu extends React.Component {
	constructor(props){
		super(props);
		var thisURL = location.hash;
		var getval = thisURL.split('/');
		var Id = getval.slice(-1).join();
		this.state = {
			loadinig: true,
			data: [],
			show: true,
			id:Id
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
		  		  	        		data.map(({bigpackagename, packageprice }, idx) => (
									      	<Link to={`/detail/${idx}`} href={idx} key={idx} className='menu_item'>
												<p>菜单名称:<span className='cdm'>{bigpackagename}</span><span className='jq'>价格:<span className='ys'>{packageprice}/桌></span></span></p>
		  		  	        				</Link>
		  		  	        		))
	  		  	        : data.map(({listimg, banquethallid ,businessname,tablemax}, idx) => (
									    <Link to={`/detail/menu/${idx}`} href={idx} key={idx} className='menu_item'>
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
				hotelId:this.state.id
			})
		  .then((_data) => {
		  	console.log(_data);
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

export default Dj_Details_menu;
