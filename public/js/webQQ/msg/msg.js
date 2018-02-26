

define(function (require, exports, module){

	var msgM=require('../../webQQ/msg/msgM.js');
	var msgV=require('../../webQQ/msg/msgV.js');
	
	module.exports={
		//--------------------
		
		getMsg: msgM.getMsg,
		sndMsg: msgM.sndMsg,

		createMsgList: msgV.createMsgList,
		GetNewMsg:msgM.GetNewMsg
	};
});