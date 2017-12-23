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
							<h3>{data.caseinfo.name}</h3>
							<p>{data.caseinfo.info}</p>
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
		var argt = {
				caseid : this.state.id,
			};
		fetchData(this.props.url, argt)
			.then((_data) => {
				this.setState({
					loadinig: false,
					data: _data.response
				});
			});
	}
};

export default Banquet_details;