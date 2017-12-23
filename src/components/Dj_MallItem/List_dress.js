import React, { Component, PropTypes } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

import LazyImg from '../LazyImgs';

import './List_photography.less';

const List_photography = (props) => {
//	console.log('子组件中传入了参数');
const {weddingdressid, address, name, collection, price,evaluate,visit, applistimg,packagecount} = props;
  return (
    <Link to={`/dress/${weddingdressid}`} className="mall_item">
      <div className="mall_item_inner">
        <img src={'http://120.55.70.81:8088/dajiaserver/'+applistimg} />
      </div>
      <div className="mall_item_inner_right">
      	<h3>{name}</h3>
      	<p className="site">{address}</p>
      	<p className='liulan-data'><span className='collect'>{collection}</span> <span className='visit'>{visit}</span> <span className='evaluate'>{evaluate}</span></p>
      	<p className='jq_tc'>价格:￥<span className='price'>{price}</span>起 <span className='tablemax'>套餐：{packagecount}</span></p>
      </div>
    </Link>
  );
  
};




export default List_photography;
