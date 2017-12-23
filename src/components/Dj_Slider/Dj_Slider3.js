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
	  		<div className='index_banner' style={style}>
	  		  	<Carousel
	            infinite
	            autoplay
	            >
	  		  	<Link to='/List/婚宴酒店'>	
	  		  	    <img src='./banner/婚宴酒店.png' style={style} />
	  		  	</Link>
	  		  	    <img src='./banner/婚纱摄影.png' style={style} />
	  		  	    <img src='./banner/婚纱礼服.png' style={style} />
	  		  	    <img src='./banner/婚庆公司.png' style={style} />
	  		  	    <img src='./banner/婚礼甜点.png' style={style} />
	  		  	    <img src='./banner/司仪.png' style={style} />
	  		  	</Carousel>
	  		</div>
	  	  }
	  	</div>
	  );
	}
	componentDidMount() {
		
		{/*fetchData(this.props.url)
		  .then((_data) => {
		  	console.log(_data);
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
		  });*/}
		  
	}
};

export default Example;
