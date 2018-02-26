

define(function (require,exports,module){

	var common = require('../../common/common.js');

	//云朵控制;
	function coldUI(obj){

		var oBigCold = common.GetByClass(obj,'bigCold')[0];
		var oSmallCold = common.GetByClass(obj,'smallCold')[0];
		var iBigLeft = oBigCold.offsetLeft;
		var iSmallLeft = oSmallCold.offsetLeft;

		/*oBigCold.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		oSmallCold.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};*/

		if(!obj.Timer){

			obj.Timer = setInterval(function(){

				var iBigSpeed = 3;

				oBigCold.style.left = oBigCold.offsetLeft - iBigSpeed + 'px';

				if(oBigCold.offsetLeft<-759){

					oBigCold.style.left = 0 + 'px';

				};

				var iSmallSpeed = 1;

				oSmallCold.style.left = oSmallCold.offsetLeft - iSmallSpeed + 'px';

				if(oSmallCold.offsetLeft<-345){

					oSmallCold.style.left = 0 + 'px';

				};

			},80);

		};

		

	};

	//输入框
	function userUI(obj){

		var aInput = obj.getElementsByTagName('input');

		for(var i=0; i<aInput.length; i++){

			aInput[i].onmousedown = function(ev){

				var oEvent = ev || event;

				oEvent.cancelBubble = true;

			};

			aInput[i].onblur = function(){

				if(this.value==''){

					this.style.background = 'url(img/webQQ/inputBgWrong.png) 0px -0px no-repeat';

				}else{

					this.style.background = 'url(img/webQQ/inputBg.png) 4px 4px no-repeat';

				};

			};

		};

	};

	function btnUI(obj){

		var oLoginBtn = common.GetByClass(obj,'loginBtn')[0];
		var oKbtn = common.GetByClass(obj,'okBtn')[0];
		var oHoverBtn = common.GetByClass(obj,'hoverBtn')[0];
		var oActiveBtn = common.GetByClass(obj,'activeBtn')[0];

		var oMin = common.GetByClass(obj,'min')[0];
		var oClose = common.GetByClass(obj,'close')[0];

		var oMinBtn = common.GetByClass(oMin,'minHover')[0];
		var oCloseBtn = common.GetByClass(oClose,'closeHover')[0];

		var oReg = common.GetByClass(obj,'regBtn')[0];

		var oMsg = document.getElementById('msg');
		var oMsgClose = common.GetByClass(oMsg,'msgclose')[0];
		var oCloseHover = common.GetByClass(oMsgClose,'closeHover')[0];

		//聊天框按钮
		oMsgClose.onmouseover = function(){

			common.stopAnimate(oCloseHover);
			common.animate(oCloseHover,{opacity:100},{time:200});

		};
		oMsgClose.onmouseout = function(){

			common.stopAnimate(oCloseHover);
			common.animate(oCloseHover,{opacity:0},{time:200});

		};
		oMsgClose.onclick = function(){

			var iNowLeft = oMsg.offsetLeft;
			var iNowTop = oMsg.offsetTop;
			var oMsgFollow = document.getElementById('MsgFollow');
			var msgLi = oMsgFollow.getElementsByTagName('li');
			var oFollowObj = document.getElementById('followObj');
			var aList = oFollowObj.getElementsByTagName('li');


			common.animate(oMsg,{left:iNowLeft-100,opacity:0},{time:200,end:function(){

				for(var i=1; i<msgLi.length; i++){

					oMsgFollow.removeChild(msgLi[i]);
					i--;

				};

				for(var i=1; i<aList.length; i++){

					oFollowObj.removeChild(aList[i]);
					i--;

				};

				oMsg.style.display = 'none';

			}});

		};

		oMsgClose.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		//登陆按钮
		oLoginBtn.onmouseover = function(){

			common.stopAnimate(oHoverBtn);
			common.animate(oHoverBtn,{opacity:100},{time:500});

		};
		oLoginBtn.onmouseout = function(ev){

			var oEvent = ev || event;
			var oTo = oEvent.toElement || oEvent.relatedTarget;
			
			if(!common.isChild(oLoginBtn,oTo)){

				common.stopAnimate(oHoverBtn);
				common.animate(oHoverBtn,{opacity:0},{time:500});

			};

		};

		//登陆框最小化按钮个关闭按钮
		oMin.onmouseover = function(){

			common.stopAnimate(oMinBtn);
			common.animate(oMinBtn,{opacity:100},{time:200});

		};

		oMin.onmouseout = function(){

			common.stopAnimate(oMinBtn);
			common.animate(oMinBtn,{opacity:0},{time:200});

		};

		oClose.onmouseover = function(){

			common.stopAnimate(oCloseBtn);
			common.animate(oCloseBtn,{opacity:100},{time:200});

		};

		oClose.onmouseout = function(){

			common.stopAnimate(oCloseBtn);
			common.animate(oCloseBtn,{opacity:0},{time:200});
			
		};

	};

	//头像选择
	function iconUI(obj){

		common.addEvent(document,'mousemove',function(ev){

			var oEvent=ev||event;
			var oIconBox = common.GetByClass(obj,'IconBox')[0];
			var aImg=oIconBox.getElementsByTagName('img');
		
			for(var i=0;i<aImg.length;i++)
			{
				var l=aImg[i].offsetLeft+common.getPos(oIconBox).left+aImg[i].offsetWidth/2;
				var t=aImg[i].offsetTop+common.getPos(oIconBox).top+aImg[i].offsetHeight/2;
				
				//距离
				var a=l-oEvent.clientX;
				var b=t-oEvent.clientY;
				
				var dis=Math.sqrt(a*a+b*b);
				
				var scale=1-dis/450;
				
				if(scale<0.5)scale=0.5;
				
				aImg[i].width=128*scale;
			
			}

		});

	};

	module.exports = {

		coldUI:coldUI,
		userUI:userUI,
		btnUI:btnUI,
		iconUI:iconUI

	};

});