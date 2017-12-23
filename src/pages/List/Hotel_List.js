import React from 'react';
import { Link } from 'react-router-dom';

import { ListView, ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';

import Hotel_list from '../../components/Dj_filtrate/Hotel_list';
import List_Header from '../../components/Dj_List/Dj_List_Header';


class Hotel_List extends React.Component {
	constructor(props) {
	    super(props);
//	    console.log(props.match.params.category);
	    
	    let getval = props.match.url.split('/');
		let Mingchen = getval.slice(-1).join();
	    this.state = {
	    	mingchen : Mingchen,
	    }
   	}
	
	render() {
		return (
			<div>
				<List_Header mingchen={this.state.mingchen} />
				<Hotel_list />
			</div>
		);
	}
	
}
  
export default Hotel_List;