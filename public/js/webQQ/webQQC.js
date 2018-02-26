

define(function (require,exports,module){

	var common = require('../common/common.js');
	var webqqUI = require('../webQQ/webqqUI/qqUI.js');
	var webUser = require('../webQQ/user/user.js');
	var webMsg = require('../webQQ/msg/msg.js');

	function webqq(obj){

		//拖动;
		common.Drag(obj,{rectangle:true,parent:obj.parentNode,opacity:40});

		//控制云朵;
		webqqUI.coldUI(obj);

		//输入框;
		webqqUI.userUI(obj);

		//按钮;
		webqqUI.btnUI(obj);

		//控制头像;
		webqqUI.iconUI(obj);

		var oMsg = document.getElementById('msg');		

		var oParseNumber = document.getElementById('parseNumber');
		var oParseWord = document.getElementById('parseWord');
		var oLoginBtn = common.GetByClass(obj,'loginBtn')[0];
		var oPassWrong = document.getElementById('passWrong');
		var oClose = common.GetByClass(obj,'close')[0];

		var oPassInput = common.GetByClass(obj,'passInput')[0];
		var btnCon = oLoginBtn.getElementsByTagName('p')[0];
		
		var oRegBtn = common.GetByClass(obj,'regBtn')[0];

		var oUserIcon = common.GetByClass(obj,'userIcon')[0];
		var oIconBox = common.GetByClass(obj,'IconBox')[0];
		var aIconImg = oIconBox.getElementsByTagName('img');
		var iFaceId;
		var oRegMsg = document.getElementById('regMsg');
		var oRegMsgp = oRegMsg.getElementsByTagName('p')[0];

		//好友列表滚动条;
		var oScrollParent = document.getElementById('scrollParent');
		var oScrollObj = document.getElementById('scrollObj');
		var oFollowObj = document.getElementById('followObj');
		var oLiParent = document.getElementById('liParent');

		var oFriendList = document.getElementById('friendList');

		//消息列表滚动条;
		var oMsgScroll = document.getElementById('MsgScroll');
		var oMsgScrollObj = document.getElementById('MsgScrollObj');
		var oMosFollowObj = document.getElementById('MsgFollow');
		var oFriendMsgTop = document.getElementById('friendMsgTop');

		var bOk = true;
		var curUser='';
		var msgId;

		//点击登陆按钮;
		oLoginBtn.onclick = function(){

			if(oParseNumber.value!=''&&oParseWord.value!=''){

				var str = btnCon.innerHTML;
				str = str.replace(/\&nbsp\;/g,'');

				switch(str){

					case '登录':
						webUser.login(oParseNumber.value,oParseWord.value,function (userData){
							
							oPassInput.style.display = 'none';
							oPassWrong.style.display = 'block';
							btnCon.innerHTML = '确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定';

							/*curUser = oParseNumber.value;

							//登陆框消失;
							mis();	

							oMsg.style.display = 'block';
							oMsg.style.filter = 'alpha(opacity:'+100+')';
							oMsg.style.opacity = 1;

							//拖动聊天框;
							common.Drag(oMsg,{rectangle:true,parent:obj.parentNode});*/

							//获取用户列表
							/*webUser.getUserList(function (data){

								webUser.createUserList('tmp_user_li', data);

								//滚动好友列表滚动条;
								var iDis = oFollowObj.offsetHeight - oLiParent.offsetHeight;

								if(iDis&&iDis>0){

									common.Drag(oScrollObj,{

											rectangle:true,
											parent:oScrollParent,
											follow:{followObj:oFollowObj,followDis:iDis,followType:'buffer',direction:'different'}

										}
									);

								};

								

								
							});*/

							//获取消息列表
							/*webMsg.getMsg(function (data){
								
								msgId = data[data.length-1].ID;
								webMsg.createMsgList('tmp_msg_li', data);

								//滚动消息列表滚动条;
								var iMsgDis = oMosFollowObj.offsetHeight - oFriendMsgTop.offsetHeight;

								if(iMsgDis&&iMsgDis>0){

									common.Drag(oMsgScrollObj,{

												rectangle:true,
												parent:oMsgScroll,
												follow:{followObj:oMosFollowObj,followDis:iMsgDis,followType:'buffer',direction:'different'}

											}

									);

								};

								
							});*/

							/*//获取最新消息;
							var msgTimer = setInterval(function(){

									webMsg.GetNewMsg(function (data){

										msgId = data[data.length-1].ID;
										webMsg.createMsgList('tmp_msg_li', data);

									},msgId);

							},400);*/

							


						},function(){

							oPassInput.style.display = 'none';
							oPassWrong.style.display = 'block';
							btnCon.innerHTML = '确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定';

						});
						break;

					case '确定':
						oPassInput.style.display = 'block';
						oPassWrong.style.display = 'none';
						oRegMsg.style.display = 'none';

						if(!bOk){

							btnCon.innerHTML = '注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册';
							common.animate(oIconBox,{bottom:300,opacity:100},{time:200});

						}else{

							btnCon.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';
							oRegBtn.innerHTML = '注册号码';
							oParseNumber.value = '';
							oParseWord.value = '';

						};
						
						oParseWord.value = '';
						break;

					case '注册':
						if(!iFaceId)iFaceId = 1;
						common.animate(oIconBox,{bottom:200,opacity:0},{time:200});

						var oUserName = oParseNumber.value;
						var oPassWord = oParseWord.value;
						var re = /^[\w^\_\u4e00-\u9fa5]+$/;

						if(!re.test(oUserName)||!re.test(oPassWord)){

							oPassInput.style.display = 'none';
							oRegMsg.style.display = 'block';
							oRegMsgp.innerHTML = '不准输入非法字符,请重新注册！';
							btnCon.innerHTML = '确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定';
							bOk = false;
							return;

						};

						webUser.reg(oParseNumber.value, oParseWord.value, iFaceId,function(){

							oPassInput.style.display = 'none';
							oRegMsg.style.display = 'block';
							oRegMsgp.innerHTML = '注册成功，请登录！';
							btnCon.innerHTML = '确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定';
							bOk = true;

						},function(msg){

							oPassInput.style.display = 'none';
							oRegMsg.style.display = 'block';
							oRegMsgp.innerHTML = msg + '，请重新注册！';
							btnCon.innerHTML = '确&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;定';
							bOk = false;

						});
						break;

				};

			};

			
		};

		oLoginBtn.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		//点击左上角按钮;
		var iRegLeft = oRegBtn.offsetLeft;
		oRegBtn.onclick = function(){

			switch(this.innerHTML){

				case '返回登录界面':
					this.innerHTML = '注册号码';
					btnCon.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';

					oParseNumber.value = '';
					oParseWord.value = '';
					oPassInput.style.display = 'block';
					oRegMsg.style.display = 'none';

					common.animate(oIconBox,{bottom:200,opacity:0},{time:200});
					break;

				case '注册号码':
					this.innerHTML = '返回登录界面';
					btnCon.innerHTML = '注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册';

					oParseNumber.value = '';
					oParseWord.value = '';
					oPassInput.style.display = 'block';
					oPassWrong.style.display = 'none';

					common.animate(oIconBox,{bottom:300,opacity:100},{time:200});

			};

			
		};

		oRegBtn.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		//发消息;
		var oTextInput = document.getElementById('textInput');

		oTextInput.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		common.addEvent(document,'keyup', function (ev){

			var oEvent = ev || event;

			if(oEvent.keyCode == 13&&oMsg.style.display=='block'&&oTextInput.value!=''){

				oTextInput.value = oTextInput.value.replace(/\<([\/\\])?\w+\>]+/g,'');

				webMsg.sndMsg(oTextInput.value, function (msgData){
					
					if(oTextInput.value != ''){

						webMsg.createMsgList('tmp_msg_li', [{username: curUser, post_time:msgData.time, content: oTextInput.value}]);

					};
					
					oTextInput.value='';
					oMosFollowObj.style.top = '';
					oMosFollowObj.style.bottom = 0+'px';
					
				
					oMsgScrollObj.style.top = '';
					oMsgScrollObj.style.bottom = 0+'px';

					var iMsgDis = oMosFollowObj.offsetHeight - oFriendMsgTop.offsetHeight;

					if(iMsgDis&&iMsgDis<=0){

						iMsgDis = 0;
						oMosFollowObj.style.top = '0px';

					}else{

						oMosFollowObj.style.bottom = '0px';
						common.Drag(oMsgScrollObj,{

									rectangle:true,
									parent:oMsgScroll,
									follow:{followObj:oMosFollowObj,followDis:iMsgDis,followType:'buffer',direction:'different'}

								}

						);

					};

					

				});

			};

		});

		//头像ID选择;
		for(var i=0; i<aIconImg.length; i++){

			(function(index){

				aIconImg[index].onclick = function(){

					iFaceId = index + 1;
					common.animate(oIconBox,{bottom:200,opacity:0},{time:200});

				};

			})(i);

		};

		//好友列表滚动条淡入淡出；
		oFriendList.onmouseover = function(ev){

			var oEvent = ev || event;

			var oFrom = oEvent.fromElement || oEvent.relatedTarget;

			if(!common.isChild(oFriendList,oFrom)){

				common.animate(oScrollParent,{opacity:100},{time:500});

			};

			

		};
		oFriendList.onmouseout = function(ev){

			var oEvent = ev || event;

			var oTo = oEvent.toElement || oEvent.relatedTarget;

			if(!common.isChild(oFriendList,oTo)){

				common.animate(oScrollParent,{opacity:0},{time:500});

			};

			

		};

		//消息列表滚动条淡入淡出；
		oFriendMsgTop.onmouseover = function(ev){

			var oEvent = ev || event;

			var oFrom = oEvent.fromElement || oEvent.relatedTarget;

			if(!common.isChild(oFriendMsgTop,oFrom)){

				common.animate(oMsgScroll,{opacity:100},{time:500});

			};

		};

		oFriendMsgTop.onmouseout = function(ev){

			var oEvent = ev || event;

			var oTo = oEvent.toElement || oEvent.relatedTarget;

			if(!common.isChild(oFriendMsgTop,oTo)){

				common.animate(oMsgScroll,{opacity:0},{time:500});

			};

		};

		//点击关闭按钮;
		oClose.onclick = function(){

			mis();

		};

		oClose.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		//登陆框消失函数;
		function mis(){

			oParseNumber.value='';
			oParseWord.value='';
			oRegBtn.innerHTML = '注册号码';
			btnCon.innerHTML = '登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录';
			common.animate(oIconBox,{bottom:200,opacity:0},{time:200});
			oPassWrong.style.display = 'none';
			oRegMsg.style.display = 'none';
			oPassInput.style.display = 'block';

			var aInput = obj.getElementsByTagName('input');

			for(var i=0; i<aInput.length; i++){

				aInput[i].style.background = 'url(img/webQQ/inputBg.png) 4px 4px no-repeat';

			};

			common.animate(obj,{opacity:0},{time:500,end:function(){

				obj.style.display = 'none';
				obj.style.filter = 'alpha(opacity:100)';
				obj.style.opacity = 1;

			}});

		};

	};

	exports.webqq = webqq;

});