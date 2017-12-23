import React from 'react';
import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex} from 'antd-mobile';

import './Dj_Details2.less';

function dianp_jj(data2){
	let thisURL = location.hash;
	let getval = thisURL.split('/');
	var Id6 = getval.slice(2,3).join();
	console.log(Id6);
	if(Id6 == 'emcee'){
			return (
				<div>
				<h1>司仪简介</h1>
				<p>{data2.info}</p>
			</div>
			)
	}else if(Id6 == 'dresser'){
			return (
				<div>
					<h1>化妆师简介</h1>
					<p>{data2.info}</p>
				</div>
			)
	}else if(Id6 == 'photographer'){
			return (
				<div>
				<h1>工作室简介</h1>
				<p className='info'>{data2.info}</p>
			</div>
			)
	}else if(Id6 == 'camera'){
			return (
				<div>
				<h1>摄像简介</h1>
				<p>{data2.info}</p>
			</div>
			)
	}else if(Id6 == 'actor'){
			return (
				<div>
				<h1>演员简介</h1>
				<p className='info'>{data2.info}</p>
			</div>
			)
	}
}




class Dj_Details2 extends React.Component {
		constructor(props){
			super(props);
			var thisURL = location.hash;
			var getval = thisURL.split('/');
			this.Id = getval.slice(-1).join();
			
			this.state = {
				loadinig: true,
				data: [],
				show: true,
				id:this.Id
			};
		}
	
		render() {
		  const { data,loadinig, show } = this.state;
		  return (
		  	<div>
		  	  {
		  		show
		  		  ? <div className='jianjie'>
		  		  	  {
		  		  	    loadinig
		  		  	      ? <ActivityIndicator text="正在加载" />
		  		  	      : data.length != 0
		  		  	        ? 
		  		  	        	<WingBlank key={1}>
									<div className='recommend-top'>
										{dianp_jj(data)}
									</div>
		  		  	        	</WingBlank>
		  		  	        : <WingBlank key={1}>
		  		  	        	<div className='recommend-top'>
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
			  	if(_data.response != ''){
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





export default Dj_Details2;