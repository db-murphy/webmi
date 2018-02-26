

define(function (require,exports,module){

	var common = require('../common/common.js');

	function getMsgList(sValue,fnScc){

		common.fnJsonP('http://suggestion.baidu.com/su','cb',{wd:sValue},fnScc);

	};

	exports.getMsgList = getMsgList;

});