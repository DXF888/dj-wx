import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel, ActivityIndicator} from 'antd-mobile';

import fetchData from '../../utils/fetchData';

import { indexBannerSize, indexbannerUrl } from '../../config/index';

import './Dj_Slider.less';

class Example extends React.Component {
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
      const winW = window.document.body.offsetWidth;
      const style = {
    	height: `${indexBannerSize.height * winW / indexBannerSize.width}px`,
     }
	  return (
	  	<div>
	  	  {
	  		show
	  		  ? <div className='index_banner' style={style}>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length > 1
	  		  	        ? <Carousel
	                      infinite
	                      autoplay
	                      >
	  		  	        	{
	  		  	        		data.map(({ src, img, id }, idx) => (
	  		  	        			<Link to={`/detail/${id}`} href={src} key={idx} className='index_banner_item'>
	  		  	        				<img src={'http://120.55.70.81:8088/dajiaserver/'+img} style={style} />
	  		  	        			</Link>
	  		  	        		))
	  		  	        	}
	  		  	        </Carousel>
	  		  	        : data.map(({ src, img, id }, idx) => (
	  		  	        	<Link to={`/detail/${id}`} href={src} key={idx} className="index_banner_item" >
	                          <img src={'http://120.55.70.81:8088/dajiaserver/'+img} />
	                        </Link>
	  		  	        ))
	  		  	  }
	  		    </div>
	  		    : null
	  	  }
	  	</div>
	  );
	}
	componentDidMount() {
		fetchData(this.props.url)
		  .then((_data) => {
		  	if(_data.response.length !== 0){
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
};

export default Example;
