import React from 'react';
import { List , Grid,Flex, WhiteSpace} from 'antd-mobile';
import './My.less';

const Item = List.Item;
const Brief = Item.Brief;

const data = [
  {
    icon: `./my/yy.png`,
    text: '预约',
    category: 'jiudian',
  },
  {
    icon: `./my/dd.png`,
    text: '订单',
    category: 'sheying',
  },
  {
    icon: `./my/qb.png`,
    text: '钱包',
    category: 'lifu',
  },
  {
    icon: `./my/qd.png`,
    text: '签到',
    category: 'jingang',
  }
];




class My extends React.Component {
	render() {
		return (
			<div className='my'>
				<List className="my-list">
					<Item
			          arrow="horizontal"
			          thumb="./my/tx.png"
			          multipleLine
			          onClick={() => {}}
			        >
			          用户名 <Brief>您已通过签得获得xxx元奖金</Brief>
			        </Item>
			    </List>
			    <Grid
				    columnNum={4}
				    data={data}
				    hasLine={false}
				    className="not-square-grid"
				    onClick={(el, index) => {}}
				  />
			    <List className='my-icon'>
			        <Item
			          thumb="./my/yhj.png"
			          arrow="horizontal"
			          onClick={() => {}}
			        >代金劵<span>查看我的代金券</span>
			        </Item>
			        <Item
			          className='my-Item'
			          thumb="./my/tj.png"
			          onClick={() => {}}
			          arrow="horizontal"
			        >
			          推荐给别人<span>推荐有返现</span>
			        </Item>
			        <Item
			          className='my-Item'
			          thumb="./my/yq.png"
			          onClick={() => {}}
			          arrow="horizontal"
			        >
			          邀请家人<span>账号共享更方便</span>
			        </Item>
			        <Item
			          className='my-Item'
			          thumb="./my/qc.png"
			          onClick={() => {}}
			          arrow="horizontal"
			        >
			          清楚缓存
			        </Item>
			    </List>
			</div>
		);
	}

}



export default My;