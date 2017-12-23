import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex ,Button,WhiteSpace} from 'antd-mobile';

import './Dj_Details_case.less';

class Dj_Details_case extends React.Component {
	constructor(props){
		super(props);
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(-1).join();
		this.Id1 = getval.slice(1,2).join();
		this.state = {
			loadinig: true,
			data: [],
			show: true,
			id:Id,
		};
	}
	render() {
	  const { data,loadinig, show } = this.state;
	  return (
	  	<div>
	  	  {
	  		show
	  		  ? <div className='case'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ? 
		  		  	        		data.map(({name,caseid, listimg }, idx) => (
											<WingBlank key={idx}>
										      	<Link to={`/case/${this.Id1}/${caseid}`} href={idx} className='case_item'>
														<img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
														<h3>{name}</h3>
			  		  	        				</Link>
											</WingBlank>
		  		  	        		))
	  		  	        : data.map(({listimg, banquethallid ,businessname,tablemax}, idx) => (
									    <WingBlank key={idx}>
										      	<Link to={`/case/${caseid}`} href={idx} className='case_item'>
														<img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
														<h3>{name}</h3>
			  		  	        				</Link>
										</WingBlank>
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

export default Dj_Details_case;
