

define(function (require,exports,module){

	var common = require('../common/common.js');
	var oLockBg = document.getElementById('lockBg');

	function sleepListener(obj){

		obj.sleepTime = 0;
		obj.iOpacity = null;
		//obj.dontOpenTimer = false;

		sleepListener();

		function sleepListener(){

			if(!obj.sleepTimer){

				obj.sleepTimer = setInterval(function(){

					obj.sleepTime++;
				
					if(obj.sleepTime==5){
						
						obj.style.display = 'block';
						common.animate(obj,{opacity:50},{time:1500});

					};

					if(obj.sleepTime==10){

						common.animate(obj,{opacity:100},{end:function(){

							//oLockBg.style.display = 'block';
							oLockBg.style.zIndex = 10000;
							oLockBg.style.filter = 'alpha(opacity:100)';
							oLockBg.style.opacity = 1;

						}});

						clearInterval(obj.sleepTimer);
						obj.sleepTimer = null;

						

					};

				},1000);

			};

		};

		common.addEvent(document,'mousedown',function(){

			if(obj.sleepTimer){

				clearInterval(obj.sleepTimer);
				obj.sleepTimer = null;

			};

			//obj.dontOpenTimer = true;
			//obj.sleepTime = 0;

			resertSleep();

		});

		common.addEvent(document,'keydown',function(){

			if(obj.sleepTimer){

				clearInterval(obj.sleepTimer);
				obj.sleepTimer = null;

			};

			//obj.dontOpenTimer = true;
			//obj.sleepTime = 0;

			resertSleep();

		});

		common.addEvent(document,'mouseup',function(){

			sleepListener();
			//obj.dontOpenTimer = false;
			//resertSleep();

		});

		common.addEvent(document,'keyup',function(){

			sleepListener();
			
		});

		common.addEvent(document,'mousemove',function(){

			/*if(!obj.sleepTimer&&!obj.dontOpenTimer){

				sleepListener();

			};*/
			sleepListener();
			resertSleep();

		});

		function resertSleep(){

			obj.sleepTime = 0;
			common.animate(obj,{opacity:0},{time:800});
			
			if(!obj.stopTimer){

				obj.stopTimer = setInterval(function(){

					iOpacity = common.getStyle(obj,'opacity');

					if(iOpacity<0.11){

						obj.style.display = 'none';
						clearInterval(obj.stopTimer);
						obj.stopTimer = null;

					};

				},30);

			};

		};

	};

	module.exports = {

		sleepListener:sleepListener

	};

});