import React, {Component} from "react"
import { Menu, ActivityIndicator, NavBar ,Icon,WingBlank, WhiteSpace} from 'antd-mobile';
import List_Hotel_content from '../List_content/List_Hotel_content';
import MallItem from '../Dj_MallItem/List_photography';

import Hotel_filtrate from './filtrate4';
import "./Filtrate.less";  

class weddingPhotography_list extends React.Component {
  constructor(...props) {
    super(...props);
    console.log(props);
    let thisURL = location.hash;
		let getval = thisURL.split('/');
		let name = getval.slice(-1).join();
    this.state = {
      newData:{},
    };
    this.flag=true;
  }
  amend(msg){
  	console.log(msg);
  	this.setState({
  		newData:msg
  	});
  	console.log(this.state.newData);
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
							Name = {this.state.Name}
						/>
      </div>
    );
  }
}

export default weddingPhotography_list;