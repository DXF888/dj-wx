import React, { Component, PropTypes } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import { Link } from 'react-router-dom';

import LazyImg from '../LazyImgs';

import './List_photography.less';

const List_photography = (props) => {
//	console.log('子组件中传入了参数');
//	console.log(props);
	var sida_id = '';
	var sida_type = '';
	if(props.emceeid !== undefined){
		sida_id = props.emceeid;
		sida_type = 'emcee';
//		console.log(sida_id);
	}else if(props.dresserid!== undefined){
		sida_id = props.dresserid;
		sida_type = 'dresser';
//		console.log(sida_id);
	}else if(props.photographerid !== undefined){
		sida_id = props.photographerid;
		sida_type = 'photographer';
//		console.log(sida_id);
	}else if(props.cameraid !== undefined){
		sida_id = props.cameraid;
		sida_type = 'camera';
//		console.log(sida_id);
	}else if(props.actorid !== undefined){
		sida_id = props.actorid;
		sida_type = 'actor';
//		console.log(sida_id);
	}
const {emcee, address, studioname, collection, price,evaluate,visit, applistimg,packagecount} = props;
  return (
    <Link to={`/emcee/${sida_type}/${sida_id}`} className="mall_item">
      <div className="mall_item_inner">
        <img src={'http://120.55.70.81:8088/dajiaserver/'+applistimg} />
      </div>
      <div className="mall_item_inner_right">
      	<h3>{studioname}</h3>
      	<p className='liulan-data'><span className='collect'>{collection}</span> <span className='visit'>{visit}</span> <span className='evaluate'>{evaluate}</span></p>
      	<p className='jq_tc'>价格:￥<span className='price'>{price}</span>起 </p>
      </div>
    </Link>
  );
  
};




export default List_photography;
