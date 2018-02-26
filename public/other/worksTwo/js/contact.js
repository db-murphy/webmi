var oBox = document.getElementById('box');

var oBig_mask=document.getElementById('big_mask');
var oH_Box = document.getElementById('H_Box');
var oInner = document.getElementById('inner');
var oUl = document.getElementById('ul1');
var oLi = oUl.getElementsByTagName('li');
var oBg = oLi[oLi.length-1];
var oNav = document.getElementById('nav_main');
var oLl = document.getElementById('LL');
var oHeader_black_bg = oLl.getElementsByTagName('span')[0];
oNav.onmouseover=oH_Box.onmouseover=function(){
		miaovStartMove(oInner,{top:-55},MIAOV_MOVE_TYPE.BUFFER);
		miaovStartMove(oHeader_black_bg,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
		}
oNav.onmouseout=oH_Box.onmouseout=function(){
		miaovStartMove(oInner,{top:0},MIAOV_MOVE_TYPE.BUFFER);
		miaovStartMove(oHeader_black_bg,{opacity:30},MIAOV_MOVE_TYPE.BUFFER);
		}


	
	
oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';