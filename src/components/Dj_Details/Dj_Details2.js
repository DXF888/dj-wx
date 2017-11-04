import React from 'react';
import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex} from 'antd-mobile';

import './Dj_Details2.less';

class Dj_Details2 extends React.Component {
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
		  		  ? <div className='jianjie'>
		  		  	  {
		  		  	    loadinig
		  		  	      ? <ActivityIndicator text="正在加载" />
		  		  	      : data.length != 0
		  		  	        ? 
		  		  	        	<WingBlank key={1}>
									<div className='recommend-top'>
										<h1>酒店简介</h1>
										<p>{data.hotel_info.info}</p>
										<table>
											<tbody>
											<tr>
												<td>婚房</td>
												<td className='zl'>有</td>
												<td>桌布颜色</td>
												<td className='zl'>{data.hotel_info.tableclothcolor}</td>
												<td>草坪露台</td>
												<td className='zl'>{data.hotel_info.lawnterrace}</td>
											</tr>
											<tr>
												<td>服务费</td>
												<td className='zl'>{data.hotel_info.serverprice}</td>
												<td>价格区间</td>
												<td className='zl'>{data.hotel_info.pricerange}</td>
												<td>最大桌数</td>
												<td className='zl'>{data.hotel_info.tablemax}</td>
											</tr>
											<tr>
												<td>开瓶费</td>
												<td className='zl'>{data.hotel_info.bottleopeningfee}</td>
												<td>自带酒水</td>
												<td className='zl'>{data.hotel_info.isbringwine}</td>
												<td>停车位</td>
												<td className='zl'>{data.hotel_info.parkingspace}</td>
											</tr>
											<tr>
												<td>营业时间</td>
												<td colSpan="2" className='zl time'>{data.hotel_info.businesshours}</td>
											</tr>
											</tbody>
										</table>
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
			fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_home_page',
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





export default Dj_Details2;