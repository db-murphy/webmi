

define(function (require, exports, module){
	
	var common=require('../../common/common.js');
	
	module.exports={
		reg: 		function (user, pass, face,fnScc,fnFaild)
		{
			common.fnJsonP(common.URL,'cb', {
				a:		'reg',
				user:	user,
				pass:	pass,
				face:	face
			}, function (json){
				if(json.err)
				{
					fnFaild&&fnFaild(json.msg);
				}
				else
				{
					fnScc&&fnScc();
				}
			});
		},
		login:		function (user, pass, fnSucc, fnFaild)
		{
			common.fnJsonP(common.URL,'cb', {
				a:		'lgn',
				user:	user,
				pass:	pass
			}, function (json){
				if(json.err)
				{
					fnFaild && fnFaild();
				}
				else
				{
					fnSucc && fnSucc(json);
				}
			});
		},
		getUserList:function (fnSucc)
		{
			common.fnJsonP(common.URL,'cb', {
				a:	'get_user_list'
			}, function (json){
				if(json.err)
				{
					alert('获取用户列表失败：'+json.msg);
				}
				else
				{
					fnSucc && fnSucc(json.data);
				}
			} );
		}
		
	};
});












