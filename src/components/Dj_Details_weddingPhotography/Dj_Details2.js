import React from 'react';
import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex} from 'antd-mobile';

import './Dj_Details2.less';

function dianp_jj(data2){
	let thisURL = location.hash;
	let getval = thisURL.split('/');
	var Id6 = getval.slice(1,2).join();
	console.log(Id6);
	if(Id6 == 'weddingphotography'){
			return (
				<div>
				<h1>店铺简介</h1>
				<p>{data2.info}</p>
				<table>
					<tbody>
					<tr>
					<td>类型:</td>
						<td className='zl'>{data2.type}</td>
						<td>特色:</td>
						<td className='zl'>{data2.characteristic}</td>
					</tr>
					<tr>
						<td>价格区间:</td>
						<td className='zl'>{data2.pricerange}</td>
					</tr>
					</tbody>
				</table>
			</div>
			)
	}else if(Id6 == 'dress'){
			return (
				<div>
					<h1>店铺简介</h1>
				<p>{data2.info}</p>
				<table>
					<tbody>
					<tr>
					<td>类型:</td>
						<td className='zl'>{data2.type}</td>
						<td>特色:</td>
						<td className='zl'>{data2.characteristic}</td>
					</tr>
					<tr>
						<td>价格区间:</td>
						<td className='zl'>{data2.pricerange}</td>
					</tr>
					</tbody>
				</table>
				</div>
			)
	}else if(Id6 == 'company'){
			return (
				<div>
				<h1>公司简介</h1>
				<p className='info'>{data2.info}</p>
			</div>
			)
	}else if(Id6 == 'dessert'){
			return (
				<div>
				<h1>商家简介</h1>
				<p>{data2.info}</p>
				<table>
					<tbody>
					<tr>
					<td>保鲜时间:</td>
					<td className='zl'>{data2.intime}</td>
					<td>甜点种类:</td>
					<td className='zl'>{data2.type}</td>
					<td>是否摆台:</td>
					<td className='zl'>{data2.characteristic}</td>
					</tr>
					<tr>
						<td>摆台时间:</td>
						<td className='zl'>{data2.characteristic}</td>
						<td>价格区间:</td>
						<td className='zl'>{data2.pricerange}</td>
					</tr>
					</tbody>
				</table>
			</div>
			)
	}else if(Id6 == 'car'){
			return (
				<div>
				<h1>婚车简介</h1>
				<p className='info'>{data2.info}</p>
				<table>
						<tbody>
							<tr>
								<td>价格区间:</td>
								<td className='msg'>{data2.pricerange}</td>
							</tr>
							</tbody>
				</table>
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