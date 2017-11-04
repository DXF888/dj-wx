import React from 'react';
import { connect } from 'dva';


import Dj_footer from '../components/Dj_footer/Dj_footer';



import './IndexPage.css';

//设置html的font-size
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px';
function IndexPage() {
  return (
    <div>
    	<Dj_footer />
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
