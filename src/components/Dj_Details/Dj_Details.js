import React from 'react';
import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator} from 'antd-mobile';

import './Dj_Details.less';

class Dj_Details extends React.Component {
	
		constructor(props){
			super(props);
			let thisURL = location.hash;
			let getval = thisURL.split('/');
			let Id = getval.slice(-1).join();
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
		  		  ? <div className='Boutique-recommend'>
		  		  	  {
		  		  	    loadinig
		  		  	      ? <ActivityIndicator text="正在加载" />
		  		  	      : data.length != 0
		  		  	        ? 
		  		  	        	<WingBlank key={1}>
									<div className='recommend-top'>
										<h1>{data.hotelinfo.businessname}</h1>
										<p className='sc'>评分<span>({data.hotelinfo.score})</span>评论<span>({data.hotelinfo.evaluate})</span>收藏<span>({data.hotelinfo.collection})</span> <span className='collect'></span></p>
										<p className='address'><span>{data.hotelinfo.address}</span> <span className='phone'></span> </p>
									</div>
		  		  	        	</WingBlank>
		  		  	        : <WingBlank key={1}>
		  		  	        	<div className='recommend-top'>
										<h3>{hotelinfo.businessname}</h3>
										<p>评分{hotelinfo.score}评论{hotelinfo.evaluate}收藏{hotelinfo.collection}</p>
								</div>
		                       </WingBlank>
		              }
		  		   	</div>
		  		    : null
		  	  }
		  	</div>
		  );
		}
		
		
		componentDidMount() {
			console.log(this.props);
			fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_info',
			{
				hotelId:this.state.id
			})
			  .then((_data) => {
			  	if(_data.response.hotelinfo != ''){
			  		this.setState({
			  				loadinig:false,
			  				data: _data.response,
			  		});
			  	}else{
			  		this.setState({
			  			show:false,
			  		});
			  	}
			  });
		}
		
}





export default Dj_Details;