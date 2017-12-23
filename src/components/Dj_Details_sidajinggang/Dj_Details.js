import React from 'react';
import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator} from 'antd-mobile';

import './Dj_Details.less';

function sida_xq(data2){
	var info2 = ''
	if(data2.emceeinfo !== undefined){
			info2 = data2.emceeinfo;
		}else if(data2.dresserinfo !== undefined){
			info2 = data2.dresserinfo;
		}else if(data2.photographerinfo !== undefined){
			info2 = data2.photographerinfo;
		}else if(data2.camerainfo !== undefined){
			info2 = data2.camerainfo;
		}else if(data2.actorinfo !== undefined){
			info2 = data2.actorinfo;
		}
	return (
		<div>
			<h1>{info2.businessname}</h1>
			<p className='sc'>评分<span>({info2.score})</span>评论<span>({info2.evaluate})</span>收藏<span>({info2.collection})</span> <span className='collect'></span></p>
			<p className='address'><span>{info2.address}</span> <span className='phone'></span> </p>
		</div>
	)
}

class Dj_Details extends React.Component {
	
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
		  		  ? <div className='Boutique-recommend'>
		  		  	  {
		  		  	    loadinig
		  		  	      ? <ActivityIndicator text="正在加载" />
		  		  	      : data.length != 0
		  		  	        ? 
		  		  	        	<WingBlank key={1}>
									<div className='recommend-top'>
										{sida_xq(data)}
									</div>
		  		  	        	</WingBlank>
		  		  	        : <WingBlank key={1}>
		  		  	        	<div className='recommend-top'>
										{sida_xq(data)}
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
			var argt = {
				[this.props.argt] : this.state.id,
			};
			fetchData(this.props.url,argt)
			  .then((_data) => {
			  	console.log(_data);
			  	if(_data.response.info != ''){
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