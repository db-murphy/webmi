

define(function (require,exports,module){

	var common = require('../common/common.js');

	function skinCtrol(obj){

		var oBtn = document.getElementById('skinBtn');
		var oImg = document.getElementById('bgImg');
		var index = 1;
		var bChange = false;

		var iMoveStarLeft,iMoveStarTop;
		
		common.Drag(oBtn,{rectangle:true,parent:obj,back:true},{

			fnUp:function(){

				if(oBtn.offsetTop-iMoveStarTop!=0){

					if(bChange){

						index++;

						if(index>7){

							index = 1;

						};

						oImg.src = 'img/skin/bg'+index+'.jpg';
						bChange = false;

					};

				};

			},

			fnMove:function(){

				bChange = true;

			},

			fnDown:function(){

				iMoveStarTop = oBtn.offsetTop;

			}

		});

	};

	exports.skinCtrol = skinCtrol;

});