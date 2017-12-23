import React from 'react';
import { Link } from 'react-router-dom';
import {Flex, Modal} from 'antd-mobile';
import './Dj_Details_footer.less';

const alert = Modal.alert;

const showAlert = () => {
  const alertInstance = alert('大嫁APP', '请前往应用商店下载大嫁网APP后使用此功能', [
    { text: '现在就去', onPress: () => window.location.href='http://app.qq.com/#id=detail&appid=1105791340'},
    { text: '残忍拒绝', onPress: () => console.log('ok') },
  ]);
  setTimeout(() => {
    // 可以调用close方法以在外部close
    console.log('auto close');
    alertInstance.close();
  }, 500000);
};


const Dj_Details_footer = (props)=> {
		
		return(
			<div className='Details_footer'>
				<ul>
					<li onClick={showAlert}></li>
					<li onClick={showAlert}></li>
					<li onClick={showAlert}>预约到店</li>
					<li onClick={showAlert}>加入购物车</li>
					<li onClick={showAlert}>立即购买</li>
				</ul>
			</div>
		);
}


export default Dj_Details_footer;