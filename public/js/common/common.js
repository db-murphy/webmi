

define(function (require,exports,module){

	var URL = 'http://zhinengshe.com/exercise/im/api.php';

	Date.prototype.getCnWeek = function(){

		var arr=['日','一','二','三','四','五','六'];
	
		return '星期'+arr[this.getDay()];

	};

	function setStyle(obj,json){

		for(var attr in json){

			obj.style[attr] = json[attr];

		};

	};

	function getStyle(obj, name)
	{
		if(obj.currentStyle)
		{
			return obj.currentStyle[name];
		}
		else
		{
			return getComputedStyle(obj, false)[name];
		}
	}

	function addEvent(obj,sEv,fn){

		if(obj.addEventListener){

			obj.addEventListener(sEv,fn,false);

		}else{

			obj.attachEvent('on'+sEv,fn);

		};

	};

	function toDouble(num){
		if(num<10){
			  return "0"+num;
			}
		else{
			  return ""+num;
			}
	}

	function GetTime(){

		var json = {};
		var oDate = new Date();

		json.year = oDate.getFullYear();
		json.month = oDate.getMonth()+1;
		json.date  = toDouble(oDate.getDate());
		json.hours = oDate.getHours();
		json.minutes = oDate.getMinutes();
		json.day = oDate.getCnWeek();

		return json;

	};

	function dupEle(obj, json){

		var oTmp=document.createElement('div');

		obj.parentNode.insertBefore(oTmp, obj);
		
		oTmp.appendChild(obj);

		var str=oTmp.innerHTML;
		
		oTmp.parentNode.insertBefore(obj, oTmp);
		
		oTmp.parentNode.removeChild(oTmp);
		
		oTmp.innerHTML=str.replace(/\[\{\$\w+\}\]/g, function (s){

			s=s.match(/\w+/)[0];
			json[s] = json[s].replace(/\<([\/\\])?\w+\>/g,'');
			return json[s];
			
		});
		
		oTmp.children[0].id='';
		
		return oTmp.children[0];
	};

	function addClass(obj,sName){

		if(obj.className){

			var str = obj.className;
			str = str.replace(/^\s+|\s+$/g,'').replace(/\s+/g,' ');
			str = str +' '+sName;
			obj.className = str;

		}else{

			obj.className = sName;

		};

	};

	function removeClass(obj,aName){

		if(obj.className){

			var str = obj.className;

			for(var i=0; i<aName.length; i++){

				var re = new RegExp(aName[i]);

				if(re.test(str)){

					str = str.replace(re,'');
					obj.className = str;

				};

			};

		};

	};

	function haveClass(obj,sName){

		if(!obj.className){

			return false;

		}else{

			var re = new RegExp(sName);

			if(re.test(obj.className)){

				return true;

			}else{

				return false;

			};

		};

	};

	function GetByClass(obj,sName){

		if(obj.getElementsByClassName){

			return obj.getElementsByClassName(sName);

		}else{

			var arr = [ ];
			var re = new RegExp('(^|\\s)'+sName+'(\\s|$)');
			var aEle = obj.getElementsByTagName('*');

			for(var i=0; i<aEle.length; i++){

				if(re.test(aEle[i].className)){

					arr.push(aEle[i]);

				};

			};
			
			return arr;

		};

	};

	function toDuble(num){

		if(num<10){

			return '0'+num;

		}else{

			return num;

		};

	};
	
	
	function Drag(obj,oPtions,fnJson){

		var x = 0;
		var y = 0;
		var removeMargin = false;
		var stop = false;
		var bTouch = {};

		/*跟随移动物体的初始位置*/
		if(oPtions.follow&&oPtions.follow.followObj){

			var iFollowX = oPtions.follow.followObj.offsetLeft;
			var iFollowY = oPtions.follow.followObj.offsetTop;

			//布局转换;
			oPtions.follow.followObj.style.left = iFollowX + 'px';
			oPtions.follow.followObj.style.top = iFollowY + 'px';
			

		};

		/*存物体相对于定位父及的坐标*/
		var iLeft = obj.offsetLeft;
		var iTop = obj.offsetTop;

		/*默认拖拽对象的限制范围是document;*/
		if(oPtions&&oPtions.rectangle&&!oPtions.parent){

			oPtions.parent = document;

		};

		/*存拖拽物体绝对坐标*/
		var iAbLeft = getPos(obj).left;
		var iAbTop = getPos(obj).top;

		/*子容器相对于父容器的坐标比例*/
		var iScaleX;
		var iScaleY;


		/*子容器与父容器的初始差距*/
		if(oPtions&&oPtions.rectangle){

			if(oPtions.parent!=document){

				var oChildPos = getPos(obj);
				var oParentPos = getPos(oPtions.parent);

				var iDisX = oChildPos.left - oParentPos.left;
				var iDisY = oChildPos.top - oParentPos.top;

			};

		};
		
		obj.onmousedown = function(ev){

			stopAnimate(obj);

			if(!removeMargin){

				obj.style.right = '';
				obj.style.bottom = '';

				obj.style.margin = 0 + 'px';
				obj.style.left = iLeft + 'px';
				obj.style.top = iTop + 'px';
				removeMargin = true;
				

			};

			var oEvent = ev || event;
			var disX = oEvent.clientX - x;
			var disY = oEvent.clientY - y;

			//阻止冒泡;
			oEvent.cancelBubble = true;
		
			if(fnJson&&fnJson.fnDown){

				fnJson.fnDown(oPtions.aTouch);

			};

			
			
			function move(ev){

					var oEvent = ev || event;
					x = oEvent.clientX - disX;
					y = oEvent.clientY - disY;
					var json = {left:x,top:y};

					if(oPtions&&oPtions.opacity){

						obj.style.filter = 'alpha(opacity:'+oPtions.opacity+')';
						obj.style.opacity = oPtions.opacity/100;

					};

					/*拖拽对象限制范围为一个圆形*/
					if(oPtions&&oPtions.radius){

						json = byRound(x,y,oPtions.radius);

					};

					/*拖拽对象限制范围为一个矩形*/
					if(oPtions&&oPtions.rectangle){

						for(var i in json){

							if(i=='left'){

								if(oPtions.parent==document){

									json[i] = rectangle(json[i],document.documentElement.clientWidth-iAbLeft-obj.offsetWidth,-iAbLeft);
									iScaleX = (json[i])/(document.documentElement.clientWidth-obj.offsetWidth);

								}else{

									json[i] = rectangle(json[i],oPtions.parent.offsetWidth-iDisX-obj.offsetWidth,-iDisX);
									iScaleX = (json[i])/(oPtions.parent.offsetWidth-obj.offsetWidth);

								};


							}else{

								if(oPtions.parent==document){

									json[i] = rectangle(json[i],document.documentElement.clientHeight-iAbTop-obj.offsetHeight,-iAbTop);
									iScaleY = (json[i])/(document.documentElement.clientHeight-obj.offsetHeight);

								}else{

									json[i] = rectangle(json[i],oPtions.parent.offsetHeight-iDisY-obj.offsetHeight,-iDisY);
									iScaleY = (json[i])/(oPtions.parent.offsetHeight-obj.offsetHeight);

								};


							};
							

						};
						

						/*跟随移动*/
						if(oPtions.follow&&oPtions.follow.followObj){

							if(!oPtions.follow.followDis)oPtions.follow.followDis=300;
							if(!oPtions.follow.followType)oPtions.follow.followType = 'liner';

							if(oPtions.follow.followType == 'buffer'){

								switch(oPtions.follow.direction){

									case 'same':
										animate(oPtions.follow.followObj,{left:oPtions.follow.followDis*iScaleX+iFollowX,top:oPtions.follow.followDis*iScaleY+iFollowY});
										break;

									case 'different':
										animate(oPtions.follow.followObj,{left:iFollowX-oPtions.follow.followDis*iScaleX,top:iFollowY-oPtions.follow.followDis*iScaleY});
										break;


								};


							}else if(oPtions.follow.followType == 'liner'){

								switch(oPtions.follow.direction){

									case 'same':
										oPtions.follow.followObj.style.left = oPtions.follow.followDis*iScaleX+iFollowX + 'px';
										oPtions.follow.followObj.style.top = oPtions.follow.followDis*iScaleY+iFollowY + 'px';
										break;

									case 'different':
										oPtions.follow.followObj.style.left = iFollowX-oPtions.follow.followDis*iScaleX + 'px';
										oPtions.follow.followObj.style.top = iFollowY-oPtions.follow.followDis*iScaleY + 'px';
										break;

								};

							};

						};

					};

					obj.json = json;

					if(fnJson&&fnJson.fnMove){

						if(oPtions.aTouch){

							//被拖拽物体现在位置;
							bTouch = fnJson.fnMove(obj,oPtions.aTouch,{left:obj.json.left+iLeft,top:obj.json.top+iTop});

						}else{

							fnJson.fnMove({scaleX:iScaleX,scaleY:iScaleY});
							bTouch = {touch:false,index:false};

						};
						
					};	



					//在move过程中检查有没有碰到快捷键，如果没有碰到就让其继续可以自由被拖动；
					if(!bTouch.touch){

						if(oPtions&&oPtions.dragType){
							//document.title = bb++;
							animate(obj, {left:obj.json.left+iLeft,top:obj.json.top+iTop},{type:oPtions.dragType,time:300});


						}else{

							obj.style.left = json.left + iLeft + 'px';
							obj.style.top = json.top + iTop + 'px';
							

						};

					};	

			};

			function up(){

				stopAnimate(obj);

				if(oPtions&&oPtions.opacity){

					obj.style.filter = 'alpha(opacity:'+100+')';
					obj.style.opacity = 1;

				};

				if(fnJson&&fnJson.fnUp){

					fnJson.fnUp();

				};
			

				if(oPtions&&oPtions.back){
			
					x = 0;
					y = 0;

					if(oPtions.type){

						switch (oPtions.type){

							case 'buffer':
								animate(obj, {left:iLeft,top:iTop}, {type:'buffer',time:oPtions.time,end:function(){

									oPtions.backEnd&&oPtions.backEnd();

								}});
								break;

							case 'liner':
								animate(obj, {left:iLeft,top:iTop}, {type:'liner',time:oPtions.time,end:function(){

									oPtions.backEnd&&oPtions.backEnd();

								}});
								break;

						};

					}else{

						obj.style.left = iLeft+'px';
						obj.style.top = iTop+ 'px';

						oPtions.backEnd&&oPtions.backEnd();

					};
					

				}else{

					x = obj.offsetLeft - iLeft;
					y = obj.offsetTop - iTop;

				};
				
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

		return bTouch.index;

	};


	function byRound(x,y,radius){

		var iMax = Math.sqrt(x*x+y*y);

		if(parseInt(iMax)>radius){

			var z = parseInt(iMax);
			var iNowLeft = parseInt(radius*x/z);
			var iNowTop = parseInt(radius*y/z);

			return {left:iNowLeft,top:iNowTop};

		}else{

			return {left:x,top:y};

		};
		
	};

	function animate(obj, json, options)
	{
		//参数
		options=options || {};
		options.time=options.time || 700;
		options.type=options.type || 'buffer';
		
		//匀速
		var count=parseInt(options.time/30);
		
		var start={};
		var dis={};
		var allSame=true;
		
		for(var name in json)
		{
			if(name=='opacity')
			{
				var cur=parseFloat(getStyle(obj, name))*100;
			}
			else
			{
				var cur=parseInt(getStyle(obj, name));
			}
			
			if(isNaN(cur))
			{
				switch(name)
				{
					case 'left':
						cur=obj.offsetLeft;
						break;
					case 'top':
						cur=obj.offsetTop;
						break;
				}
			}
			
			dis[name]=json[name]-cur;
			start[name]=cur;

			if(start[name] != json[name]){

				allSame=false;

			};
		}

		if(allSame)
		{
			options.end && options.end();
			return;
		};
		
		if(count<1)count=1;
		
		obj.zns_json=json;
		obj.zns_start=start;
		obj.zns_dis=dis;
		obj.zns_n=0;
		
		if(!obj.timer){

			obj.timer=setInterval(function (){
				obj.zns_n++;
				
				for(var i in obj.zns_json)
				{
					var scale=obj.zns_n/count;
					
					var cur=0;
					
					switch(options.type)
					{
						case 'linear':
							cur=obj.zns_start[i]+obj.zns_dis[i]*scale;
							break;
						case 'buffer':
							var a=1-scale;
							cur=obj.zns_start[i]+obj.zns_dis[i]*(1-a*a*a);
							break;
						default:
							var a=1-scale;
							cur=obj.zns_start[i]+obj.zns_dis[i]*(1-a*a*a);
							break;
					}
					
					if(i=='opacity')
					{
						obj.style.filter='alpha(opacity:'+cur+')';
						obj.style.opacity=cur/100;
					}
					else
					{
						obj.style[i]=cur+'px';
					}
				}
				
				if(obj.zns_n==count)
				{	
					clearInterval(obj.timer);
					obj.timer=null;
					
					options.end && options.end();
				}
			}, 30);
		}
	};

	function stopAnimate(obj){

		if(obj&&obj.timer){

			clearInterval(obj.timer);
			obj.timer = null;

		};

	};

	function getPos(obj){

		var ileft = 0;
		var itop = 0;

		while(obj){

			ileft += obj.offsetLeft;
			itop += obj.offsetTop;

			obj = obj.offsetParent;

		};

		return {left:ileft,top:itop};

	};

	function isChild(oParent, obj){

		while(obj)
		{
			if(obj==oParent)
			{
				return true;
			}
			
			obj=obj.parentNode;
		}
		
		return false;
	};

	function rectangle(iNum,iMax,iMin){
		
		if( iNum > iMax ){
			return iMax;
		}
		else if( iNum < iMin ){
			return iMin;
		}
		else{
			return iNum;
		}
		
	};

	function fnJsonP(url,cbName,data,fnScc,fnFaild){

		var sCbName = 'json_p'+Math.random();

		sCbName = sCbName.replace('.','');
		data[cbName] = sCbName;

		window[sCbName] = function(){

			fnScc&&fnScc.apply(null,arguments);
			oS.parentNode.removeChild(oS);
			window[sCbName] = null;
			clearTimeout(timer);

		};

		var arr = [];

		for(var name in data){

			arr.push(name+'='+data[name]);

		};

		var str = url+'?'+arr.join('&');
		var oS = document.createElement('script');
		var aS = document.getElementsByTagName('script');
	
		oS.src = str;
		aS[0].parentNode.insertBefore(oS,aS[0]);

		var timer = setTimeout(function(){

			oS.parentNode.removeChild(oS);
			fnFaild&&fnFaild();

		},5000);

	};

	function fnGetText(obj){

		return (obj.textContent)?obj.textContent:obj.innerText;

	};

	function getDecimal(num){

		num = Math.abs(num);

		if(parseInt(num)<num){

			var sNewStr = num + '';

			sNewStr = sNewStr.split('.');

			return sNewStr[1].length;

		};

	};
	var a = 0;

	function time2date(t)
	{
		var oDate=new Date();
		
		oDate.setTime(t*1000);
		
		return oDate.getFullYear()+'-'+(oDate.getMonth()+1)+'-'+oDate.getDate()+' '+oDate.getHours()+':'+oDate.getMinutes();
	};

	function bgResize(obj){

		iClientWidth = document.documentElement.clientWidth;
		iClientHeight = document.documentElement.clientHeight;

		var iWidth = obj.offsetWidth;
		var iHeight = obj.offsetHeight;

		if(iClientHeight>=iClientWidth*iHeight/iWidth){

			setStyle(obj,{

				width:iClientHeight*iWidth/iHeight+'px',
				height:iClientHeight+'px'

			});
			
		}
		else if(iClientHeight<iClientWidth*iHeight/iWidth){

			setStyle(obj,{

				width:iClientWidth+'px',
				height:iClientWidth*iHeight/iWidth+'px'

			});
			
			
		}

	};

	module.exports = {

		setStyle:setStyle,
		addEvent:addEvent,
		Drag:Drag,
		toDouble:toDouble,
		GetTime:GetTime,
		dupEle:dupEle,
		addClass:addClass,
		GetByClass:GetByClass,
		toDuble:toDuble,
		animate:animate,
		getStyle:getStyle,
		stopAnimate:stopAnimate,
		getPos:getPos,
		isChild:isChild,
		fnJsonP:fnJsonP,
		fnGetText:fnGetText,
		getDecimal:getDecimal,
		removeClass:removeClass,
		haveClass:haveClass,
		URL:URL,
		time2date:time2date,
		bgResize:bgResize
		
	};

});