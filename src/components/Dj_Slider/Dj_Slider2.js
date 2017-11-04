import React from 'react';
import { Link } from 'react-router-dom';

import { Carousel, ActivityIndicator} from 'antd-mobile';

import fetchData from '../../utils/fetchData';

import { indexBannerSize, indexbannerUrl } from '../../config/index';

import './Dj_Slider.less';

class Example1 extends React.Component {
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
	  		  	        			<Link to={`/detail/${id}`} href={idx} key={idx} className='index_banner_item'>
	  		  	        				<img src={'http://120.55.70.81:8088/dajiaserver/'+data[idx]} style={style} />
	  		  	        			</Link>
	  		  	        		))
	  		  	        	}
	  		  	        </Carousel>
	  		  	        : data.map(({ src, img, id }, idx) => (
	  		  	        	<Link to={`/detail/${id}`} href={src} key={idx} className="index_banner_item" >
	                          <img src={'http://120.55.70.81:8088/dajiaserver/'} />
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
		fetchData(this.props.url,{
			hotelId : this.state.id
		})
		.then((_data) => {
		  	if(_data.response.length !== 0){
		  		this.setState({
		  				loadinig:false,
		  				data: _data.response.picture,
		  		});
		  	}else{
		  		this.setState({
		  			show:false,
		  		});
		  	}
		  });
	}
};

export default Example1;
