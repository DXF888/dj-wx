import { Tabs, WhiteSpace } from 'antd-mobile';
import './Dj_Tabs.less';
import Boutique from'../Dj_recommend-content/Dj_recommend-content';

class Dj_Tabs extends React.Component {
  renderContent = tab =>
    (<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
      	<div className='tab-content'>
      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend' />
      	</div>
    </div>);

  render() {
    const tabs = [
      { title: '精品推荐' },
      { title: '婚宴酒店' },
      { title: '婚纱礼服' },
      { title: '四大金刚' },
      { title: '婚庆公司' },
      { title: '婚庆甜点' },
      { title: '婚车预定' }
    ];

    return (
      <div className='Tabs'>
        <Tabs tabs={tabs}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          	<div className='tab-content'>
		      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend' />
		      	</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          	<div className='tab-content'>
		      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_hotel' />
		      	</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          	<div className='tab-content'>
		      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_dress' />
		      	</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          	<div className='tab-content'>
		      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_four' />
		      	</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          	<div className='tab-content'>
		      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_company' />
		      	</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          	<div className='tab-content'>
		      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_dessert' />
		      	</div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
          	<div className='tab-content'>
		      		<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_car' />
		      	</div>
          </div>
        </Tabs>
      </div>
    );
  }
}

export default Dj_Tabs;