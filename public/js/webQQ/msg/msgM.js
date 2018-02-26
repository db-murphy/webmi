
define(function (require, exports, module){

	var common=require('../../common/common.js');
	
	module.exports={
		getMsg:		function (fnSucc)
		{
			common.fnJsonP(common.URL,'cb', {
				a:	'get_msg'
			}, function (json){
				if(json.err)
				{
					alert('获取消息失败：'+json.desc);
				}
				else
				{
					fnSucc && fnSucc(json.data);
				}
			});
		},
		
		sndMsg:		function (content, fnSucc)
		{
			common.fnJsonP(common.URL, 'cb', {
				a:			'snd_msg',
				content:	content
			}, function (json){
				if(json.err)
				{
					alert('发送消息失败');
				}
				else
				{
					fnSucc && fnSucc(json);
				}
			});
		},

		GetNewMsg:  function(fnSucc,id){

			common.fnJsonP(common.URL,'cb', {
				a:	'get_msg',
				n:id
			}, function (json){
				if(json.err)
				{
					alert('获取消息失败：'+json.desc);
				}
				else
				{
					fnSucc && fnSucc(json.data);
				}
			});

		}
		
		//--------------------
		
	};
});