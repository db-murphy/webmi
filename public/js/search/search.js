

define(function (require,exports,module){

	var common = require('../common/common.js');
	var searchM = require('../search/searchM.js');
	var searchV = require('../search/searchV.js');

	function getSearch(obj){

		//获取列表;
		getMsg(obj);

	};

	function getMsg(obj){

		var oInput = document.getElementById('word');
		var oSearchList = document.getElementById('searchList');
		var oSpan = obj.getElementsByTagName('em')[0];
		
		var sValue = '';
		var iNow = -1;
		var bGet = true;
		var bTab = true;

		obj.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		oInput.onkeyup = function(ev){

			var oEvent = ev || event;

			if(bGet&&oEvent.keyCode!=13){

				//sValue = this.innerHTML;
				sValue = common.fnGetText(this);
				/*document.title = sValue;*/

				if(!sValue){

					sValue = '';

				};

				searchM.getMsgList(sValue,function(json){
					
					searchV.createMsgList(json.s);	

				});

			};

		};

		oInput.onkeydown = function(ev){

			var oEvent = ev || event;
			var aLi = oSearchList.getElementsByTagName('li');
			var aP = obj.getElementsByTagName('p');

			if(oEvent.keyCode==13){

				var str = common.fnGetText(oInput);

				if(str){

					str = str.replace(/\s+/g,'');

				}else{

					str = '';

				};

				var url = 'http://www.baidu.com/s?wd='+str;

				window.open(url,'_blank');
				oSearchList.style.display = 'none';

				return false;

			};

			if(oEvent.keyCode==38||oEvent.keyCode==40||oEvent.keyCode==37||oEvent.keyCode==39){

				bGet = false;

			}else{
				
				sValue = common.fnGetText(this);
				bGet = true;
				iNow = -1;

			};

			if(oEvent.keyCode==38||oEvent.keyCode==40){

				bTab = true;
				

			}else{

				bTab = false;

			};

			if(bTab){

				//上38  下40; 37 39
				if(aLi.length){

					switch(oEvent.keyCode){

						case 38:

							iNow--;

							if(iNow==-2){

								iNow = aLi.length-1;

							};
							break;

						case 40:

							iNow++;

							if(iNow==aLi.length){

								iNow = -1;

							};
							break;

					};

					for(var i=0; i<aP.length; i++){

						common.animate(aP[i],{opacity:30});

					};

					if(iNow==-1){

						this.innerHTML = '';
						this.innerHTML = sValue;


					}else if(iNow>-1){

						var oA = aLi[iNow].getElementsByTagName('a')[0];
						var oP = aLi[iNow].getElementsByTagName('p')[0];

						common.animate(oP,{opacity:60});

						this.innerHTML = oA.innerHTML;

					};

				};

			};
			
		};

		if(common.fnGetText(oInput)){

			oSpan.style.display = 'none';

		};

		oInput.onfocus = function(){

			oSpan.style.display = 'none';

		};

		oInput.onblur = function(){

			var str = common.fnGetText(oInput);

			if(str){

				str = str.replace(/\s+/g,'');

			};

			if(str){

				
				oSpan.style.display = 'none';

			}else{

				oSpan.style.display = 'block';

			};
			
		};

		oSpan.onclick = function(){

			oInput.focus();

		};

		var oToBaiDu = common.GetByClass(obj,'toBaiDu')[0];

		oToBaiDu.onclick = function(){

			var str = common.fnGetText(oInput);

			if(str){

				str = str.replace(/\s+/g,'');

			}else{

				str = '';

			};

			var url = 'http://www.baidu.com/s?wd='+str;

			window.open(url,'_blank');
			oSearchList.style.display = 'none';

		};

		common.addEvent(document,'click',function(){

			oInput.blur();
			
		});

		obj.onclick = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

	};

	exports.getSearch = getSearch;

});