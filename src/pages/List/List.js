import React from 'react';
import { Link } from 'react-router-dom';

import { ListView, ActivityIndicator, WingBlank, WhiteSpace } from 'antd-mobile';

import List_content from '../../components/List_content/List_content';
import MallItem from '../../components/Dj_MallItem/Dj_MallItem';
import Dj_List from '../../components/Dj_List/Dj_List';
import Filtrate2 from '../../components/Dj_filtrate/Filtrate2';


class List extends React.Component {
	
	render() {
		return (
			<div>
				<Filtrate2 />
{/*				<Dj_List />*/}
			</div>
		);
	}
}
  







export default List;