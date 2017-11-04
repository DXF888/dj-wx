import React, { Component, PropTypes } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

import LazyImg from '../LazyImgs';

import './Dj_MallItem.less';

const MallItem = (props) => {
//	console.log(props);
const {hotelid, address, businessname, collection, pricemin,evaluate,visit, listimg,tablemax} = props;
  return (
    <Link to={`/Detail/${hotelid}`} className="mall_item">
      <div className="mall_item_inner">
        <img src={'http://120.55.70.81:8088/dajiaserver/'+listimg} />
      </div>
      <div className="mall_item_inner_right">
      	<h3>{businessname}</h3>
      	<p className="site">{address}</p>
      	<p className='liulan-data'><span className='collect'>{collection}</span> <span className='visit'>{visit}</span> <span className='evaluate'>{evaluate}</span></p>
      	<p>价格:￥<span className='price'>{pricemin}</span>起 <span className='tablemax'>最大桌数：{tablemax}</span></p>
      </div>
    </Link>
  );
  
};




export default MallItem;
