

define(function (require, exports, module){
	
	var common=require('../../common/common.js');
	
	module.exports={
		//--------------------
		
		createMsgList: function (tmpID, data)
		{
			var oUl=document.getElementById('msg').getElementsByTagName('ul')[0];
			
			var oTmp=document.getElementById(tmpID);
			
			for(var i=0;i<data.length;i++)
			{
				//{ID: 消息ID, post_time: 消息时间,content: 消息内容,username: 发言用户}

				data[i].content = data[i].content.replace(/\<([\/\\])?\w+\>/g,'');

				var oLi=common.dupEle(oTmp, {
					username:	data[i].username,
					time:		common.time2date(data[i].post_time),
					content:	data[i].content
				});
				
				oUl.appendChild(oLi);

			}
		}
	};
});