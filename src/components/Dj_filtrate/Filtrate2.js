import React, {Component} from "react"
import { Menu, ActivityIndicator, NavBar ,Icon,WingBlank, WhiteSpace} from 'antd-mobile';
import Dj_List from '../Dj_List/Dj_List';
import List_content from '../List_content/List_content';
import MallItem from '../Dj_MallItem/Dj_MallItem';

import "./Filtrate.less";  
const data = [
  {
    value: '1',
    label: '全城'
  }, 
  {
    value: '2',
    label: '西湖区'
  },
  {
    value: '3',
    label: '上城区',
  }
];
const data2 = [
  {
    value: '1',
    label: '默认排序'
  }, 
  {
    value: '2',
    label: '评价最多'
  },
  {
    value: '3',
    label: '价格从低到高',
  }
];
const data3 = [
  {
    value: '1',
    label: '全部'
  }, 
  {
    value: '2',
    label: '六星'
  },
  {
    value: '3',
    label: '五星',
  }
];
const preventBackgroundScroll = (e: React.WheelEvent<HTMLDivElement>) => {
  const target = e.currentTarget
  if (
    (e.deltaY < 0 && target.scrollTop <= 0) ||
    (e.deltaY > 0 && target.scrollHeight - target.clientHeight - target.scrollTop <= 0)
  ) {
    e.stopPropagation()
    e.preventDefault()
  }
}

class MenuExample extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      initData: '',
      initData2: '',
      initData3: '',
      show: false,
      show2: false,
      show3: false,
      newData: {
      	district: '',
				sortorder: '',
				starsort: '',
				page: 1
      }
    };
  }
  onChange = (value) => {
  	console.log('变了');
    let label = '';
    console.log(value);
    console.log(this.state.newData);
    if(this.state.show == true){
	    	data.forEach((dataItem) => {
	      if (dataItem.value === value[0]) {
	        label = dataItem.label;
	      }
	    });
    }
    if(this.state.show2 == true){
	    	data2.forEach((dataItem2) => {
	      if (dataItem2.value === value[0]) {
	        label = dataItem2.label;
	      }
	    });
    }
    if(this.state.show3 == true){
	    	data3.forEach((dataItem3) => {
	      if (dataItem3.value === value[0]) {
	        label = dataItem3.label;
	      }
	    });
    }
   
   if(this.state.show){
   	this.setState({
		     newData:{
		     	district:label,
		     	sortorder:'',
		     	starsort:''
		     }
	  });
   }else if(this.state.show2){
	   	this.setState({
	   		newData:{
	   			district:'',
		     	sortorder:label,
		     	starsort:''
	   		}
		  });
   }else if(this.state.show3){
   	this.setState({
   			newData:{
   				district:'',
		     	sortorder:'',
		     	starsort:label
   			}
		  });
   }
   console.log(this.state.newData);
    console.log(label);
    this.setState({
	      	show2: false,
	      	show: false,
	      	show3: false
	    	});
  }
  handleClick = (event) => {
    event.preventDefault(); // Fix event propagation on Android
    event.stopPropagation()
    console.log(event.currentTarget.innerHTML);
    if(event.currentTarget.innerHTML == '综合排序'){
    	console.log('综合排序');
	    	this.setState({
	      	show2: !this.state.show2,
	      	show: false,
	      	show3: false
	    	});
	    console.log(this.state.show2);
    }else if(event.currentTarget.innerHTML == '酒店星级'){
    	console.log('酒店星级');
    	this.setState({
	      	show3: !this.state.show3,
	      	show: false,
	      	show2: false
	    });
	    console.log(this.state.show3);
    }else{
    	console.log('区域');
	    this.setState({
	      show: !this.state.show,
	      show2: false,
	      show3: false
	    });
	    console.log(this.state.show);
    }
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
          initData2: data2,
          initData3: data3,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
      show2: false,
      show3: false,
    });
  }

  render() {
    const { initData, initData2,initData3,show,show2,show3 } = this.state;
    const menuEl = (
      <Menu
        className="single-foo-menu"
        data={initData}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.5}
      />
    );
    const menuEl2 = (
      <Menu
        className="single-foo-menu"
        data={initData2}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.5}
      />
    );
    const menuEl3 = (
      <Menu
        className="single-foo-menu"
        data={initData3}
        value={['1']}
        level={1}
        onChange={this.onChange}
        height={document.documentElement.clientHeight * 0.5}
      />
    );
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="婚礼区域"
            mode="light"
            onLeftClick={this.handleClick}
            rightContent={[
			        <div key="0" role="button" onClick={this.handleClick}>
			        	酒店星级
			        </div>
			      ]}
            className="single-top-nav-bar"
          >
            <div  onClick={this.handleClick} role="button">
            	综合排序
            </div>
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        {show2 ? initData2 ? menuEl2 : loadingEl : null}
        {show2 ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        {show3 ? initData3 ? menuEl3 : loadingEl : null}
        {show3 ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        <WingBlank size='sm'>
	        <List_content
							childComponent={this.props.childComponent}
							url={this.props.listUrl}
							newData={this.state.newData}
						/>
	      </WingBlank>
      </div>
    );
  }
}

MenuExample.defaultProps = {
	listUrl: 'http://120.55.70.81:8088/dajiaserver/Rest/shop/get_hotel_list',
	childComponent: MallItem,
};
export default MenuExample;