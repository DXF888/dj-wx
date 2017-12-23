import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex ,Button,WhiteSpace} from 'antd-mobile';

import './Dj_Details_menu_details_caiming.less';

class Dj_Details_menu_caiming extends React.Component {
	constructor(props){
		super(props);
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(-1).join();
		let Id1 = getval.slice(2,3).join();
		this.state = {
			loadinig: true,
			data: [],
			show: true,
			id:Id,
			id1:Id1
		};
	}
	
	render() {
	  const { data,loadinig, show } = this.state;
	  console.log(data);
	  
	  return (
	  	<div className='menu-caiming'>
	  	  {
	  		show
	  		  ? <div className='menu'>
	  		  	  {
	  		  	    loadinig
	  		  	      ? <ActivityIndicator text="正在加载" />
	  		  	      : data.length != 0
	  		  	        ? 
		  		  	        		data.smallpackagelist.map(({smallpackageinfo,smallpackagename},idx) => {
			  		  	        		if(data.smallpackagelist.length  > 1 ) {
			  		  	        			return <div className='taocan2' key={idx}>
			  		  	        					<h3>{smallpackagename}</h3>
			  		  	        					<ul>
						  		  	        			{smallpackageinfo.map(({value},idx1)=> (
						  		  	        				<li className='caiming' key={idx1}>{smallpackageinfo[idx1]}</li>
						  		  	        			))}
					  		  	        		  	</ul>
					  		  	        		  	
					  		  	        		  </div>
			  		  	        		}else{
			  		  	        			return <div className='taocan1' key={idx}>
			  		  	        					<h3>{smallpackagename}</h3>
			  		  	        					<ul>
						  		  	        			{smallpackageinfo.map(({value},idx1)=> (
						  		  	        				<li className='caiming' key={idx1}>{smallpackageinfo[idx1]}</li>
						  		  	        			))}
					  		  	        		  	</ul>
					  		  	        		  </div>
			  		  	        		}
		  		  	        		})
	  		  	        : data.smallpackagelist.map(({listimg, banquethallid ,businessname,tablemax}, idx) => (
									    <ul key={idx}>
			  		  	        			{smallpackageinfo.map(({value},idx1)=> (
			  		  	        				<li key={idx1}>{smallpackageinfo[idx1]}</li>
			  		  	        			))}
			  		  	        		</ul>
		  		  	        		))
	  		  	  }
	  		    </div>
	  		    : null
	  	  }
	  	</div>
	  );
	}
	componentDidMount() {
		fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_Package',{
				hotelId:this.state.id1
			})
		  .then((_data) => {
		  	console.log(_data);
		  	if(_data.response.length !== 0){
		  		this.setState({
		  				loadinig:false,
		  				data: _data.response[this.state.id]
		  		});
		  	}else{
		  		this.setState({
		  			show:false,
		  		});
		  	}
		  });
	}
};

export default Dj_Details_menu_caiming;
