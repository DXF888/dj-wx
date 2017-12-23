import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex ,Button,WhiteSpace} from 'antd-mobile';

import './Dj_Details_banquet.less';


function regularDinner(value,index){
	let thisURL = location.hash;
	let getval = thisURL.split('/');
	
	var Id1 = getval.slice(2,3).join();
	let taocan_value;
	var value = value;
	if(value.emceepackageid !== undefined){
		taocan_value = value.emceepackageid;
	}else if(value.dresserpackageid !== undefined){
		taocan_value = value.dresserpackageid;
	}else if(value.photographerpackageid !== undefined){
		taocan_value = value.photographerpackageid;
	}else if(value.camerapackageid !== undefined){
		taocan_value = value.camerapackageid;
	}else if(value.actorpackageid !== undefined){
		taocan_value = value.actorpackageid;
	}
	return (
		<Link to={`/regularDinner/${Id1}/${taocan_value}`}  key={index} className='banquet_item2'>
		  	<img src={'http://120.55.70.81:8088/dajiaserver/'+value.listimg} />
			<div className='banquet-content'>
				<h3>{value.packagename}</h3>
				<p className='jg'>价格:<span className='jg1'>{value.price}起</span></p>
			</div>
			<span className='examine'>查看详情</span>
		</Link>
	)
}

class Dj_Details_banquet extends React.Component {
	constructor(props){
		super(props);
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(-1).join();
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
	  		  ? <div className='Details-banquet'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ? 
		  		  	        		data.map((value,index) => (
									    regularDinner(value,index)
		  		  	        		))
	  		  	        : data.map(({listimg, banquethallid ,packagename,tablemax}, idx) => (
									      	regularDinner(value,index)
		  		  	        		))
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
		  	if(_data.response.length !== 0){
		  		this.setState({
		  				loadinig:false,
		  				data: _data.response
		  		});
		  	}else{
		  		this.setState({
		  			show:false,
		  		});
		  	}
		  });
	}
};

export default Dj_Details_banquet;
