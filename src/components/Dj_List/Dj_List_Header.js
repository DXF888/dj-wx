import React from 'react';
import { Link } from 'react-router-dom';

import { ListView, ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';

import './Dj_List_Header.less';

class Dj_List_Header extends React.Component {
	constructor(props) {
	    super(props);
   	}
	
	render() {
		return (
			<div className='List_search'>
				<span className='fh' onClick={() => {history.back();}}></span>
				<span>{this.props.mingchen}</span>
				<Link to='/search'></Link>
			</div>
		);
	}
}
  
export default Dj_List_Header;