

define(function (require, exports, module){
	
	var userM=require('../../webQQ/user/userM.js');
	var userV=require('../../webQQ/user/userV.js');
	
	module.exports={

		reg: userM.reg,
		login: userM.login,
		getUserList: userM.getUserList,

		createUserList: userV.createUserList
		
	};
});












