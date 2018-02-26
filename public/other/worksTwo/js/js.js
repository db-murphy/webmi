window.onload=function(){
	var oBox = document.getElementById('box');
	var oPic_list = document.getElementById('pic_list');
	var oPic_li = oPic_list.getElementsByTagName('li');
	var oImg = document.getElementsByTagName('img');
	var oTextBox = document.getElementById('text_list');
	var oText = oTextBox.getElementsByTagName('div');
	var oIcon = document.getElementById('ico_list');
	var oIcon_li = oIcon.getElementsByTagName('a');
	var oBtn_L = document.getElementById('btn_prev');
	var oBtn_R = document.getElementById('btn_next');
	var oUl = document.getElementById('ul1');
	var oLi = oUl.getElementsByTagName('li');
	var oMskL=document.getElementById('mask_Left');
	var oMaskR=document.getElementById('mask_Right');
	var oBig_mask=document.getElementById('big_mask');
	var oBg = oLi[oLi.length-1];
	var oH_Box = document.getElementById('H_Box');
	var oInner = document.getElementById('inner');
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
	
//*************浏览器版本判断**************************************
	 var Sys = {};
     var ua = navigator.userAgent.toLowerCase();
     var s;
         (s = ua.match(/msie ([\d.]+)/)) ? Sys.ie = s[1] :
         (s = ua.match(/firefox\/([\d.]+)/)) ? Sys.firefox = s[1] :
         (s = ua.match(/chrome\/([\d.]+)/)) ? Sys.chrome = s[1] :
         (s = ua.match(/opera.([\d.]+)/)) ? Sys.opera = s[1] :
         (s = ua.match(/version\/([\d.]+).*safari/)) ? Sys.safari = s[1] : 0;
	

	
//*************浏览器版本判断结束**************************************	
	
	oBtn_L.onmouseover=oMskL.onmouseover=function(){
		if(Sys.ie==6){                 //屏蔽IE6下按钮淡出淡入效果，因为在IE6下这个幻灯片播放会让其淡出淡入不顺畅
			oBtn_L.style.filter='alpha(opacity=100)';
			oBtn_L.style.opacity=100;
			}
		else{
			miaovStartMove(oBtn_L,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
			}
		}
	oBtn_L.onmouseout=oMskL.onmouseout=function(){
		if(Sys.ie==6){
			oBtn_L.style.filter='alpha(opacity=0)';
			oBtn_L.style.opacity=0;
			}
		else{
			miaovStartMove(oBtn_L,{opacity:0},MIAOV_MOVE_TYPE.BUFFER);
		}
		}
	oBtn_R.onmouseover=oMaskR.onmouseover=function(){
		if(Sys.ie==6){                 //屏蔽IE6下按钮淡出淡入效果，因为在IE6下这个幻灯片播放会让其淡出淡入不顺畅
			oBtn_R.style.filter='alpha(opacity=100)';
			oBtn_R.style.opacity=100;
			}
		else{
			miaovStartMove(oBtn_R,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
			}
		}
	oBtn_R.onmouseout=oMaskR.onmouseout=function(){
		if(Sys.ie==6){
			oBtn_R.style.filter='alpha(opacity=0)';
			oBtn_R.style.opacity=0;
			}
		else{
			miaovStartMove(oBtn_R,{opacity:0},MIAOV_MOVE_TYPE.BUFFER);
		}
		}

	
	oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
	oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';
	oMaskR.style.width=oMskL.style.width=document.documentElement.clientWidth/2+'px';
	oMaskR.style.height=oMskL.style.height=document.documentElement.clientHeight+'px';
//*******************************************************幻灯片开始***********************************************
     var iNow = 0;
     for(i=0;i<oIcon_li.length;i++){
		 oIcon_li[i].index=i;
		 oIcon_li[i].onclick=function(){
			 if(iNow==this.index){
				 return;
				 }
				iNow = this.index;
			    tab();
			 }
		 }
	function tab(){
		for(i=0;i<oIcon_li.length;i++){
				 oIcon_li[i].className='';
				 oPic_li[i].style.filter='alpha(opacity=0)';
				 oPic_li[i].style.opacity=0;
				 oText[i].className='';
				 miaovStopMove(oPic_li[i]);
				 }
			 oIcon_li[iNow].className='click';
			 oText[iNow].className='show';
			 miaovStartMove(oPic_li[iNow],{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
		}
	
	function play(){
		iNow++;
		if(iNow>=oPic_li.length){
			iNow = 0;
			}
		tab();
		}
	var timer=setInterval(play,7000);
	oBtn_L.onclick=function(){
		iNow--;
		if(iNow==-1){
			iNow=oPic_li.length-1;
			}
		tab();
		}
	oBtn_R.onclick=function(){
		iNow++;
		if(iNow==oPic_li.length){
			iNow=0;
			}
		tab();
		}
//*******************************************************幻灯片结束***********************************************
}
