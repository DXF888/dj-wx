import React from 'react';
import { Link } from 'react-router-dom';

import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Flex ,Button,WhiteSpace} from 'antd-mobile';

import './Dj_Details_banquet.less';

class Dj_Details_banquet extends React.Component {
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
		  		  	        		data.map(({listimg, banquethallid ,banquethallname,tablemax}, idx) => (
									      	<Link to={`/detail/${banquethallid}`} id={banquethallid} href={idx} key={idx} className='banquet_item'>
		  		  	        					<img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
												<div className='banquet-content'>
													<h3>{banquethallname}</h3>
													<table>
														<tbody>
														<tr>
															<td>桌数:</td>
															<td className='msg'>{tablemax}</td>
															<td>立柱:</td>
															<td>{0}</td>
														</tr>
														<tr>
															<td>楼层:</td>
															<td className='msg'>{1}</td>
															<td>面积:</td>
															<td>{700}平</td>
														</tr>
														</tbody>
													</table>
												</div>
												<span className='examine'>查看详情</span>
		  		  	        				</Link>
		  		  	        		))
	  		  	        : data.map(({listimg, banquethallid ,businessname,tablemax}, idx) => (
									      	<Link to={`/detail/${hotelid}`} id={banquethallid} href={idx} key={idx} className='banquet_item'>
		  		  	        					<img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
												<div>
													<h3>{banquethallname}</h3>
													<table>
														<tbody>
														<tr>
															<td>桌数:</td>
															<td className='msg'>{tablemax}</td>
															<td>立柱:</td>
															<td>{0}</td>
														</tr>
														<tr>
															<td>楼层:</td>
															<td className='msg'>{1}</td>
															<td>面积:</td>
															<td>{700}平</td>
														</tr>
														</tbody>
													</table>
												</div>
												<Button>查看详情</Button>
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
		fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_banquet_hall_list',{
				hotelId:this.state.id
			})
		  .then((_data) => {
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
