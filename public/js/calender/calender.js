

define(function (require,exports,module){

	var common = require('../common/common.js');

	function creatCalender(obj){

		//拖动;
		common.Drag(obj,{rectangle:true,parent:obj.parentNode,opacity:40});

		//生成日历列表;
		dateList(obj);

		//关闭日历;
		closeCalender(obj);

	};

	function getTimeNow(obj,iNow){

		var oTimeNow = common.GetTime();
		var oDayNow = common.GetByClass(obj,'dayNow')[0];
		var oMonthNow = common.GetByClass(obj,'monthNow')[0];
		var oDateNow = common.GetByClass(obj,'dateNow')[0];
		var oDate = new Date();

		oDate.setDate(1);
		oDate.setMonth(oDate.getMonth()+iNow);

		oDayNow.innerHTML = oTimeNow.day;
		oMonthNow.innerHTML = oDate.getFullYear()+'.'+common.toDuble((oDate.getMonth()+1));
		oDateNow.innerHTML = oTimeNow.date;

	};

	function dateList(obj){

		var oDateList = common.GetByClass(obj,'dateList')[0];
		var aTabBtn = common.GetByClass(obj,'TabBtn');
		var oTabBox = common.GetByClass(obj,'TabBox')[0];
		var iNow = 0;

		function refreshCalender(){

			oDateList.innerHTML = '';

			//生成空白Li;
			var oDate = new Date();

			oDate.setMonth(oDate.getMonth()+iNow);
			oDate.setDate(1);

			var m = oDate.getDay();

			if(m==0){

				m = 7;

			};

			m--;

			for(var i=0; i<m; i++){

				var oLi = document.createElement('li');

				oLi.className = 'DateListLi';
				oDateList.appendChild(oLi);

			};
			//生成日期Li;
			var oDate = new Date();

			oDate.setDate(1);
			oDate.setMonth(oDate.getMonth()+iNow);
			
			oDate.setDate(1);
			oDate.setMonth(oDate.getMonth()+1);
			oDate.setDate(0);

			var iLiCount = oDate.getDate();

			for(var i=0; i<iLiCount; i++){

				var oLi = document.createElement('li');

				oLi.innerHTML = i+1;
				//oLi.className = 'DateListLi';

				oDateList.appendChild(oLi);

			};

			//周末变色;
			for(var i=0; i<oDateList.children.length; i++){

				if(i%7==5 || i%7==6){

					oDateList.children[i].className = 'DateListLiWeekend';

				};

			};

			//过去边灰;
			if(iNow<0){

				for(var i=0; i<oDateList.children.length; i++){

					oDateList.children[i].className = 'past';

				};

			}else if(iNow==0){

				var oDate = new Date();
				var iToday = oDate.getDate();

				for(var i=0; i<oDateList.children.length; i++){

					if(parseInt(oDateList.children[i].innerHTML)<iToday){

						oDateList.children[i].className = 'past';

					}else if(parseInt(oDateList.children[i].innerHTML)==iToday){

						oDateList.children[i].className = 'today';

					};

				};

			};

			getTimeNow(obj,iNow);

		};

		refreshCalender();

		aTabBtn[0].onclick = function(){

			iNow--;
			refreshCalender();

		};
		aTabBtn[1].onclick = function(){

			iNow++;
			refreshCalender();

		};

		aTabBtn[0].onmouseover = function(){

			var oMoveBtn = document.createElement('a');
			
			oMoveBtn.className = 'TabBtn BtnPre';
			oTabBox.insertBefore(oMoveBtn,aTabBtn[0]);
			common.animate(oMoveBtn,{left:-20,opacity:0},{end:function(){

				oTabBox.removeChild(oMoveBtn);

			}});

		};

		aTabBtn[1].onmouseover = function(){

			var oMoveBtn = document.createElement('a');

			oMoveBtn.className = 'TabBtn BtnNext';
			oTabBox.insertBefore(oMoveBtn,aTabBtn[1]);
			common.animate(oMoveBtn,{right:-20,opacity:0},{end:function(){

				oTabBox.removeChild(oMoveBtn);

			}});

		};

	};

	function closeCalender(obj){

		var oCloseBtn = document.getElementById('closeBtn');

		oCloseBtn.onclick = function(){

			var oPenLeft = obj.offsetLeft;
			var iTargetLeft = obj.offsetLeft + 100;

			common.animate(obj,{left:iTargetLeft,opacity:0},{time:300,end:function(){

				obj.style.display = 'none';
				obj.style.left = oPenLeft + 'px';
				obj.style.filter = 'alpha(opacity:100)';
				obj.style.opacity = 1;

			}});

		};

	};

	exports.creatCalender = creatCalender;

});