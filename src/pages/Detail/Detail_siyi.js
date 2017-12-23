import React from 'react';
import Dj_Details_header from '../../components/Dj_Details/Dj_Details_header';
import Dj_Details from '../../components/Dj_Details_sidajinggang/Dj_Details';
import Dj_Details2 from '../../components/Dj_Details_sidajinggang/Dj_Details2';
import Dj_Details3 from '../../components/Dj_Details_sidajinggang/Dj_Details3';
import Dj_Details_footer from '../../components/Dj_Details_sidajinggang/Dj_Details_footer';
import Details_interest from '../../components/Dj_Details_sidajinggang/Dj_Details_interest';
import Dj_Details_Tabs from '../../components/Dj_Details_sidajinggang/Dj_Details_Tabs';
import Dj_Slider2 from '../../components/Dj_Slider/Dj_Slider2';
import Dj_comment from '../../components/Dj_comment/comment';
import { WhiteSpace } from 'antd-mobile';

import './Detail.less';

const Detail = (props) => {
		let thisURL = location.hash;
		let getval = thisURL.split('/');
		var Id8 = getval.slice(2,3).join();
		var argt1 = '';
		var url1 = '';
		if(Id8 == 'emcee'){
			argt1 = 'emceeid';
			url1 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_emcee_info';
		}else if(Id8 == 'dresser'){
			argt1 = 'dresserid';
			url1 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_dresser_info';
		}else if(Id8 == 'photographer'){
			argt1 = 'photographerid';
			url1 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_photographer_info';
		}else if(Id8 == 'camera'){
			argt1 = 'cameraid';
			url1 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_camera_info';
		}else if(Id8 == 'actor'){
			argt1 = 'actorid';
			url1 = 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_actor_info';
		}
		
	return (
		<div>
			<Dj_Details_header />
			<Dj_Slider2 argt={argt1} url={url1} />		
		  	<Dj_Details argt={argt1} url={url1} />
		  	<WhiteSpace size='xs' />
		  	<Dj_Details3 argt={argt1} url={url1} />
		  	<WhiteSpace size='xs' />
		  	<Dj_Details_Tabs />
		  	<Dj_Details_footer />
		</div>
	);
}



export default Detail;