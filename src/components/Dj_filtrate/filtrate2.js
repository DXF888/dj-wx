import React, {Component} from "react"
import { Menu, ActivityIndicator, NavBar ,Icon,WingBlank, WhiteSpace} from 'antd-mobile';
import List_Hotel_content from '../List_content/List_Hotel_content';
import MallItem from '../Dj_MallItem/Dj_hotel_MallItem';


import "./filtrate2.less";  

class hotel_filtrate extends React.Component {
  constructor(props) {
    super(props);
    this.newData = {
    			isClick:false,
	   			district:'',
		     	sortorder:'',
		     	starsort:'',
		     	page: 1
  	}
    this.pingzhnag;
    this.p_height;
    
    
    this.show = false;
    this.show1 = false;
    this.show2 = false;
    this.show3 = false;
    
    this.area;
    this.synthetical;
    this.star;
    
    this.saixuan1;
    this.saixuan2;
    this.saixuan3;
    
    this.getValue = this.getValue.bind(this);
  }
  
  getMsg(newData) {
		var	newData1 = newData;
			if(!(newData1.district == '')) {
				newData1.district = newData1.district;
				if(!(newData1.sortorder == '')) {
					newData1.sortorder = newData1.sortorder;
				}
				if(!(newData1.starsort == '')) {
					newData1.starsort = newData1.starsort;
				}
			} else if(!(newData1.sortorder == '')) {
				newData1.sortorder = newData1.sortorder;
				if(!(newData1.starsort == '')) {
					newData1.starsort = newData1.starsort;
				}
			} else if(!(newData1.starsort == '')) {
				newData1.starsort = newData1.starsort;
			}
			return newData1;
		}
  
  //点击事件
  pingzClick() {
  	this.saixuan1.style.display = 'none';
  	this.saixuan2.style.display = 'none';
  	this.saixuan3.style.display = 'none';
  	this.pingzhnag.style.display = 'none';
  }
  handleClick(e){
  	if(e == '婚礼区域'){
  		if(getComputedStyle(this.saixuan1,null).display == 'none'){
	  		this.pingzhnag.style.display = 'block';
				this.saixuan1.style.display = 'block';
				this.saixuan2.style.display = 'none';
				this.saixuan3.style.display = 'none';
  		}else{
  			this.pingzhnag.style.display = 'none';
				this.saixuan1.style.display = 'none';
				this.saixuan2.style.display = 'none';
				this.saixuan3.style.display = 'none';
  		}
  	}else if(e == '综合排序'){
  		if(getComputedStyle(this.saixuan2,null).display == 'none'){
	  		this.pingzhnag.style.display = 'block';
				this.saixuan2.style.display = 'block';
				this.saixuan1.style.display = 'none';
				this.saixuan3.style.display = 'none';
  		}else{
  			this.pingzhnag.style.display = 'none';
				this.saixuan1.style.display = 'none';
				this.saixuan2.style.display = 'none';
				this.saixuan3.style.display = 'none';
  		}
  	}else if(e == '酒店星级'){
  		if(getComputedStyle(this.saixuan3,null).display == 'none'){
	  		this.pingzhnag.style.display = 'block';
				this.saixuan3.style.display = 'block';
				this.saixuan1.style.display = 'none';
				this.saixuan2.style.display = 'none';
  		}else{
  			this.pingzhnag.style.display = 'none';
				this.saixuan1.style.display = 'none';
				this.saixuan2.style.display = 'none';
				this.saixuan3.style.display = 'none';
  		}
  	}
  }
  getValue(event){
  	//隐藏
  	this.saixuan1.style.display = 'none';
  	this.saixuan2.style.display = 'none';
  	this.saixuan3.style.display = 'none';
  	this.pingzhnag.style.display = 'none';
  	
  	this.newData.isClick = true;
  	if(event.currentTarget.parentNode.getAttribute('id') == 'saixuan1'){
  		if(event.currentTarget.innerHTML == '全城'){
  			this.area.innerHTML = '婚礼区域';
  			this.newData.district = '';
  		}else{
  			this.newData.district = event.currentTarget.innerHTML;
  			this.area.innerHTML = event.currentTarget.innerHTML;
  		}
  		this.newData.isClick = true;
  		this.newData.page = 1;
  		let newDate= this.getMsg(this.newData);
  		this.props.amend(newDate);
  	}else if(event.currentTarget.parentNode.getAttribute('id') == 'saixuan2'){
  		if(event.currentTarget.innerHTML == '默认排序'){
  			this.synthetical.innerHTML = '综合排序';
  			this.newData.sortorder = '';
  		}else{
  			this.newData.sortorder = event.currentTarget.innerHTML;
  			this.synthetical.innerHTML = event.currentTarget.innerHTML;
  		}
  		this.newData.isClick = true;
  		this.newData.page = 1;
  		let newDate= this.getMsg(this.newData);
  		this.props.amend(newDate);
  	}else if(event.currentTarget.parentNode.getAttribute('id') == 'saixuan3'){
  		if(event.currentTarget.innerHTML == '全部'){
  			this.star.innerHTML = '酒店星级';
  			this.newData.starsort = '';
  		}else{
  			this.newData.starsort = event.currentTarget.innerHTML;
  			this.star.innerHTML = event.currentTarget.innerHTML;
  		}
  		this.newData.isClick = true;
  		this.newData.page = 1;
  		let newDate= this.getMsg(this.newData);
  		this.props.amend(newDate);
  	}
  }
  
	componentDidMount(){
		this.saixuan1 = document.getElementById('saixuan1');
  	this.saixuan2 = document.getElementById('saixuan2');
  	this.saixuan3 = document.getElementById('saixuan3');
		
		this.pingzhnag = document.getElementById('pingzhang');
		this.p_height = document.body.scrollHeight;
		this.pingzhnag.style.height = this.p_height+'px';
		
		this.area = document.getElementById('area');
    this.synthetical = document.getElementById('synthetical');
    this.star = document.getElementById('star');
		
	}
  render() {
    return (
    	<div>
    		<div id="pingzhang" onClick={this.pingzClick.bind(this)}></div>
	      <div className='filtrate'>
	      	<div className="filter-area fl" onClick={this.handleClick.bind(this,'婚礼区域')}>
						<a id='area' href="javascript:;">婚礼区域</a>
					</div>
					<div className="filter-synthetical fl" onClick={this.handleClick.bind(this,'综合排序')}>
						<a id='synthetical' href="javascript:;">综合排序</a>
					</div>
					<div className="filter-star fl" onClick={this.handleClick.bind(this,'酒店星级')}>
						<a id='star' href="javascript:;">酒店星级</a>
					</div>
				{/*区域排序*/}
					<ul id='saixuan1' className="clearfix">
						<li onClick={this.getValue}>全城</li>
						<li onClick={this.getValue}>上城区</li>
						<li onClick={this.getValue}>下城区</li>
						<li onClick={this.getValue}>江干区</li>
						<li onClick={this.getValue}>拱墅区</li>
						<li onClick={this.getValue}>西湖区</li>
						<li onClick={this.getValue}>滨江区</li>
						<li onClick={this.getValue}>萧山区</li>
						<li onClick={this.getValue}>余杭区</li>
					</ul>
				{/*默认排序*/}
				<ul id='saixuan2' className="clearfix">
					<li onClick={this.getValue}>默认排序</li>
					<li onClick={this.getValue}>喜欢最多</li>
					<li onClick={this.getValue}>评价最多</li>
					<li onClick={this.getValue}>价格升序</li>
					<li onClick={this.getValue}>价格降序</li>
				</ul>
				{/*星级排序*/}
				<ul id='saixuan3' className="clearfix">
					<li onClick={this.getValue}>全部</li>
					<li onClick={this.getValue}>六星级</li>
					<li onClick={this.getValue}>五星级</li>
					<li onClick={this.getValue}>四星级</li>
					<li onClick={this.getValue}>三星级</li>
				</ul>
    	</div>
    </div>
	  );
	}
}

export default hotel_filtrate;