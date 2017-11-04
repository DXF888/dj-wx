import React from 'react';
import { Link } from 'react-router-dom';
import {Flex, Modal, WhiteSpace, WingBlank, Toast } from 'antd-mobile';
import './Dj_subnav.less';

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


const Dj_subnav = (props)=> {
		
		return(
			<div className='subNav'>
				<WingBlank>
					<WhiteSpace/>
				  <Flex>
			      <Flex.Item onClick={showAlert}>
		  		  	<img src={'./indexImgs/qd.png'}  />
			      </Flex.Item>
			    </Flex>
			    <WhiteSpace/>
				<Flex>
						<Flex.Item onClick={showAlert} className='yh'>
		  		  	<img src={'./indexImgs/yh.png'}  />
			      </Flex.Item>
			      <Flex.Item>
		  		  	<img src={'./indexImgs/lcjr.png'}  />
		  		  	<WhiteSpace/>
		  		  	<img src={'./indexImgs/czmd.png'}  />
			      </Flex.Item>
			  </Flex>
			  <WhiteSpace/>
				<Flex>
						<Flex.Item onClick={showAlert}>
		  		  	<img src={'./indexImgs/yhq.png'}  />
			      </Flex.Item>
			      <Flex.Item>
		  		  	<img src={'./indexImgs/hlts.png'}  />
		  		  	<WhiteSpace/>
		  		  	<img src={'./indexImgs/jrwm.png'}  />
			      </Flex.Item>
			    </Flex>
					</WingBlank>
					<WhiteSpace/>
			</div>
		);
}


export default Dj_subnav;