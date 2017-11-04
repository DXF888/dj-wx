import React from 'react';
import fetchData from '../../utils/fetchData';

import { Flex, WhiteSpace,WingBlank, ActivityIndicator} from 'antd-mobile';

import './Dj_Details3.less';

class Dj_Details3 extends React.Component {
	
		constructor(props){
			super(props);
			this.state = {
				loadinig: true,
				data: [],
				show: true,
			};
		}
	
		render() {
		  const { data,loadinig, show } = this.state;
		  return (
		  	<div>
		  	  {
		  		show
		  		  ? <div className='Boutique-recommend huodong'>
		  		  	  {
		  		  	    loadinig
		  		  	      ? <ActivityIndicator text="正在加载" />
		  		  	      : data.length != 0
		  		  	        ? 
		  		  	        	<WingBlank key={1}>
									<Flex>
								      <Flex.Item className='li'>暂无相关活动</Flex.Item>
								      <Flex.Item className='hui'>暂无相关活动</Flex.Item>
								    </Flex>
									<Flex>
								      <Flex.Item className='jian'>暂无相关活动</Flex.Item>
								      <Flex.Item className='fan'>暂无相关活动</Flex.Item>
								    </Flex>
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
			fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_info',
			{
				hotelId:125
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





export default Dj_Details3;