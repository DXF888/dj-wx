import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';
import { indexBannerSize, indexbannerUrl } from '../../config/index';
import { Carousel, WingBlank, ActivityIndicator, Flex, Button, WhiteSpace } from 'antd-mobile';

import './Dj_Details_banquet-details.less';


function taoc_xq(data2){
	let thisURL = location.hash;
	let getval = thisURL.split('/');
	var Id3 = getval.slice(2,3).join();
	if(Id3 == 'emcee'){
			return (
				<div>
				<h3>{data2.packageinfo.packagename}</h3>
					<table>
						<tbody>
							<tr>
								<td>外景:</td>
								<td className='msg'>{data2.packageinfo.islocation}</td>
								<td>入盘/张:</td>
								<td>{data2.packageinfo.intocd}</td>
								<td>相册:</td>
								<td>{data2.packageinfo.isalbum}</td>
								<td>新娘造型/套:</td>
								<td>{data2.packageinfo.bridalstyling}</td>
							</tr>
							<tr>
								<td>摄影:</td>
								<td className='msg'>{data2.packageinfo.isphotography}</td>
								<td>精修/张:</td>
								<td>{data2.packageinfo.refinement}</td>
								<td>化妆:</td>
								<td>{data2.packageinfo.ismakeup}</td>
								<td>新郎化妆/套:</td>
								<td>{data2.packageinfo.groomstyling}</td>
							</tr>
							<tr>
								<td>内景:</td>
								<td className='msg'>{data2.packageinfo.isinterior}</td>
								<td>拍摄/张:</td>
								<td>{data2.packageinfo.shot}</td>
							</tr>
							<tr><td colSpan='8'>{data2.packageinfo.info}</td></tr>
							</tbody>
				</table>
			</div>
			)
	}else if(Id3 == 'dresser'){
			return (
				<div>
					<h3>{data2.packageinfo.packagename}</h3>
					<p className='info'>{data2.packageinfo.info}</p>
				</div>
			)
	}else if(Id3 == 'photographer'){
			return (
				<div>
				<h3>{data2.packageinfo.packagename}</h3>
				<p className='info'>{data2.packageinfo.info}</p>
			</div>
			)
	}else if(Id3 == 'camera'){
			return (
				<div>
				<h3>{data2.packageinfo.packagename}</h3>
				<p className='info'>{data2.packageinfo.info}</p>
			</div>
			)
	}else if(Id3 == 'actor'){
			return (
				<div>
				<h3>{data2.packageinfo.packagename}</h3>
				<p className='info'>{data2.packageinfo.info}</p>
				<table>
						<tbody>
							<tr>
								<td>颜色:</td>
								<td className='msg'>{data2.packageinfo.color}</td>
								<td>类型:</td>
								<td>{data2.packageinfo.type}</td>
								<td>型号:</td>
								<td>{data2.packageinfo.model}</td>
							</tr>
							</tbody>
				</table>
			</div>
			)
	}
}

class Banquet_details extends React.Component {
	constructor(props) {
		console.log("构造函数");
		super(props);
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(-1).join();
		this.Id1 = getval.slice(2,3).join();
		
		this.url = '';
		this.argt = '';
		
		
		console.log(this.Id1);
		this.state = {
			loadinig: true,
			data: [],
			show: true,
			id: Id,
		};
	}
	render() {
		const { data, loadinig, show } = this.state;
		
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
							{taoc_xq(data)}
						</div>
						</div>
	  		  	        : null
	  		  	  }
	  		    </div>
	  		    : null
	  	  }
	  	</div>
		);
	}
	componentDidMount() {
		if(this.Id1 == 'emcee'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_emcee_package_info';
			this.argt = 'emceeid';
		}else if(this.Id1 == 'dresser'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_dresser_package_info';
			this.argt = 'dresserpackageid';
		}else if(this.Id1 == 'photographer'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_photographer_package_info';
			this.argt = 'photographerpackageid';
		}else if(this.Id1 == 'camera'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_camera_package_list';
			this.argt = 'cameraid';
		}else if(this.Id1 == 'actor'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_actor_package_list';
			this.argt = 'actoridid';
		}
		var argt = {
			[this.argt] : this.state.id,
		};
		fetchData(this.url, argt)
			.then((_data) => {
				console.log(_data);
				this.setState({
					loadinig: false,
					data: _data.response
				});
			});
	}
};

export default Banquet_details;