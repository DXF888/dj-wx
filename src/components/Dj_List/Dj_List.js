import React from 'react';

import List_content from '../../components/List_content/List_content';
import MallItem from '../../components/Dj_MallItem/Dj_MallItem';

import { WingBlank, WhiteSpace } from 'antd-mobile';

import './Dj_List.less';




class Dj_List extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
	      show: false,
	      newData: {
	      	'district': '',
			'sortorder': '',
			'starsort': '',
			'page': ''
	      }
	    };
	}
	
	
	handleClick1 = (event) => {
		event.preventDefault(); // Fix event propagation on Android
    	console.log('点击了');
    	var active = event.target.text;
    	console.log(active);
    	var quyu = document.getElementsByClassName('saixuan1');
    	console.log(quyu[0]);
    	quyu[0].style.display = 'block';
	}
	handleClick2 = (event) => {
		event.preventDefault(); // Fix event propagation on Android
    	console.log('点击了');
    	var active = event.target.text;
    	console.log(active);
    	var quyu = document.getElementsByClassName('saixuan2');
    	console.log(quyu[0]);
    	quyu[0].style.display = 'block';
	}
	handleClick3 = (event) => {
		event.preventDefault(); // Fix event propagation on Android
    	console.log('点击了');
    	var active = event.target.text;
    	console.log(active);
    	var quyu = document.getElementsByClassName('saixuan3');
    	console.log(quyu[0]);
    	quyu[0].style.display = 'block';
	}
	
	
	render() {
		const ListHeader = () => {
			return (
				<div id="filter">
	
					<div className="filter-area fl">
						<a href="javascript:;" onClick={this.handleClick1}>婚礼区域</a>
					</div>
					<div className="filter-synthetical fl">
						<a href="javascript:;" onClick={this.handleClick2}>综合排序</a>
					</div>
					<div className="filter-star fl">
						<a href="javascript:;" onClick={this.handleClick3}>酒店星级</a>
					</div>
					{/*区域排序*/}
					<ul className="saixuan1 clearfix">
						<li>全城</li>
						<li>上城区</li>
						<li>下城区</li>
						<li>江干区</li>
						<li>拱墅区</li>
						<li>西湖区</li>
						<li>滨江区</li>
						<li>萧山区</li>
						<li>余杭区</li>
					</ul>
					{/*默认排序*/}
					<ul className="saixuan2 clearfix">
						<li>默认排序</li>
						<li>喜欢最多</li>
						<li>评价最多</li>
						<li>价格升序</li>
						<li>价格降序</li>
					</ul>
					{/*星级排序*/}
					<ul className="saixuan3 clearfix">
						<li>全部</li>
						<li>六星级</li>
						<li>五星级</li>
						<li>四星级</li>
						<li>三星级</li>
					</ul>
				</div>
			);
		}
		return(
			<div className='Filtrate-List'>
               		<WingBlank size='sm'>
		            <List_content
						childComponent={this.props.childComponent}
						url={this.props.listUrl}
					/>
		            </WingBlank>
            	</div>
		);
	}
}
Dj_List.defaultProps = {
	listUrl: 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_list',
	childComponent: MallItem,
};
export default Dj_List;