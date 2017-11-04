import React,{ Component, PropTypes } from 'react';
import { Grid } from 'antd-mobile';
import './Dj_nav.less';


const url = 'http://120.55.70.81:8088/dajiaweixin/index/';

const data = [
  {
    icon: `${url}jiudian.png`,
    text: '婚宴酒店',
    category: 'jiudian',
  },
  {
    icon: `${url}sheying.png`,
    text: '婚纱摄影',
    category: 'sheying',
  },
  {
    icon: `${url}lifu.png`,
    text: '婚纱礼服',
    category: 'lifu',
  },
  {
    icon: `${url}jingang.png`,
    text: '四大金刚',
    category: 'jingang',
  },
  {
    icon: `${url}hunqing.png`,
    text: '婚庆公司',
    category: 'hunqing',
  },
  {
    icon: `${url}tiandian.png`,
    text: '婚礼甜点',
    category: 'tiandian',
  },
  {
    icon: `${url}hunche.png`,
    text: '婚车预定',
    category: 'hunche',
  },
  {
    icon: `${url}haiwai.png`,
    text: '海外婚礼',
    category: 'haiwai',
  },
  {
    icon: `${url}miyue.png`,
    text: '蜜月出行',
    category: 'miyue',
  },
  {
    icon: `${url}zhushou.png`,
    text: '在线助手',
    category: 'zhushou',
  },

];

const Dj_nav = (props, context) => (
  <Grid
    columnNum={5}
    data={data}
    hasLine={false}
    className="index_link_grid"
    onClick={(el, index) => {
      context.router.history.push({
        pathname: `/List/${encodeURIComponent(data[index].text)}`,
        state: { info: data[index].text },
      });
    }}
  />
);

Dj_nav.contextTypes = {
	router: PropTypes.object,
};

export default Dj_nav;