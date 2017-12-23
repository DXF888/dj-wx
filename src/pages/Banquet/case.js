import React from 'react';
import Dj_Details_header from '../../components/Dj_Details/Dj_Details_header';
import Case from '../../components/Dj_Details_weddingPhotography/Dj_Details_case_details';
import { WhiteSpace } from 'antd-mobile';

import './Banquet.less';

class Banquet extends React.Component {
	constructor(props) {
		super(...props);
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		let Id = getval.slice(-1).join();
		this.Id1 = getval.slice(2,3).join();
		this.url = '';
		this.argt = '';
		console.log(this.Id1);
	}
	render(){
		if(this.Id1 == 'dress'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_d_case_info';
		}else if(this.Id1 == 'weddingphotography'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_case_info';
		}else if(this.Id1 == 'company'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_c_case_info';
		}else if(this.Id1 == 'dessert'){
			this.url = 'http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_dessert_case_info';
		}
		
		return (
			<div className='banquet'>
				<Dj_Details_header />
			  	<Case calssName='case' url={this.url} />
			</div>
		)
	}
}



export default Banquet;