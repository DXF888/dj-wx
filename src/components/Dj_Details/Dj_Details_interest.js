import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex} from 'antd-mobile';

import './Dj_Details_interest.less';

class Details_interest extends React.Component {
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
	  		  ? <div className='Details-interest'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ? 
		  		  	        		<WingBlank key={1}>
		  		  	        		{
		  		  	        			data.map(({listimg, hotelid ,businessname,pricemin}, idx) => (
									      	<Link to={`/detail/${hotelid}`} href={idx} key={idx} className='interest_item'>
		  		  	        					<img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
												<div className='recommend-top'>
													<h3>{businessname}</h3>
													<p>￥{pricemin}{/*<span>销量:{999}</span>*/}</p>
												</div>
		  		  	        				</Link>
		  		  	        		))}
		  		  	        		</WingBlank>
	  		  	        : data.map(({listimg, hotelid ,businessname,address}, idx) => (
		  		  	        			<WingBlank key={idx}>
									      	<Link to={`/detail/${hotelid}`} href={idx} key={idx} className='interest_item'>
		  		  	        					<img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
												<div className='recommend-top'>
													<h3>{businessname}</h3>
													<p>￥{pricemin}{/*<span>销量:{999}</span>*/}</p>
												</div>
		  		  	        				</Link>
		  		  	        			</WingBlank>
		  		  	        		))
	  		  	  }
	  		    </div>
	  		    : null
	  	  }
	  	</div>
	  );
	}
	componentDidMount() {
		fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_home_page',{
				hotelId:this.state.id
			})
		  .then((_data) => {
		  	if(_data.response.hotel_recommend.length !== 0){
		  		this.setState({
		  				loadinig:false,
		  				data: _data.response.hotel_recommend,
		  		});
		  	}else{
		  		this.setState({
		  			show:false,
		  		});
		  	}
		  });
	}
};

export default Details_interest;
