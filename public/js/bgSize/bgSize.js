

define(function (require,exports,module){

	var common = require('../common/common.js');
	var calender = require('../calender/calender.js');
	var Calculator = require('../Calculator/Calculator.js');
	var webQQ = require('../webQQ/webQQC.js');

	var iClientWidth = null;
	var iClientHeight = null;

	function toClientSize(obj){

		iClientWidth = document.documentElement.clientWidth;
		iClientHeight = document.documentElement.clientHeight;

		common.setStyle(obj,{

			width:iClientWidth+'px',
			height:iClientHeight+'px'

		});

	};

	var iWidth;
	var iHeight;

	function bgResize(obj){

		iClientWidth = document.documentElement.clientWidth;
		iClientHeight = document.documentElement.clientHeight;

		iWidth = obj.offsetWidth;
		iHeight = obj.offsetHeight;

		if(iClientHeight>=iClientWidth*iHeight/iWidth){

			common.setStyle(obj,{

				width:iClientHeight*iWidth/iHeight+'px',
				height:iClientHeight+'px'

			});
			
		}
		else if(iClientHeight<iClientWidth*iHeight/iWidth){

			common.setStyle(obj,{

				width:iClientWidth+'px',
				height:iClientWidth*iHeight/iWidth+'px'

			});
			
			
		}

	};

	function MoveBoxResize(obj){

		var oMoveCount = document.getElementById('moveCount');
		var aCount = oMoveCount.getElementsByTagName('a');

		var iClientHeight = document.documentElement.clientHeight;
		var iClientWidth = document.documentElement.clientWidth;

		obj.style.height = iClientHeight + 'px';
		obj.style.width = iClientWidth*5 + 'px';
		obj.style.left = -iClientWidth*2 + 'px';

		var oInner = document.getElementById('inner');

		oInner.style.height = iClientHeight + 'px';
		oInner.style.width = iClientWidth*3 + 'px';
		oInner.style.left = iClientWidth + 'px';

		var aEle = common.GetByClass(oInner,'ele');
		
		for(var i=0; i<aEle.length; i++){

			aEle[i].style.width = iClientWidth + 'px';
			aEle[i].style.height = iClientHeight + 'px';

		};

		var oImg = document.getElementById('bgImg');

		bgResize(oImg);
		oImg.style.left = (obj.offsetWidth-oImg.offsetWidth)/2 + 'px';
		var followDisX = parseInt(Math.abs((oImg.offsetWidth-iClientWidth)/2));
		

		var iDragCondition = parseInt(iClientWidth/4);
		var iNow = -1;

		tab();

		var iImgOldLeft = oImg.offsetLeft;
		var iScale;

		common.addEvent(window,'resize',function(){

			iClientHeight = document.documentElement.clientHeight;
			iClientWidth = document.documentElement.clientWidth;

			obj.style.height = iClientHeight + 'px';
			obj.style.width = iClientWidth*5 + 'px';
			obj.style.left = -iClientWidth*2 + 'px';

			oInner.style.height = iClientHeight + 'px';
			oInner.style.width = iClientWidth*3 + 'px';
			
			
			for(var i=0; i<aEle.length; i++){

				aEle[i].style.width = iClientWidth + 'px';
				aEle[i].style.height = iClientHeight + 'px';

			};

			oInner.style.left = -iNow*aEle[0].offsetWidth + 'px';
		
			bgResize(oImg);
			oImg.style.left = (obj.offsetWidth-oImg.offsetWidth)/2 + 'px';
			followDisX = parseInt(Math.abs((oImg.offsetWidth-iClientWidth)/2));
			

			iDragCondition = parseInt(iClientWidth/4);

			iImgOldLeft = oImg.offsetLeft;

			iScale = (oInner.offsetLeft+iDragCondition)/(2*(iClientWidth+iDragCondition));
			oImg.style.left = iImgOldLeft + iScale*followDisX+ 'px';

		});

		/*======================================================解锁=========================================*/
		var bReallyTouch = {};
		var oInner = document.getElementById('inner');
		var aEle = common.GetByClass(oInner,'ele');
		var oLock = document.getElementById('Unlock');
		getLock(oLock);

		function getLock(obj){

			//解锁轮播;
			var aRunEle = common.GetByClass(obj,'run');
			var aOpcity = [40,60,80,100,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20,20];
			var TimerOfRun = null;
			TimerOfRun = setInterval(function(){

				run(aOpcity,aRunEle);

			},100);

			//拖动开始;
			var oDragObj = document.getElementById('dragObj');
			var oLinght = document.getElementById('linght');
			var oDarkBg = document.getElementById('darkBg');
			var oSmallRound = document.getElementById('smallRound');
			var oDragRound = document.getElementById('DragRound');

			var oBigRound = common.GetByClass(obj,'bigRound')[0];

			var oTop = common.GetByClass(obj,'top')[0];
			var oBottom = common.GetByClass(obj,'bottom')[0];

			//快捷按钮;
			var Open = document.getElementById('open');
			var oSerch = document.getElementById('serch');
			var oAbout = document.getElementById('about');
			var aEasyBtn = common.GetByClass(obj,'touchIcon');
			var aTargetPos = [];//绝对坐标;
			var aTargetPosRelative = [];//相对坐标;
			var aDis = [];
			var aToDis = [];
			var yy = 0;
			

			common.Drag(oDragObj,{

				radius:140,
				dragType:'buffer',
				back:true,
				type:'liner',
				time:400,
				aTouch:aEasyBtn,
				backEnd:function(){

						//小球回到初始位置时;
						common.animate(oLinght,{opacity:0},{time:500});
						common.animate(oDarkBg,{opacity:0},{time:500,end:function(){

							oDarkBg.style.display = 'none';

						}});

						//显示发光小锁;
						common.animate(oTop,{opacity:100},{time:500});
						common.animate(oBottom,{opacity:100},{time:500});
						TimerOfRun = setInterval(function(){

							run(aOpcity,aRunEle);

						},100);

						//快捷键按钮淡出;
						common.stopAnimate(Open);
						common.animate(Open,{opacity:0,top:200},{time:600});

						common.stopAnimate(oSerch);
						common.animate(oSerch,{opacity:0,left:200},{time:400});

						common.stopAnimate(oAbout);
						common.animate(oAbout,{opacity:0,left:55},{time:400});
						//大圆环;
						common.stopAnimate(oBigRound);
						common.animate(oBigRound,{opacity:0,width:100,height:100,marginLeft:-50,marginTop:-50},{time:400});

					}

				},

				{	//按下鼠标时;
					fnDown:function(aEle){

						common.stopAnimate(oDarkBg);
						common.stopAnimate(oLinght);

						common.animate(oLinght,{opacity:100},{time:500});
						oDarkBg.style.display = 'block';
						common.animate(oDarkBg,{opacity:100},{time:500});

						//隐藏发光小锁;
						common.stopAnimate(oTop);
						common.stopAnimate(oBottom);
						common.animate(oTop,{opacity:0},{time:200});
						//oTop.style.filter = 'alpha(opacity:0)';
						common.animate(oBottom,{opacity:0},{time:200});

						if(TimerOfRun){

							clearInterval(TimerOfRun);
							TimerOfRun = null;

						};
						
						//大环淡入;
						common.stopAnimate(oBigRound);
						common.animate(oBigRound,{opacity:100,width:280,height:280,marginLeft:-140,marginTop:-140},{time:400});

						//open按钮淡入;
						common.stopAnimate(Open);
						common.animate(Open,{opacity:100,top:300},{time:400,end:function(){
							aTargetPos.length = 0;
							aTargetPosRelative.length = 0;
							for(var i=0; i<aEle.length; i++){
								//绝对坐标;

								var newJson = common.getPos(aEle[i]);

								newJson.left += 13;
								newJson.top += 13;

								aTargetPos.push(newJson);

								//相对坐标;
								var posJson = {};

								posJson.left = aEle[i].offsetLeft+13;
								posJson.top = aEle[i].offsetTop+13;
								aTargetPosRelative.push(posJson);

							};

						}});

						common.stopAnimate(oSerch);
						common.animate(oSerch,{opacity:100,left:300},{time:400});

						common.stopAnimate(oAbout);
						common.animate(oAbout,{opacity:100,left:-46},{time:400});

					},
					//抬起鼠标时;
					fnUp:function(){

						oSmallRound.style.display = 'none';
						oDragRound.style.display = 'block';


						if(oDragObj.tiker){

							clearInterval(oDragObj.tiker);
							oDragObj.tiker = null;

						};

						if(bReallyTouch&&bReallyTouch.touch){
							
							fnGo(obj,bReallyTouch.index);

						};		

					},
					//按下移动鼠标时;
					fnMove:function(obj,aEle,toJson){

						//obj-----被拖拽物体;
						//aEle----三个快捷按钮;
						//toJson--被拖拽物体下一刻要去哪;
						//判断到底碰没碰到快捷键按钮，需要两个判断条件都满足，即将要去的坐标和此时此刻物体的坐标都在检测范围内时;
						
						if(!obj.tiker){

							obj.tiker = setInterval(function(){
								
								bReallyTouch = fnTouchTextOne();

							},30);

						};

						function fnTouchTextOne(){

							//小圆现在所处的坐标;
							var iMoveX = common.getPos(obj).left+72;
							var iMoveY = common.getPos(obj).top+72;


							if(aTargetPos.length){
								//存与三个快捷键的距离;
								for(var i=0; i<aTargetPos.length; i++){

									var disX = Math.abs(aTargetPos[i].left - iMoveX);
									var disY = Math.abs(aTargetPos[i].top - iMoveY);

									//目前被拖拽物体与快捷键按钮的中心距离;
									aDis[i] = Math.sqrt(disX*disX+disY*disY).toFixed(1);

								};

								//检测距离;
								var bTouch = false;

								function fnText(){

									for(var i=0; i<aDis.length; i++){

										if(aDis[i]<80){

											bTouch = true;
											return i;

										}

									};

								};
								
								//碰到了的物体的索引;
								var Index = fnText();

								if(bTouch){

									clearInterval(obj.tiker);
									obj.tiker = null;
									return {touch:true,index:Index};

								}else{

									//document.title = '没碰到';
									return {touch:false,index:false};

								};

							};

						};

						bReallyTouch = fnTouchTextTwo();
						function fnTouchTextTwo(){

							//document.title = toJson.left;
							var iToLeft = toJson.left+72;
							var iToTop = toJson.top+72;

							if(aTargetPosRelative.length){

								for(var i=0; i<aTargetPos.length; i++){

									var toDisX = Math.abs(aTargetPosRelative[i].left - iToLeft);
									var toDisY = Math.abs(aTargetPosRelative[i].top - iToTop);

									//下一刻被拖拽物体与快捷键按钮的中心距离;
									aToDis[i] = Math.sqrt(toDisX*toDisX+toDisY*toDisY).toFixed(1);

								};

								//document.title = aToDis;
								//检测距离;
								var bTouch = false;

								function fnTextTwo(){

									for(var i=0; i<aToDis.length; i++){

										if(aToDis[i]<80){

											bTouch = true;
											return i;

										}

									};

								};
								
								//碰到了的物体的索引;
								var Index = fnTextTwo();

								if(bTouch){
									//document.title = '碰到乐';
									return {touch:true,index:Index};

								}else{

									//document.title = '没碰到';
									return {touch:false,index:false};

								};

							};

						};


						if(bReallyTouch&&bReallyTouch.touch){

							//碰上了;
							oSmallRound.style.display = 'block';
							oDragRound.style.display = 'none';
							common.animate(obj,{left:aTargetPosRelative[bReallyTouch.index].left-obj.offsetWidth/2,top:aTargetPosRelative[bReallyTouch.index].top-obj.offsetHeight/2},{time:10,type:'liner'});
							return {touch:true,index:bReallyTouch.index};

						}else{
							//没碰上;
							oSmallRound.style.display = 'none';
							oDragRound.style.display = 'block';
							return {touch:false,index:false};

						};

					}

				}
			);

		};

		function fnGo(obj,witchOne){

			lockFadeOut(obj.parentNode);

			switch(witchOne){

				case 1:
					iNow = -2;
					break;

				case 2:
					iNow = 0;
					break;

				default:
					iNow = -1;
					break;

			};

		}

		function lockFadeOut(obj){

			common.animate(obj,{opacity:0},{time:100,end:function(){

				//obj.style.display = 'none';
				obj.style.zIndex = -10000;
				bReallyTouch.touch = false;
				common.animate(oInner,{left:-iNow*aEle[0].offsetWidth},{time:500,end:function(){

					tab();

				}});

			}});

		};

		var oLockBgImg = document.getElementById('lockBgImg');

		common.bgResize(oLockBgImg);
		common.addEvent(window,'resize',function(){

			common.bgResize(oLockBgImg);

		});

		function run(aOpcity,aRunEle){
			aOpcity.unshift(aOpcity.pop());
			for(var i=0; i<aRunEle.length; i++){

				aRunEle[i].style.filter = 'alpha(opacity:'+aOpcity[i]+')';
				aRunEle[i].style.opacity = aOpcity[i]/100;

			};

		};
		/*======================================================解锁=========================================*/

		iScale = (oInner.offsetLeft+iDragCondition)/(2*(iClientWidth+iDragCondition));
		oImg.style.left = iImgOldLeft + iScale*followDisX+ 'px';
		var startX;

		oInner.Timer = setInterval(function(){

			iScale = (oInner.offsetLeft+iDragCondition)/(2*(iClientWidth+iDragCondition));
			oImg.style.left = iImgOldLeft + iScale*followDisX+ 'px';

		},30);

		var oSearchList = document.getElementById('searchList');
		var oLimitLeft = document.getElementById('limitLeft');
		var oLimitRight = document.getElementById('limitRight');

		oInner.onmousedown = function(ev){

			oSearchList.style.display = 'none';
			common.stopAnimate(oInner);

			var oEvent = ev || event;
			var iL = oEvent.clientX - oInner.offsetLeft;
			var startX=oInner.offsetLeft;

			function fnMove(ev){

			    var oEvent = ev || event ;
				var iLeft = oEvent.clientX - iL;

				if(iLeft<-iDragCondition){

					iLeft = -iDragCondition;

				}else if(iLeft>2*iClientWidth+iDragCondition){

					iLeft=2*iClientWidth+iDragCondition;

				};

				oInner.style.left = iLeft + "px";

				var iScaleLimit = Math.abs((startX-oInner.offsetLeft)/iDragCondition);

				if(iNow==-2&&startX-oInner.offsetLeft<0){

					fadeIn(oLimitLeft);


				};

				if(iNow==0&&startX-oInner.offsetLeft>0){

					fadeIn(oLimitRight);

				};

				function fadeIn(obj){

					obj.style.display = 'block';
					common.stopAnimate(obj);
					obj.style.filter = 'alpha(opacity:'+iScaleLimit*100+')';
					obj.style.opacity = iScaleLimit;

				};

			};
			
			function fnUp(){
				this.onmousemove = null;
				this.onmouseup = null;
				if(oInner.releaseCapture){
					oInner.releaseCapture();
				}

				if(startX-oInner.offsetLeft<-iDragCondition){
					iNow--;
					if(iNow<-2){
						iNow=-2;	
					}
				}else if(startX-oInner.offsetLeft>iDragCondition){
					
					iNow++;	
					if(iNow>0){
						iNow=0;
					}
				}

				common.stopAnimate(oLimitLeft);
				common.animate(oLimitLeft,{opacity:0},{time:500,end:function(){

					oLimitLeft.style.display = 'none';

				}});
				common.stopAnimate(oLimitRight);
				common.animate(oLimitRight,{opacity:0},{time:500,end:function(){

					oLimitRight.style.display = 'none';

				}});

				common.animate(oInner,{left:-iNow*aEle[0].offsetWidth},{time:500,end:function(){
					
					tab();

				}});

			};
			
			if(oInner.setCapture){
				oInner.onmousemove = fnMove;
				oInner.onmouseup = fnUp;
				oInner.setCapture();
			}
			else{
				document.onmousemove = fnMove;
				document.onmouseup = fnUp;
			}
			return false;
		};

		//点击计数点可以跳转;
		for(var j=0; j<aCount.length; j++){

			(function(index){

				aCount[index].onclick = function(){

					iNow = index - 2;
					tab();
					common.animate(oInner,{left:-iNow*aEle[0].offsetWidth},{time:500});

				};

			})(j);

		};

		function tab(){

			for(var i=0; i<aCount.length; i++){

				aCount[i].className = '';

			};

			aCount[iNow+2].className = 'click';
		
		};

		/*按钮拖动*/
		var oUseBtnBox = document.getElementById('useBtnBox');
		var aLi=oUseBtnBox.getElementsByTagName('li');
		var aPos=[];	//li的原始位置存下来
		var zIndex=2;
		var bOpen = true;

		var oCalculator = document.getElementById('Calculator');
		var oCalenderBox = document.getElementById('calenderBox');
		var oLogin = document.getElementById('login');
		
		var oSpan = aLi[0].getElementsByTagName('span')[0];

		oSpan.innerHTML = common.GetTime().date;

		//布局转换
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].index=i;
			aPos[i]={left: aLi[i].offsetLeft, top: aLi[i].offsetTop};
			aLi[i].style.left=aLi[i].offsetLeft+'px';
			aLi[i].style.top=aLi[i].offsetTop+'px';
		}
		
		for(var i=0;i<aLi.length;i++)
		{
			aLi[i].style.position='absolute';
			aLi[i].style.margin='0';
		}
		
		//加拖拽
		function drag(obj)
		{
			obj.onmousedown=function (ev)
			{
				var oEvent=ev||event;
				
				var disX=oEvent.clientX-obj.offsetLeft;
				var disY=oEvent.clientY-obj.offsetTop;
				
				var sName = this.getElementsByTagName('p')[0].innerHTML;

				oEvent.cancelBubble = true;

				clearInterval(obj.timer);
				obj.timer=null;
				
				//提高层级
				//obj.style.zIndex=zIndex++;
				
				function move(ev)
				{
					var oEvent=ev||event;

					//oEvent.cancelBubble = true;
					//oEvent.preventDefault();

					obj.style.left=oEvent.clientX-disX+'px';
					obj.style.top=oEvent.clientY-disY+'px';

					bOpen = false;
					
					var oNear=findNearest(obj);
					
					if(oNear && oNear!=obj)
					{
						var n=obj.index;
						var m=oNear.index;
						
						if(n<m)
						{
							for(var i=0;i<aLi.length;i++)
							{
								if(aLi[i].index>=n+1 && aLi[i].index<=m)
								{
									aLi[i].index--;
									common.animate(aLi[i], aPos[aLi[i].index]);
								}
							}
							obj.index=m;
						}
						else
						{
							for(var i=0;i<aLi.length;i++)
							{
								if(aLi[i].index>=m && aLi[i].index<=n-1)
								{
									aLi[i].index++;
									common.animate(aLi[i], aPos[aLi[i].index]);
								}
							}
							obj.index=m;
						}
					}
				};
				function up()
				{
					
					//回去
					common.animate(obj, aPos[obj.index]);

					if(bOpen){

						switch(sName){

							case '日历':
								oCalenderBox.style.display = 'block';
								calender.creatCalender(oCalenderBox);
								break;

							case '计算器':
								oCalculator.style.display = 'block';
								Calculator.createCalculator(oCalculator);
								break;

							case '聊天':
								oLogin.style.display = 'block';
								webQQ.webqq(oLogin);
								break;

						};


					};

					bOpen = true;

					this.onmousemove = null;
					this.onmouseup = null;

					if(obj.releaseCapture){

						obj.releaseCapture();

					};

				};
				
				if(obj.setCapture){

					obj.onmousemove = move;
					obj.onmouseup = up;
					obj.setCapture();

				}else{

					document.onmousemove = move;
					document.onmouseup = up;

				};

				return false;
			};
		}
		
		for(var i=0;i<aLi.length;i++)
		{
			drag(aLi[i]);
		}
		
		//碰撞检测
		function collTest(oDrag, oTest)
		{
			var l1=oDrag.offsetLeft;
			var r1=oDrag.offsetLeft+oDrag.offsetWidth;
			var t1=oDrag.offsetTop;
			var b1=oDrag.offsetTop+oDrag.offsetHeight;
			
			var l2=aPos[oTest.index].left;
			var r2=aPos[oTest.index].left+oTest.offsetWidth;
			var t2=aPos[oTest.index].top;
			var b2=aPos[oTest.index].top+oTest.offsetHeight;
			
			if(r1<l2 || l1>r2 || b1<t2 || t1>b2)
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		
		//1.碰上
		//2.最近的
		function findNearest(obj)
		{
			var iMin=99999999999;
			var iMinIndex=-1;
			
			for(var i=0;i<aLi.length;i++)
			{
				//if(obj==aLi[i])continue;	//?
				
				//1.碰上
				if(collTest(obj, aLi[i]))
				{
					//2.距离——最小的
					var d=getDis(obj, aLi[i]);
					
					if(iMin>d)
					{
						iMin=d;
						iMinIndex=i;
					}
				}
			}
			
			if(iMinIndex==-1)
			{
				return null;
			}
			else
			{
				return aLi[iMinIndex];
			}
		}
		
		//算距离
		function getDis(obj1, obj2)
		{
			var a=aPos[obj2.index].left-obj1.offsetLeft;
			var b=aPos[obj2.index].top-obj1.offsetTop;
			
			return Math.sqrt(a*a+b*b);
		}


		/*按钮的hover效果*/
		for(var i=0; i<aLi.length; i++){

			aLi[i].onmouseover = function(ev){

				var oEvent = ev || event;

				var oFrom = oEvent.fromElement || oEvent.relatedTarget;

				if(!common.isChild(this,oFrom)){

					var oImgHover = common.GetByClass(this,'useBtnHover')[0];

					oImgHover.style.display = 'block';

				};

			};

			aLi[i].onmouseout = function(ev){

				var oEvent = ev || event;

				var oTo = oEvent.toElement || oEvent.relatedTarget;
				
				if(!common.isChild(this,oTo)){

					var oImgHover = common.GetByClass(this,'useBtnHover')[0];

					//common.animate(oImgHover);
					oImgHover.style.display = 'none';

				};

			};

		};

	};



	module.exports = {

		toClientSize:toClientSize,
		MoveBoxResize:MoveBoxResize

	};

});