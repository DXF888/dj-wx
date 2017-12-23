import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';
import { indexBannerSize, indexbannerUrl } from '../../config/index';
import { Carousel, WingBlank, ActivityIndicator, Flex, Button, WhiteSpace } from 'antd-mobile';

import './Dj_Details_banquet-details.less';

class Banquet_details extends React.Component {
	constructor(props) {
		console.log("构造函数");
		super(props);
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(-1).join();
		let Id1 = getval.slice(2, 3).join();
		console.log(Id);
		console.log(Id1);
		this.state = {
			loadinig: true,
			data: [],
			show: true,
			id: Id,
			id1: Id1
		};
		this.height;
		this.banquet;
		this.xiangqing;
	}
	render() {
		const { data, loadinig, show } = this.state;
		console.log(data);
		
	    const winW = window.document.body.offsetWidth;
	    const winH = window.document.body.offsetHeight;
	    const style = {
    		height: `${indexBannerSize.height * winW / indexBannerSize.width}px`,
     	}
	    const h={
	    	height:winH
	    }
		return(
			<div>
	  	  {
	  		show
	  		  ? <div className='Details-banquet'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ?    
	  		  	      <div className='banquet-xiangqing'>
	  		  	      	<div className='banquet-lunbo' style={style}>
		  		  	        <Carousel
		                      infinite
		                      beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		                      >
		  		  	        	{
		  		  	        		data.picture.map(({ src, img, id }, idx) => (
		  		  	        			<img key={idx} src={'http://120.55.70.81:8088/dajiaserver/'+data.picture[idx]} style={style} />
		  		  	        		))
		  		  	        	}
		  		  	        </Carousel>
	  		  	      	</div>
						<div className='banquet-details-content'>
							<h3>{data.banquet_hall.banquethallname}</h3>
								<table>
									<tbody>
										<tr>
											<td>立柱:</td>
											<td className='msg'>{data.banquet_hall.columns}</td>
											<td>面积:</td>
											<td>{data.banquet_hall.areacovered}</td>
											<td>层高:</td>
											<td>{data.banquet_hall.storey}</td>
										</tr>
										<tr>
											<td>化妆间:</td>
											<td className='msg'>{data.banquet_hall.dressingroom}</td>
											<td>楼层:</td>
											<td>{data.banquet_hall.floor}</td>
											<td>形状:</td>
											<td>{data.banquet_hall.shape}</td>
										</tr>
										<tr>
											<td>最大桌数:</td>
											<td className='msg'>{data.banquet_hall.tablemax}</td>
											<td>是否独立:</td>
											<td>{data.banquet_hall.isindependent}</td>
											<td>最低消费:</td>
											<td>{data.banquet_hall.minimumconsumption}</td>
										</tr>
										<tr>
											<td>最小桌数:</td>
											<td className='msg'>{data.banquet_hall.tablemin}</td>
											<td>适用套餐:</td>
											<td>{data.banquet_hall.package}</td>
										</tr>
									</tbody>
								</table>
							</div>
						</div>
	  		  	        : <div key={idx} className='banquet-details-content'></div>
							
	  		  	  }
	  		    </div>
	  		    : null
	  	  }
	  	</div>
		);
	}
	componentDidMount() {
		this.banquet = document.getElementsByClassName('banquet')[0];
		console.log(this.xiangqing);
		fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_banquet_hall_info', {
				hotelId: this.state.id1,
				banquetHallId: this.state.id,
			})
			.then((_data) => {
				this.setState({
					loadinig: false,
					data: _data.response
				});
				
				this.xiangqing = document.getElementsByClassName('banquet-xiangqing')[0];
				let height = document.body.clientHeight;
				this.banquet.style.height = height + 'px';
				this.xiangqing.style.height = height + 'px';
			});
	}
	
};

export default Banquet_details;