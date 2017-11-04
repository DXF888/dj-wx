import React, { Component, PropTypes } from 'react';
import { ListView, ActivityIndicator } from 'antd-mobile';


import { listPageTotal } from '../../config/index';
import fetchData from '../../utils/fetchData';
import shallowEqual from '../../utils/shallowEqual';


import MallItem from '../Dj_MallItem/Dj_MallItem';

import './List_content.less';

const getDataSouce = () => new ListView.DataSource({
  rowHasChanged: (row1, row2) => row1 !== row2,
});

class List_content extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      dataSource: getDataSouce().cloneWithRows({}),
      isLoading: true,
      pageNow: 0,
      pageCount: null,
      newData:this.props.newData
    };
    this.data = [];
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
          <div className="loadend_tips">暂无数据</div>
        );
      }

      if (pageNow !== pageCount) {
        return (
          <div className="loadend_tips">上拉加载更多</div>
        );
      }

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
          onEndReached={this.onEndReached.bind(this)}
          renderFooter={() => <MallListFooter />}
          onEndReachedThreshold={10}
          pageSize={listPageTotal}
        />
      </div>
    );
  }
  getData() {
    let { pageNow } = this.state;
    pageNow++;
    this.setState({
      isLoading: true,
      pageNow,
    });
    fetchData(this.props.url,{
    	page:this.state.newData.page,
    	starsort:this.state.newData.starsort,
    	sortorder:this.state.newData.sortorder,
    	district:this.state.newData.district
    })
    .then((data) => {
    		if(data.response != ''){
	        const _data = data.response;
	        this.data = this.data.concat(_data);
	        this.setState({
	          dataSource: this.state.dataSource.cloneWithRows(this.data),
	          pageNow,
	          isLoading: false,
	        });
    		}else{
    			this.setState({
    				pageCount:0,
//  				isLoading:false
    			});
    			return;
    		}
    });
  }
  onEndReached() {
    const { pageNow, isLoading, pageCount } = this.state;
    if (isLoading || pageNow === pageCount) return;
    this.getData();
  }
  componentDidMount() {
    this.getData();
  }
  componentDidUpdate(prevProps) {
    const { listUrl } = this.props;
    if (listUrl === prevProps.listUrl) {
      	return;
    }
    this.setState({
      dataSource: getDataSouce().cloneWithRows({}),
      isLoading: true,
      pageNow: 0,
      pageCount: null,
    }, () => {
      this.data = [];
      this.getData();
    });
  }

  componentWillReceiveProps(nextProps) {
  	console.log(nextProps.newData);
  	var newData = nextProps.newData
  	console.log(newData);
		this.getData();
    const { exclude } = nextProps;
    
		this.setState({
			newData : newData
		});
		
    this.setState({
      dataSource: getDataSouce().cloneWithRows(this.data),
    });
  }
}

List_content.PropTypes = {
	url: PropTypes.string.isRequired,
	childComponent: PropTypes.element,
};

export default List_content;
