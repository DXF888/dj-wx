import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex} from 'antd-mobile';

import './Dj_Details_interest.less';

class Details_interest extends React.Component {
	constructor(props){
		super(...props);
		var thisURL = location.hash;
		var getval = thisURL.split('/');
		var Id = getval.slice(-1).join();
		this.Id2 = getval.slice(1,2).join();
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
		  		  	        			data.map(({applistimg, hotelid ,studioname,price}, idx) => (
									      	<Link to={`/${this.Id2}/${this.state.id}`} href={idx} key={idx} className='interest_item'>
		  		  	        					<img src={'http://120.55.70.81:8088/dajiaserver/'+applistimg} />
												<div className='recommend-top'>
													<h3>{studioname}</h3>
													<p>￥{price}{/*<span>销量:{999}</span>*/}</p>
												</div>
		  		  	        				</Link>
		  		  	        		))}
		  		  	        		</WingBlank>
	  		  	        : data.map(({applistimg, hotelid ,studioname,price}, idx) => (
		  		  	        			<WingBlank key={idx}>
									      	<Link to={`/weddingphotography/${hotelid}`} href={idx} key={idx} className='interest_item'>
		  		  	        					<img src={'http://120.55.70.81:8088/dajiaserver/'+applistimg} />
												<div className='recommend-top'>
													<h3>{studioname}</h3>
													<p>￥{price}{/*<span>销量:{999}</span>*/}</p>
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
		var argt = {
			[this.props.argt] : this.state.id,
		};
		fetchData(this.props.url,argt)
		  .then((_data) => {
		  	if(_data.response !== 0){
		  		if(_data.response.emcee_recommend !== undefined){
		  			this.setState({
		  				loadinig:false,
		  				data: _data.response.emcee_recommend,
		  			});
		  		}else if(_data.response.dresser_recommend !== undefined){
		  			this.setState({
		  				loadinig:false,
		  				data: _data.response.dresser_recommend,
		  			});
		  		}else if(_data.response.photographer_recommend !== undefined){
		  			this.setState({
		  				loadinig:false,
		  				data: _data.response.photographer_recommend,
		  			});
		  		}else if(_data.response.camera_recommend !== undefined){
		  			this.setState({
		  				loadinig:false,
		  				data: _data.response.camera_recommend,
		  			});
		  		}else if(_data.response.actor_recommend !== undefined){
		  			this.setState({
		  				loadinig:false,
		  				data: _data.response.actor_recommend,
		  			});
		  		}
		  	}else{
		  		this.setState({
		  			show:false,
		  		});
		  	}
		  });
	}
};

export default Details_interest;
