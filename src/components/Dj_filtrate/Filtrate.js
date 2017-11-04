import React, {Component} from "react"  
import "./Filtrate.less"  
export default class ScreenConditionItem extends Component { 
	
    constructor(props) {  
    	console.log(props);
        super(props);  
        this.state = {  
            selectedItems: {"1": ["-1"]},  //某一维度类型选中的数据{key:value} key类型id，value选中数据的id的数组 
            clickItem:''
        }  
        this.onClickScreenItem = this.onClickScreenItem.bind(this);  
        this.onClickScreenTable = this.onClickScreenTable.bind(this);  
    }  
    componentWillMount(){  
        if(this.props.data!==null){  
            var typeId=this.props.data.screenTypeId;  
            var newSelectedItems={};  
            newSelectedItems[typeId]=["-1"]  
            this.setState({selectedItems:newSelectedItems}); 
            console.log(this.state.selectedItems);
        }  
    }  
    onClickScreenTable(event){
    	console.log('点击了');
        var clickItem = event.target;  
        var typeId = clickItem.parentNode.id;  
        var sId = clickItem.id;
        var lis2 = document.getElementsByClassName('lis');
        this.setState({clickItem:clickItem});
        for(var i=0;i<lis2.length;i++){
        	console.log(11);
        	lis2[i].style.display='none';
        }
        var lis = clickItem.parentNode.nextSibling;
        console.log(lis.style.clickItem);
        if(lis.style.display == "none"){
        	console.log('隐藏');
        	lis.style.display='block';
        }else{
//      	console.log('显示');
//      	lis.style.display='none';
        }
    }
    onClickScreenItem(event) { 
        var clickItem = event.target; 
        var typeId = clickItem.parentNode.id; 
        clickItem.parentNode.parentNode.style.display='none';
        var sId = clickItem.id;  
        var selectedItems = this.state.selectedItems;  
        var newSelectedItems = {...selectedItems};  
        var selectedItemsId = newSelectedItems[typeId] //某一类型下选中的数据的id的数组
        if (sId === "-1" && selectedItemsId.indexOf(sId) === -1) {//当点击的是全部并且数组中没有全部时，则删掉选中的所有数据，并将全部这一项的id放入数组中  
            for (var i = selectedItemsId.length-1; i >=0; i--) {  
                selectedItemsId.splice(i, 1);  
            }  
            selectedItemsId.push(sId);  
        }  
        else if (selectedItemsId.indexOf(sId) === -1) {//如果点击的不是全部，是其他选项时，若数组中有全部这一项，先删除全部这一项，然后将选中的项放入数组中  
            for (var i = 0; i < selectedItemsId.length; i++) {  
                if (selectedItemsId[i] === "-1") {  
                    selectedItemsId.splice(i, 1);  
                }  
            }  
            selectedItemsId.push(sId);  
        }  
        else { //如果点击的是全部或者别的选项，并且点击的这一项已经存在于数组中，则应该删除掉这一项  
            selectedItemsId.splice(selectedItemsId.indexOf(sId), 1);  
        }  
        this.props.callbackParent(typeId,newSelectedItems);  
        this.setState({selectedItems: newSelectedItems});  
    }  
  
    setScreenItemStyle(sid, typeId) {  
        var selectedItems = this.state.selectedItems;  
        if (selectedItems[typeId].indexOf(sid) !== -1) {  
            return "specialReport-screenConditionItem-sName-div-change";  
        } else {  
            return "specialReport-screenConditionItem-sName-div";  
        }  
    }  
  
    render() {  
        var itemData = this.props.data;  
        if (itemData !== null && itemData.values.length > 0) {  
            var li = itemData.values.map((data, index) => {  
                return (  
                    <div id={itemData.screenTypeId} key={index} className="specialReport-screenConditionItem-sName">  
                        <div className={this.setScreenItemStyle(data.sid, itemData.screenTypeId)}  
                             onClick={this.onClickScreenItem}  
                             id={data.sid}>{data.sname}</div>  
                    </div>  
                );  
            });  
        }  
        return ( 
        	<div>
	            <div className="specialReport-screenConditionItem-table" id={'type'+itemData.screenTypeId}>  
	                <div className="specialReport-screenConditionItem-typeName" onClick={this.onClickScreenTable}>  
	                    {itemData.screenTypeName}
	                </div>
	            </div>
	            <div className='lis'>
	                {li}
	            </div>
            </div>
        );  
    }  
}