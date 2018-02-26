

define(function (require,exports,module){

	var sleep = require('../sleepTimer/sleepListener.js');
	var common = require('../common/common.js');

	function progress(){

		var oLoading = document.getElementById('loading');

		var oImgUrlReq =[

			  {"imgSrc":"img/CalculatorImg/bg.png"},
			  {"imgSrc":"img/CalculatorImg/bgB.png"},
			  {"imgSrc":"img/CalculatorImg/bgT.png"},
			  {"imgSrc":"img/CalculatorImg/CalculatorBtn.png"},
			  {"imgSrc":"img/CalculatorImg/CalculatorClose.png"},
			  {"imgSrc":"img/CalculatorImg/countActive.jpg"},
			  {"imgSrc":"img/CalculatorImg/countBtn.png"},
			  {"imgSrc":"img/CalculatorImg/getRsult.jpg"},
			  {"imgSrc":"img/CalculatorImg/getRsultActive.jpg"},
			  {"imgSrc":"img/CalculatorImg/input.jpg"},
			  {"imgSrc":"img/CalculatorImg/input2.jpg"},
			  {"imgSrc":"img/CalculatorImg/zroBg.jpg"},
			  {"imgSrc":"img/CalculatorImg/zroBg2.jpg"},
			  {"imgSrc":"img/CalculatorImg/zroBgActive.jpg"},

			  {"imgSrc":"img/webQQ/bgBottom.png"},
			  {"imgSrc":"img/webQQ/bgCon.png"},
			  {"imgSrc":"img/webQQ/bgTop.png"},
			  {"imgSrc":"img/webQQ/clodqingxi.png"},
			  {"imgSrc":"img/webQQ/close.jpg"},
			  {"imgSrc":"img/webQQ/close.png"},
			  {"imgSrc":"img/webQQ/closeHover.png"},
			  {"imgSrc":"img/webQQ/inputBg.png"},
			  {"imgSrc":"img/webQQ/inputBgWrong.png"},
			  {"imgSrc":"img/webQQ/loginBgOne.png"},
			  {"imgSrc":"img/webQQ/loginBtn.png"},
			  {"imgSrc":"img/webQQ/loginBtnactive.png"},
			  {"imgSrc":"img/webQQ/loginBtnhover.png"},
			  {"imgSrc":"img/webQQ/min.jpg"},
			  {"imgSrc":"img/webQQ/minHover.png"},
			  {"imgSrc":"img/webQQ/QQBtn.png"},
			  {"imgSrc":"img/webQQ/rightTopLine.png"},
			  {"imgSrc":"img/webQQ/scrollBottom.png"},
			  {"imgSrc":"img/webQQ/scrollTop.png"},
			  {"imgSrc":"img/webQQ/smallColdqingxi.png"},
			  {"imgSrc":"img/webQQ/textInput.jpg"},
			  {"imgSrc":"img/webQQ/userBottom.png"},
			  {"imgSrc":"img/webQQ/userIcon1.png"},
			  {"imgSrc":"img/webQQ/userIcon2.png"},
			  {"imgSrc":"img/webQQ/userIcon3.png"},
			  {"imgSrc":"img/webQQ/userIcon4.png"},
			  {"imgSrc":"img/webQQ/userIcon5.png"},
			  {"imgSrc":"img/webQQ/userIcon6.png"},
			  {"imgSrc":"img/webQQ/userIcon7.png"},
			  {"imgSrc":"img/webQQ/userIcon8.png"},
			  {"imgSrc":"img/webQQ/wrongBg.png"},
			  {"imgSrc":"img/webQQ/wrongIcon.png"}

		];

		//皮肤图片;
		var skin = [

			{"imgSrc":"img/weatherIcon/weatherOne.png"},

			{"imgSrc":"img/skin/bg2.jpg"},
			{"imgSrc":"img/skin/bg3.jpg"},
			{"imgSrc":"img/skin/bg4.jpg"},
			{"imgSrc":"img/skin/bg5.jpg"},
			{"imgSrc":"img/skin/bg6.jpg"},
			{"imgSrc":"img/skin/bg7.jpg"},
			{"imgSrc":"img/skin/bg1.jpg"},

			{"imgSrc":"img/maskBg.jpg"},
			{"imgSrc":"img/aboutBg2.png"},
			{"imgSrc":"img/bigRound.png"},
			{"imgSrc":"img/calenderBottom.png"},
			{"imgSrc":"img/calenderBtn.png"},
			{"imgSrc":"img/calenderTop.png"},
			{"imgSrc":"img/click.png"},
			{"imgSrc":"img/closeBg.png"},
			{"imgSrc":"img/darkBg.png"},
			{"imgSrc":"img/dian.png"},
			{"imgSrc":"img/drag.png"},
			{"imgSrc":"img/favicon.ico"},
			{"imgSrc":"img/linght2.png"},
			{"imgSrc":"img/listTopBg.png"},
			{"imgSrc":"img/listTopBottom.png"},
			{"imgSrc":"img/lock.png"},
			{"imgSrc":"img/lock2.png"},
			{"imgSrc":"img/MILOGO.png"},
			{"imgSrc":"img/nextBg.png"},
			{"imgSrc":"img/no_click.png"},
			{"imgSrc":"img/preBg.png"},
			{"imgSrc":"img/round.png"},
			{"imgSrc":"img/searchBg.png"},
			{"imgSrc":"img/searchBtn.png"},
			{"imgSrc":"img/serchBg2.png"},
			{"imgSrc":"img/smallRound.png"},
			{"imgSrc":"img/todayBg.png"},
			{"imgSrc":"img/topBg.jpg"},
			{"imgSrc":"img/useBtnHover.png"},
			{"imgSrc":"img/limitLeft.png"},
			{"imgSrc":"img/limitRight.png"}

		];

		var k = 0;
		var oP = oLoading.getElementsByTagName('p')[0];

		//加载超时提示;
		var oTimer = setTimeout(function(){

			common.animate(oP,{opacity:100});

		},5000);

		//必须加载的图片;
		for(var i=0;i<skin.length;i++){

			(function(index){

				var yImg = new Image();

				yImg.onload = function(){

					k++;

					if(k==skin.length){
						
					   	oLoading.style.display = 'none';
					   	clearInterval(oTimer);
					   	common.animate(oP,{opacity:0});

					   	//睡眠控制;
						var oBigMask = document.getElementById('bigMask');
						sleep.sleepListener(oBigMask);

						var oLockBgImg = document.getElementById('lockBgImg');

						common.bgResize(oLockBgImg);
						common.addEvent(window,'resize',function(){

							common.bgResize(oLockBgImg);

						});

						var oImg = document.getElementById('bgImg');

						common.bgResize(oImg);

					};

				};
		
				yImg.src = skin[index].imgSrc;

			})(i);

	    };

	    //预加载的图片;
	    for(var i=0; i<oImgUrlReq.length; i++){

	    	(function(index){

	    		var yImg = new Image();

	    		yImg.src = oImgUrlReq[index].imgSrc;

	    	})(i);


	    };   

	};


	module.exports = {

		progress:progress
		
	};

	

})