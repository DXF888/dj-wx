import React from 'react';
import Dj_Details_header from '../../components/Dj_Details/Dj_Details_header';
import Dj_Details from '../../components/Dj_Details_weddingPhotography/Dj_Details';
import Dj_Details2 from '../../components/Dj_Details_weddingPhotography/Dj_Details2';
import Dj_Details3 from '../../components/Dj_Details_weddingPhotography/Dj_Details3';
import Dj_Details_footer from '../../components/Dj_Details_weddingPhotography/Dj_Details_footer';
import Details_interest from '../../components/Dj_Details_weddingPhotography/Dj_Details_interest';
import Dj_Details_Tabs from '../../components/Dj_Details_weddingPhotography/Dj_Details_Tabs';
import Dj_Slider2 from '../../components/Dj_Slider/Dj_Slider2';
import Dj_comment from '../../components/Dj_comment/comment';
import { WhiteSpace } from 'antd-mobile';

import './Detail.less';

const Detail = (props) => {
	return (
		<div>
			<Dj_Details_header />
			<Dj_Slider2 argt='weddingdressid' url='http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_dress_info' />		
		  	<Dj_Details argt='weddingdressid' url='http://120.55.70.81:8088/dajiaserver/Rest/shop/get_wedding_dress_info' />
		  	<WhiteSpace size='xs' />
		  	<Dj_Details3 />
		  	<WhiteSpace size='xs' />
		  	<Dj_Details_Tabs />
		  	<Dj_Details_footer />
		</div>
	);
}



export default Detail;