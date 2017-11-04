import React from 'react';
import { connect } from 'dva';
import { SearchBar, Button, WhiteSpace, WingBlank } from 'antd-mobile';
import './Dj_Search.less';

class Dj_Search extends React.Component {
	state = {
		value: '',
	};
	componentDidMount() {
		this.autoFocusInst.focus();
	}

	render() {
		return(
			<div className="pf">
				<SearchBar placeholder="点击输入搜索内容" ref={ref => this.autoFocusInst = ref} />
				<span className='service'></span>
			</div>
		);
	}
}


export default Dj_Search;