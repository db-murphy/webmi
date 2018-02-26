

define(function (require,exports,module){

	var common = require('common/common.js');
	
	//logo
	var loding = require('logo/logo.js');
	var oLoading = document.getElementById('loading');

	loding.loding(oLoading);

	//loading效果;
	var progress = require('progress/progress.js');
	progress.progress();

	//大盒子尺寸控制;
	var bgSize = require('bgSize/bgSize.js');
	var oBigBox = document.getElementById('bigBox');
	bgSize.toClientSize(oBigBox);

 	common.addEvent(window,'resize',function(){

		bgSize.toClientSize(oBigBox);

	});

	//布局控制;
	var oMoveBox = document.getElementById('moveBox');
	bgSize.MoveBoxResize(oMoveBox);

	//搜索框;
	var search = require('search/search.js');
	var oSearch = document.getElementById('search');

	search.getSearch(oSearch);

	//天气;
	var weather = require('weather/weather.js');
	var oWeather = document.getElementById('weather');

	weather.getWeather(oWeather);

	//时间更新;
	var tiker = require('time/ticker.js');
	var oTime = document.getElementById('time');
	tiker.updateTime(oTime);
	var timer = setInterval(function(){

		tiker.updateTime(oTime);

	},1000);

	

	//皮肤切换;
	var skin = require('skin/skin.js');
	var oSkin = document.getElementById('skin');

	skin.skinCtrol(oSkin);
	
});