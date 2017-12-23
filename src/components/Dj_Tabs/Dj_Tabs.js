import { Tabs, WhiteSpace } from 'antd-mobile';
import './Dj_Tabs.less';
import Boutique from'../Dj_recommend-content/Dj_recommend-content';



class Dj_Tabs extends React.Component {
  
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
      <div className='Tabs sticky'>
	        <Tabs tabs={tabs}>
	          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			      	<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend' />
	          </div>
	          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			      	<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_hotel' />
	          </div>
	          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			      	<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_dress' />
	          </div>
	          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			      	<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_four' />
	          </div>
	          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			      	<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_company' />
	          </div>
	          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			      	<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_dessert' />
	          </div>
	          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
			      	<Boutique url='http://120.55.70.81:8088/dajiaserver/Rest/Shop/get_recommend_car' />
	          </div>
	        </Tabs>
      </div>
    );
  }
}

export default Dj_Tabs;