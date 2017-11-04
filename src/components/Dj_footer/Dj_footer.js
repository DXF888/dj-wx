import React from 'react';
import { Link } from 'react-router-dom';
import {Flex, Modal, WhiteSpace, WingBlank, Toast ,TabBar} from 'antd-mobile';
import Dj_Slider from '../Dj_Slider/Dj_Slider';
import Dj_Search from '../Dj_Search/Dj_Search';
import Dj_nav from '../Dj_nav/Dj_nav';
import Dj_Tabs from '../Dj_Tabs/Dj_Tabs';
import Dj_NoticeBar from '../Dj_NoticeBar/Dj_NoticeBar';
import Dj_subnav from '../Dj_subnav/Dj_subnav';
import Dj_Collect from '../Dj_Collect/Collect';
import Dj_Shopping_cart from '../Dj_Shopping_cart/Shopping_cart';


import './Dj_footer.less';

 
const alert = Modal.alert;

const showAlert = () => {
  const alertInstance = alert('大嫁APP', '请前往应用商店下载大嫁网APP后使用此功能', [
    { text: '现在就去', onPress: () => window.location.href='http://app.qq.com/#id=detail&appid=1105791340', style: 'default' },
    { text: '残忍拒绝', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};



class Dj_footer extends React.Component {
	
  constructor(props) {
    super(props);
    this.state = {
      selectedTab: '1',
      hidden: false,
      fullScreen: true,
    };
  }
  render() {
    return (
      <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', bottom:0  } : { height: 1000 }}>
        <TabBar
          unselectedTintColor="#3f3f3f"
          tintColor="#f05053"
          barTintColor="white"
          hidden={this.state.hidden}
        >
          <TabBar.Item
            title="首页"
            key="index"
            icon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./indexImgs/sy2.png) center center /  21px 21px no-repeat' }}
            />
            }
            selectedIcon={<div style={{
              width: '22px',
              height: '22px',
              background: 'url(./indexImgs/sy1.png) center center /  21px 21px no-repeat' }}
            />
            }
            selected={this.state.selectedTab === '1'}
            onPress={() => {
              this.setState({
                selectedTab: '1',
              });
            }}
          >
          	<Dj_Search />
			    	<Dj_Slider url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_head' />
			    	<Dj_nav />
			    	<Dj_NoticeBar />
			    	<Dj_subnav />
			    	<Dj_Tabs />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./indexImgs/gwc2.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./indexImgs/gwc1.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="购物车"
            key="Shopping_cart"
            selected={this.state.selectedTab === '2'}
            onPress={() => {
              this.setState({
                selectedTab: '2',
              });
              showAlert();
            }}
          >
            <Dj_Shopping_cart />
          </TabBar.Item>
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./indexImgs/hlq2.png) center center /  21px 21px no-repeat' }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: 'url(./indexImgs/hlq1.png) center center /  21px 21px no-repeat' }}
              />
            }
            title="婚礼圈"
            key="Wedding_circle"
            selected={this.state.selectedTab === '3'}
            onPress={() => {
              this.setState({
                selectedTab: '3',
              });
            }}
          >
           	婚礼圈
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: './indexImgs/scj2.png' }}
            selectedIcon={{ uri: './indexImgs/scj1.png' }}
            title="收藏夹"
            key="Collect"
            selected={this.state.selectedTab === '4'}
            onPress={() => {
              this.setState({
                selectedTab: '4',
              });
              showAlert();
            }}
          >
            <Dj_Collect />
          </TabBar.Item>
          <TabBar.Item
            icon={{ uri: './indexImgs/wd2.png' }}
            selectedIcon={{ uri: './indexImgs/wd1.png' }}
            title="我的"
            key="my"
            selected={this.state.selectedTab === '5'}
            onPress={() => {
              this.setState({
                selectedTab: '5',
              });
            }}
          >
            我的
          </TabBar.Item>
        </TabBar>
      </div>
    );
  }
}



export default Dj_footer;