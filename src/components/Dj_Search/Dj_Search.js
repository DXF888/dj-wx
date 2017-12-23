import React from 'react';
import { connect } from 'dva';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Dj_Search.less';

class Dj_Search extends React.Component {
	state = {
		value: '',
	};

	render() {
		return(
			<div className="pf">
				<SearchBar placeholder="搜索更多" maxLength={8} />
				<span className='service'></span>
			</div>
		);
	}
}


export default Dj_Search;