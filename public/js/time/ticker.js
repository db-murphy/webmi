

define(function (require,exports,module){

	var common = require('../common/common.js');

	function updateTime(obj){

		var iTimeNow = common.GetTime();

		obj.innerHTML = 
			'<h1>'+common.toDuble(iTimeNow.hours)+'<span>:</span>'+common.toDuble(iTimeNow.minutes)+'</h1>'+
			'<p>'+iTimeNow.year+'年'+iTimeNow.month+'月'+iTimeNow.date+'日</p>'+
			'<p>'+iTimeNow.day+'</P>';

	};

	exports.updateTime = updateTime;

});