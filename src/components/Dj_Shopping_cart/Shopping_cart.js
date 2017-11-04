import React from 'react';
import './Shopping_cart.less';


const Shopping_cart = (props) => {
		return (
			<div className='shopping-car'>
				<h1>购物车(0)</h1>
				<div className='car-content'>
					您还没有任何宝贝哦~,请前往APP使用此功能
				</div>
			</div>
		);
}



export default Shopping_cart;