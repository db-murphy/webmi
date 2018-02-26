

define(function (require,exports,module){

	var common = require('../common/common.js');

	function createCalculator(obj){

		var oTextInner = common.GetByClass(obj,'textInner')[0];
		var oTextBottom = document.createElement('div');
		var oCloseBtn = document.getElementById('CalculatorcloseBtn');
		var sInputValue = '';

		oTextBottom.innerHTML = '0';
		oTextBottom.className = 'inputTextBottom classBottom';
		oTextInner.appendChild(oTextBottom);

		//数字键;
		var aNumberBtn = common.GetByClass(obj,'number');
		//小数点;
		var oPoint = common.GetByClass(obj,'point')[0];
		//运算符;
		var aComputed = common.GetByClass(obj,'computed');
		//等号;
		var oGetRsult = common.GetByClass(obj,'getRsult')[0];
		//运算结果;
		var iResult;
		//清零按钮;
		var oResert = common.GetByClass(obj,'resert')[0];
		//删除按钮;
		var oDel = common.GetByClass(obj,'del')[0];

		var bClick = true;

		//计算器可以拖动;
		common.Drag(obj,{rectangle:true,parent:obj.parentNode,opacity:40});
		

		//数字键点击;
		for(var i=0; i<aNumberBtn.length; i++){

			aNumberBtn[i].onclick = function(){

				var oResultBox = common.GetByClass(obj,'classBottom')[0];

				if(parseFloat(oResultBox.innerHTML)==0&&oResultBox.innerHTML=='0'){

					oResultBox.innerHTML = this.innerHTML;

				}else{

					oResultBox.innerHTML += this.innerHTML;

				};
				
				oResultBox.innerHTML = oResultBox.innerHTML.replace(/\s/g,'');

			};

			aNumberBtn[i].onmousedown = function(ev){

				var oEvent = ev || event;

				oEvent.cancelBubble = true;

				if(common.haveClass(this,'zro')){

					common.addClass(this,'zroActive');

				}else{

					common.addClass(this,'countActive');

				};

				return false;

			};

			(function(index){

				common.addEvent(document,'mouseup',function(){

					if(common.haveClass(aNumberBtn[index],'zro')){

						common.removeClass(aNumberBtn[index],['zroActive']);

					}else{

						common.removeClass(aNumberBtn[index],['countActive']);

					};

				});

			})(i);

		};

		//运算符点击;
		for(var i=0; i<aComputed.length; i++){

			aComputed[i].onclick = function(){

				var oResultBox = common.GetByClass(obj,'classBottom')[0];

				oResultBox.innerHTML = oResultBox.innerHTML.replace(/\s/g,'');

				var sText = oResultBox.innerHTML;
				var sLast = sText.substring(sText.length-1);

				if(sLast!='+'&&sLast!='-'&&sLast!='×'&&sLast!='÷'&&sLast!='.'){

					oResultBox.innerHTML += this.innerHTML;

				};

			};

			(function(index){

				common.addEvent(document,'mouseup',function(){

					common.removeClass(aComputed[index],['countActive']);

				});

			})(i);

			/*aComputed[i].onmouseup = function(){

				
				common.removeClass(this,['countActive']);

			};*/
			
			aComputed[i].onmousedown = function(ev){

				var oEvent = ev || event;

				oEvent.cancelBubble = true;
				common.addClass(this,'countActive');

				return false;

			};


			

		};

		//点击等号;
		oGetRsult.onclick = function(){
			
			if(bClick){

				var oResultBox = common.GetByClass(obj,'classBottom')[0];

				oResultBox.innerHTML = oResultBox.innerHTML.replace(/\s/g,'');

				var sOldEquation = oResultBox.innerHTML;
				var sEquation = oResultBox.innerHTML.replace(/[×]/g,'*').replace(/[÷]/g,'/');

				//去掉最后一个运算符;
				if(/[\+\-\*\/\.]/.test(sEquation.substring(sEquation.length-1))){

					sEquation = sEquation.substring(0,sEquation.length-1);

				};

				if(/[\+\-\*\/]/.test(sEquation)&&(!(/^\-/.test(sEquation))||((sEquation.match(/[\-\+\*\/]/g)).length>1))){

					var oRemoveDiv = common.GetByClass(obj,'inputTextTop')[0];

					if(oRemoveDiv){

						oTextInner.removeChild(oRemoveDiv);

					};

					var oldEquation = sOldEquation + '=';
					var answerDiv = document.createElement('div');

					var ssstr = sEquation;
					if(/\=/.test(ssstr)){

						ssstr = ssstr.substring(0,ssstr.length-1);

					};

					iResult = eval(ssstr);

					//如果小数太多，保留小数位数;
					if(common.getDecimal(iResult)){

						var iDecimalLength = common.getDecimal(iResult);

						if(iDecimalLength>6){

							iResult = iResult*Math.pow(10,6) + '';

							var sExchange = iResult.split('.');

							iResult = parseInt(sExchange[0])/Math.pow(10,6);

						};

					};

					answerDiv.innerHTML = oldEquation;
					answerDiv.style.color = '#4f4f4e';
					answerDiv.className = 'inputTextBottom';
					common.addClass(answerDiv,'classBottom');
					oTextInner.appendChild(answerDiv);
					oTextInner.removeChild(oResultBox);

					var oNewDiv = document.createElement('div');

					//oNewDiv.className = 'inputTextBottom';
					oNewDiv.innerHTML = iResult;
					common.setStyle(oNewDiv,{

						'font-size':'30px',
						'position':'absolute',
						'bottom':'-40px',
						'right':'0px',
						'height':'40px',
						'line-height':'40px'

					});
					oTextInner.appendChild(oNewDiv);
					bClick = false;

					oNewDiv.className = 'classBottom';
					common.animate(oNewDiv,{bottom:0},{time:200,end:function(){

						bClick = true;
						common.addClass(oNewDiv,'inputTextBottom');
						
					}});

					

					common.animate(answerDiv,{fontSize:16,top:0},{time:200,end:function(){

						answerDiv.className = 'inputTextTop';

					}});

				};

			};
			
		};

		oGetRsult.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

			common.addClass(this,'getRsultActive');

			return false;

		};

		common.addEvent(document,'mouseup',function(){

			common.removeClass(oGetRsult,['getRsultActive']);
			
		});

		//点击清零按钮;
		oResert.onclick = function(){

			var oResultBox = common.GetByClass(obj,'classBottom')[0];

			oResultBox.innerHTML = '0';

			var oRemoveDiv = common.GetByClass(obj,'inputTextTop')[0];

			if(oRemoveDiv){

				oTextInner.removeChild(oRemoveDiv);

			};

		};

		oResert.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

			common.addClass(this,'countActive');

			return false;

		};

		common.addEvent(document,'mouseup',function(){

			common.removeClass(oResert,['countActive']);
			
		});

		//点击删除按钮;
		oDel.onclick = function(){

			var oResultBox = common.GetByClass(obj,'classBottom')[0];

			oResultBox.innerHTML = oResultBox.innerHTML.replace(/\s/g,'');

			if(oResultBox.innerHTML!='0'&&oResultBox.innerHTML.length>1){

				oResultBox.innerHTML = oResultBox.innerHTML.substring(0,oResultBox.innerHTML.length-1);

			}else{

				oResultBox.innerHTML = '0';

				var oRemoveDiv = common.GetByClass(obj,'inputTextTop')[0];

				if(oRemoveDiv){

					oTextInner.removeChild(oRemoveDiv);

				};

			};

		};

		//点击关闭按钮;
		oCloseBtn.onclick = function(){

			var oPenLeft = obj.offsetLeft;
			var iObjLeftNow = obj.offsetLeft + 100;

			common.animate(obj,{left:iObjLeftNow,opacity:0},{time:500,end:function(){

				obj.style.display = 'none';
				obj.style.filter = 'alpha(opacity:100)';
				obj.style.left = oPenLeft + 'px';
				obj.style.opacity = 1;

				var oInputTextBottom = common.GetByClass(obj,'inputTextBottom')[0];
				var oInputTextTop = common.GetByClass(obj,'inputTextTop')[0];

				if(oInputTextBottom){

					oTextInner.removeChild(oInputTextBottom);

				};

				if(oInputTextTop){

					oTextInner.removeChild(oInputTextTop);
					
				};

			}});

		};

		oCloseBtn.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

		};

		oDel.onmousedown = function(ev){

			var oEvent = ev || event;

			oEvent.cancelBubble = true;

			common.addClass(this,'countActive');

			return false;

		};

		common.addEvent(document,'mouseup',function(){

			common.removeClass(oDel,['countActive']);
			
		});

	};

	exports.createCalculator = createCalculator;

});