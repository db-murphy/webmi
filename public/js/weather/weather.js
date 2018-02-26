

define(function (require,exports,module){

	var common = require('../common/common.js');
	
	var oWeather = document.getElementById('weather');
	var oSmallMonth = common.GetByClass(oWeather,'smallMonth')[0];
	var oDay = common.GetByClass(oWeather,'smallDate')[0];
	var oSmallTime = common.GetByClass(oWeather,'smallTime')[0];
	var oDis = common.GetByClass(oWeather,'dis')[0];
	var oIp = common.GetByClass(oWeather,'ip')[0];
	var oSmallWeather = common.GetByClass(oWeather,'smallWeather')[0];
	var oTemperature = common.GetByClass(oWeather,'temperature')[0];
	var oWeatherIcon = common.GetByClass(oWeather,'weatherIcon')[0];

	function getWeather(obj){

		//更新时间;
		getTime();

		var Timer = setInterval(getTime,1000);

		//获取天气;
		upDateWeather();


	};

	function upDateWeather(name){

		var data=name?{"city": name}:{'city':''};

		common.fnJsonP('http://sou.qq.com/online/get_weather.php','callback',data,function(json){

			oIp.innerHTML = json.future.name;
			oSmallWeather.innerHTML = json.future.wea_0;
			oTemperature.innerHTML = parseInt((parseInt(json.future.tmin_0)+parseInt(json.future.tmax_0))/2) + '℃';

			switch(json.future.wea_0){

				case '多云转阴':
					oWeatherIcon.src = 'img/weatherIcon/duoyunzhuanyin.png';
					break;

				case '小雨':
					oWeatherIcon.src = 'img/weatherIcon/xiaoyu.png';
					break;

				case '阴':
					oWeatherIcon.src = 'img/weatherIcon/ying.png';
					break;

				case '多云转阵雨':
					oWeatherIcon.src = 'img/weatherIcon/duoyunzhuanzhengyu.png';
					break;

				case '阴转阵雨':
					oWeatherIcon.src = 'img/weatherIcon/yingzhuanzhengyu.png';
					break;

				case '阴转小雨':
					oWeatherIcon.src = 'img/weatherIcon/yingzhuanxiaoyu.png';
					break;

				case '晴':
					oWeatherIcon.src = 'img/weatherIcon/qing.png';
					break;

				default:
					oWeatherIcon.src = 'img/weatherIcon/ying.png';
					break;

			};

		});

	};

	function getTime(){

		var iTimeNow = common.GetTime();
		
		oSmallMonth.innerHTML = iTimeNow.year + '年' + iTimeNow.month + '月' + iTimeNow.date + '日';
		oDay.innerHTML = iTimeNow.day;
		oSmallTime.innerHTML = common.toDuble(iTimeNow.hours)+':'+common.toDuble(iTimeNow.minutes);

		if(iTimeNow.hours>=0 && iTimeNow.hours<=12){

			oDis.innerHTML = 'AM';

		}else{

			oDis.innerHTML = 'PM';

		};

	};

	exports.getWeather = getWeather;

});