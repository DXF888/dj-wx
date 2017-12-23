import React, {Component} from "react"
import { Menu, ActivityIndicator, NavBar ,Icon,WingBlank, WhiteSpace} from 'antd-mobile';
import List_Hotel_content from '../List_content/List_Hotel_content';
import MallItem from '../Dj_MallItem/Dj_hotel_MallItem';


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
  },
  {
    value: '4',
    label: '下城区',
  },
  {
    value: '5',
    label: '拱墅区',
  },
  {
    value: '6',
    label: '余杭区',
  },
  {
    value: '7',
    label: '江干区',
  },
  {
    value: '8',
    label: '滨江区',
  },
  {
    value: '9',
    label: '萧山区',
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

class hotel_filtrate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      initData: '',
      initData2: '',
      newData:{
		     	sortorder:'',
		     	page: 1
	   	},
	   	msg:null,
      show: false,
      show2: false,
    };
    this.flag=true;
  }
  //选择变化函数
  onChange = (value) => {
  	console.log('变了');
    var label = '';
    //判断是哪列显示了
    if(this.state.show == true){
	    	data.forEach((dataItem) => {
	      if (dataItem.value === value[0]) {
	      	var district = document.getElementsByClassName('am-navbar-left');
	      	district[0].innerText = dataItem.label;
	        label = dataItem.label;
	      }
	    });
    }
    if(this.state.show2 == true){
	    	data2.forEach((dataItem2) => {
	      if (dataItem2.value === value[0]) {
	      	var value2 = document.getElementById('am-navbar-title');
	        label = dataItem2.label;
	        value2.innerHTML = label;
	      }
	    });
    }
    
    
    /*点击改变值并传值*/
   if(this.state.show){
   	this.state.newData.page=1;
   	this.flag=false;
   	this.state.newData.sortorder=label,
	  this.props.amend(this.state.newData);
   }else if(this.state.show2){
   	this.state.newData.page=1;
   	this.state.newData.district=label;
   	this.flag=false;
		this.props.amend(this.state.newData);
   }

   /*改变值之后就关闭*/
   this.setState({
	      	show2: false,
	      	show: false,
	 });
  }
  
  componentwillMount() {
    this.flag=false;
    
  }
  
  //点击事件
  handleClick = (event) => {
  	this.props.amend(this.state.newData);
    event.preventDefault(); // Fix event propagation on Android
    this.flag=false;
    if(event.currentTarget.innerHTML == '综合排序'){
	    	this.setState({
	      	show2: !this.state.show2,
	      	show: false,
	    	});
    }else if(event.currentTarget.innerHTML == '酒店星级'){
    	this.setState({
	      	show: false,
	      	show2: false
	    });
    }else{
	    this.setState({
	      show: !this.state.show,
	      show2: false,
	    });
    }
    // mock for async data loading
    if (!this.state.initData) {
      setTimeout(() => {
        this.setState({
          initData: data,
          initData2: data2,
        });
      }, 500);
    }
  }

  onMaskClick = () => {
    this.setState({
      show: false,
      show2: false,
    });
  }
	
	
  render() {
    const { initData, initData2,show,show2, } = this.state;
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
    const loadingEl = (
      <div style={{ position: 'absolute', width: '100%', height: document.documentElement.clientHeight * 0.6, display: 'flex', justifyContent: 'center' }}>
        <ActivityIndicator size="large" />
      </div>
    );
    return (
      <div className={show ? 'single-menu-active' : ''}>
        <div>
          <NavBar
            leftContent="筛选区域"
            mode="light"
            onLeftClick={this.handleClick}
            className="single-top-nav-bar"
          >
            <div id='am-navbar-title' onClick={this.handleClick} role="button">
            	综合排序
            </div>
          </NavBar>
        </div>
        {show ? initData ? menuEl : loadingEl : null}
        {show ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
        {show2 ? initData2 ? menuEl2 : loadingEl : null}
        {show2 ? <div className="menu-mask" onClick={this.onMaskClick} /> : null}
      </div>
    );
  }
}

hotel_filtrate.defaultProps = {};
export default hotel_filtrate;