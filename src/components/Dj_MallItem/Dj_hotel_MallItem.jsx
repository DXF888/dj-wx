import React, { Component, PropTypes } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

import LazyImg from '../LazyImgs';

import './Dj_hotel_MallItem.less';

const Dj_hotel_MallItem = (props) => {
//	console.log('子组件中传入了参数');
//	console.log(props);
let {hotelid, address,taocan ,packagecount,weddingphotographyid,businessname, name, collection, pricemin,price,evaluate,visit, listimg,tablemax,applistimg} = props;

  return (
    <Link to={`/Detail/${hotelid}`} className="mall_item">
      <div className="mall_item_inner">
        <img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
      </div>
      <div className="mall_item_inner_right">
      	<h3>{businessname}</h3>
      	<p className="site">{address}</p>
      	<p className='liulan-data'><span className='collect'>{collection}</span> <span className='visit'>{visit}</span> <span className='evaluate'>{evaluate}</span></p>
      	<p className='jq_tc'>价格:￥<span className='price'>{pricemin}</span>起 <span className='tablemax'>最大桌数：{tablemax}</span></p>
      </div>
    </Link>
  );
  
};




export default Dj_hotel_MallItem;
