import React, {Component} from "react"
import { Menu, ActivityIndicator, NavBar ,Icon,WingBlank, WhiteSpace} from 'antd-mobile';
import List_Hotel_content from '../List_content/List_Hotel_content';
import MallItem from '../Dj_MallItem/Dj_hotel_MallItem';
import Hotel_filtrate from './filtrate2';
import "./Filtrate.less";  


class hotel_list extends React.Component {
  constructor(...props) {
    super(...props);
    var newData1 ='';
    this.state = {
      newData:{
      		isClick : false,
      		district:'',
		     	sortorder:'',
		     	starsort:'',
		     	page: 1
      }
    };
    this.flag=true;
  }
  
  amend(msg){
  	console.log(msg);
  	this.setState({
  		newData:msg
  	});
  	
  }
	
  render() {
    return (
    		<div>
    			<Hotel_filtrate amend = {msg => this.amend(msg)} />
	        <List_Hotel_content
							childComponent={this.props.childComponent}
							url={this.props.url}
							newData={this.state.newData}
							flag={this.flag}
					/>
    		</div>
    );
  }
}

hotel_list.defaultProps = {
	url:'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_list',
	childComponent: MallItem,
};
export default hotel_list;