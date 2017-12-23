import React from 'react';
import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator} from 'antd-mobile';

import './Dj_Details.less';

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
										<h1>{data.info.businessname}</h1>
										<p className='sc'>评分<span>({data.info.score})</span>评论<span>({data.info.evaluate})</span>收藏<span>({data.info.collection})</span> <span className='collect'></span></p>
										<p className='address'><span>{data.info.address}</span> <span className='phone'></span> </p>
									</div>
		  		  	        	</WingBlank>
		  		  	        : <WingBlank key={1}>
		  		  	        	<div className='recommend-top'>
										<h3>{info.businessname}</h3>
										<p>评分{info.score}评论{info.evaluate}收藏{info.collection}</p>
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