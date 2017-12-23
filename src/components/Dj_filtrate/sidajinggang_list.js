import React, {Component} from "react"
import { Menu, ActivityIndicator, NavBar ,Icon,WingBlank, WhiteSpace} from 'antd-mobile';
import List_Hotel_content from '../List_content/List_Hotel_content';
import MallItem from '../Dj_MallItem/List_photography';


import "./filtrate5.less";  

class weddingPhotography_list extends React.Component {
  constructor(...props) {
    super(...props);
    console.log(props);
    let thisURL = location.hash;
		let getval = thisURL.split('/');
		let name = getval.slice(-1).join();
    this.state = {
      initData: '',
      initData2: '',
      initData3: '',
      Name:name,
      newData:{
		     	page: 1
	   	},
      show: false,
      show2: false,
      show3: false,
    };
    this.flag=true;
  }
  
  componentwillMount() {
    this.flag=false;
  }
  render() {
    
    return (
      <div>
        <List_Hotel_content
						childComponent={this.props.childComponent}
						url={this.props.url}
						newData={this.state.newData}
						flag={this.flag}
						Name = {this.state.Name}
						sdjg_type = {this.props.sida_type}
					/>
      </div>
    );
  }
}

export default weddingPhotography_list;