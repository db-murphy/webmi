

define(function (require,exports,module){

	var common = require('../common/common.js');
	var oTmpLi = document.getElementById('tmp_li');
	var oSearchList = document.getElementById('searchList');
	var oUl = oSearchList.getElementsByTagName('ul')[0];
	var oWord = document.getElementById('word');

	function createMsgList(arr){

		oUl.innerHTML = '';
		
		if(arr.length == 0){

			oSearchList.style.display = 'none';

		}else{

			oSearchList.style.display = 'block';

		};

		for(var i=0; i<arr.length; i++){

			var oLi = document.createElement('li');

			oLi.innerHTML = '<p></p><a href="javascript:;">'+arr[i]+'</a>';
			oUl.appendChild(oLi);

		};

		var aLi = oUl.getElementsByTagName('li');

		for(var i=0; i<aLi.length; i++){

			aLi[i].onmouseover = function(){

				var oActiveP = this.getElementsByTagName('p')[0];
				var oA = this.getElementsByTagName('a')[0];
				
				//common.stopAnimate(oActiveP);
				common.animate(oActiveP,{opacity:60});
				

			};

			aLi[i].onmouseout = function(){

				var aP = oUl.getElementsByTagName('p');
				
				for(var j=0; j<aP.length; j++){

					//common.stopAnimate(aP[j]);
					common.animate(aP[j],{opacity:30});

				};

			};

			aLi[i].onclick = function(){

				var oA = this.getElementsByTagName('a')[0];
				var url = 'http://www.baidu.com/s?wd='+oA.innerHTML;

				window.open(url,'_blank');
				oWord.value = oA.innerHTML;
				oSearchList.style.display = 'none';

			};


		};

		
	};

	exports.createMsgList = createMsgList;

});