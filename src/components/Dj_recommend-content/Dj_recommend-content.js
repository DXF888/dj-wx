import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator} from 'antd-mobile';

import './Dj_recommend-content.less';

class Boutique extends React.Component {
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
	  		  ? <div className='Boutique-recommend'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ? 
	  		  	        	data.map(({img, id ,name,type}, idx) => (
	  		  	        		
	  		  	        		<WingBlank key={idx}>
	  		  	        			<Link to={`/detail/${id}`} href={idx} key={idx} className='recommend_item'>
										<div className='recommend-top'>
											<h3>{name}</h3>
											<p>{type}</p>
										</div>
	  		  	        				<img src={'http://120.55.70.81:8088/dajiaserver/'+img} />
	  		  	        			</Link>
	  		  	        		</WingBlank>
	  		  	        	))
	  		  	        : data.map(({img, id ,name,type}, idx) => (
	  		  	        	<Link to={`/detail/${id}`} href={idx} key={idx} className="recommend_item" >
	  		  	        		<div className='recommend-top'>
											<h3>{name}</h3>
											<p>{type}</p>
										</div>
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

export default Boutique;
