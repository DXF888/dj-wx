import React from 'react';
import fetchData from '../../utils/fetchData';

import { WingBlank, ActivityIndicator,Button} from 'antd-mobile';

import './comment.less';

class comment extends React.Component {
	
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
		  		  ? <div className='comment'>
		  		  	  {
		  		  	    loadinig
		  		  	      ? <ActivityIndicator text="正在加载" />
		  		  	      : data.length != 0
		  		  	        ? 
		  		  	        	<WingBlank key={1}>
									<div className='comment-top'>
										<h1>用户评论:</h1>
										<div className='touxiang'>
											<img src={'http://120.55.70.81:8088/dajiaserver/'+data.headimgpath} alt='头像' />
										</div>
										<div className='comment-content'>
											<p className='comment-user'>用户名:{data.nickname}<span>发布时间:{data.creattime}</span></p>
											<p className='comment-content'>{data.ucomment}</p>
										</div>
										<Button>点击查看更多评论</Button>
									</div>
		  		  	        	</WingBlank>
		  		  	        : <WingBlank key={1}>
		  		  	        	<div className='recommend-top'>
									<h1>用户评论:</h1>
									<p className='comment-user'>用户名:</p>
									<p className='comment-content'>评论内容</p>
								</div>
		                       </WingBlank>
		              }
		  		   	</div>
		  		    : null
		  	  }
		  	</div>
		  );
		}
		
		
		componentDidMount() {
			fetchData('http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_home_page',
			{
				hotelId:this.state.id
			})
			  .then((_data) => {
			  	if(_data.response.comment != ''){
			  		this.setState({
			  				loadinig:false,
			  				data: _data.response.comment,
			  		});
			  	}else{
			  		this.setState({
			  			show:false,
			  		});
			  	}
			  });
		}
		
}





export default comment;