import React, { Component, PropTypes } from 'react';
import { ListView, ActivityIndicator } from 'antd-mobile';


import { listPageTotal } from '../../config/index';
import fetchData from '../../utils/fetchData';
import shallowEqual from '../../utils/shallowEqual';


import MallItem from '../Dj_MallItem/Dj_hotel_MallItem';

import Dj_ListHeader from '../Dj_ListHeader/Dj_ListHeader';

import './List_Hotel_content.less';

const getDataSouce = () => new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

class List_Hotel_content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: getDataSouce().cloneWithRows({}),
      isLoading: true,
      pageNow: 1,
      pageCount: 0,
      newData:this.props.newData,
    	flag:this.props.flag,
    };
    
    this.isOK = false;
    
    this.data = [];
    this.data2 = [];
    
    this.onEndReached = this.onEndReached.bind(this);
  }
  render() {
    const { dataSource, pageNow, pageCount, isLoading } = this.state;
    const MallListFooter = () => {
      if (isLoading) {
        return (
          <ActivityIndicator text="正在加载" className="loading_tips" />
        );
      }

      if (pageCount === 0) {
        return (
        	
          <div className="loadend_tips">没有更多了</div>
        );
      }

//    if (pageNow !== pageCount) {
//      return (
//        <div className="loadend_tips">上拉加载更多</div>
//      );
//    }

      return (
        <div>
          <div className="loadend_tips">没有更多了</div>
        </div>
      );
    };
    return (
      <div>
        <ListView
          useBodyScroll
          dataSource={dataSource}
          renderRow={this.props.childComponent}
          onEndReached={this.onEndReached}
          renderFooter={() => <MallListFooter />}
          onEndReachedThreshold={10}
          pageSize={listPageTotal}
          initialListSize = {10}
          scrollEventThrottle={30}
        />
      </div>
    );
 }
  
  getData(newData1) {
//	console.log('数据来啦');
    this.setState({
      isLoading: true,
    });
    
    fetchData(this.props.url,newData1)
    .then((data) => {
    		if(data.response != ''){
//  			console.log('返回数据不为空');
	        let _data = data.response;
	        if(!(this.state.flag)){
	        	this.isOK = false;
	        	console.log('数据加载页');
		        this.data = this.data.concat(_data);
	        }else{
	        	this.isOK = true;
	        	document.body.scrollTop = 0;
						window.pageYOffset = 0;
						document.documentElement.scrollTop = 0;
	        	console.log('数据不加载页');
		        this.state.newData.page = 1;
	        	this.data = _data;
	        }
	        this.state.flag = true;
        	this.setState({
		        dataSource: getDataSouce().cloneWithRows(this.data),
		        isLoading: false,
		      });
    		}else{
//  			console.log('返回数据为空');
    			this.setState({
    				dataSource: getDataSouce().cloneWithRows(this.data),
    				pageCount:0,
    				isLoading:false
    			});
    		}
    });
  }
  onEndReached() {
	console.log('click2='+this.state.newData.isClick);
		if(this.state.newData.isClick && this.isOK){
			console.log(11);
			document.body.scrollTop = 0;
			window.pageYOffset = 0;
			document.documentElement.scrollTop = 0;
		}
		console.log(document.documentElement.scrollTop);
		console.log(this.data);
    if (this.state.isLoading) return;
//  console.log('isloading状态为'+this.state.isLoading);
  	this.state.flag=false;
  	//pageNow=当前页 isLoading=加载状态 pageCount=总页数
//		console.log('我加载了一页');
		this.state.newData.page++;
		console.log(this.state.newData.page);
//		console.log(this.state.newData);
    this.getData(this.state.newData);
    
  }
  componentDidMount() {
    this.getData(this.state.newData);
  }
  componentDidUpdate(prevProps) {
//	console.log('更新完调用');
    const { listUrl } = this.props;
    if (listUrl === prevProps.listUrl) {
      	return;
    }
  }
	componentWillUnmount(){
//		console.log(11);
		clearInterval(this.onEndReached);
	}
  componentWillReceiveProps(nextProps) {
//	console.log(nextProps.newData);
//		console.log('传了新参数进来');
		this.getData(nextProps.newData);
		this.state.newData.isClick= true;
//		console.log('获取到了数据');
  }
}

List_Hotel_content.PropTypes = {
	url: PropTypes.string.isRequired,
	childComponent: PropTypes.element,
};

export default List_Hotel_content;
