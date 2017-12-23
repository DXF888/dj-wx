import React from 'react';
import Dj_Details_header from '../../components/Dj_Details/Dj_Details_header';
import Banquet_details from '../../components/Dj_Details_weddingPhotography/Dj_Details_banquet-details';
import { WhiteSpace } from 'antd-mobile';

import './Banquet.less';

const Banquet = () => {
	return (
		<div className='banquet'>
			<Dj_Details_header />
		  	<Banquet_details />
		</div>
	);
}



export default Banquet;