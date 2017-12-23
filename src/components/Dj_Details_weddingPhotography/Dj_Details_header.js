import React from 'react';

import './Dj_Details_header.less';

class Dj_Details_header extends React.Component {
  
  render() {
    return (
	      <div className='Details_header'>
	      	<span onClick={() => {history.back();}}></span>
      	</div>
    );
  }
}

export default Dj_Details_header;