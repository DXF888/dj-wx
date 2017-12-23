import React, { Component, PropTypes } from 'react';
import { WingBlank, WhiteSpace } from 'antd-mobile';
import './Dj_ListHeader.less';

const Dj_ListHeader = (props) => {
    return (
	      <div className='ListHeader'>
	      	<span onClick={() => {history.back();}}></span>
	      	<h2>props.name</h2>
      	</div>
    );
};

export default Dj_ListHeader;