

define(function (require,exports,module){

	var common = require('../common/common.js');

	//解锁轮播;
	var aFontSize = [12,13,14,15,16,15,14,13,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12,12];

	function loding(obj){

		var aRunEle = obj.getElementsByTagName('li');
		

		var TimerOfRun = setInterval(function(){

			run(aFontSize,aRunEle);

		},70);

	};
	


	function run(arr,aRunEle){
		aFontSize.unshift(aFontSize.pop());
		for(var i=0; i<aRunEle.length; i++){

			aRunEle[i].style.fontSize = aFontSize[i] + 'px';

		};

	};

	module.exports = {

		loding:loding

	};
	
});