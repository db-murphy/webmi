

define(function (require, exports, module){
	//require	引入
	//exports	导出
	//module	批量导出
	
	var common=require('../../common/common.js');
	
	module.exports={
		//------------
		createUserList:	function (tmpID, data)
		{
			var oOl=document.getElementById('msg').getElementsByTagName('ul')[1];
			var oTmp=document.getElementById(tmpID);
			
			

			for(var i=0;i<data.length;i++)
			{

				if(data[i].face<1||data[i].face>8){

					data[i].face=5;
					
				};

				var oLi=common.dupEle(oTmp, {faceID: data[i].face, username: data[i].username});
				
				oOl.appendChild(oLi);
			}
		}
	};
});












