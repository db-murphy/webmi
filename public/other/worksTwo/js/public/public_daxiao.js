window.onresize=function(){
	var oBox = document.getElementById('box');
	var oMskL=document.getElementById('mask_Left');
	var oMaskR=document.getElementById('mask_Right');
	var oBig_mask=document.getElementById('big_mask');
	
	


	
//*******************幻灯片大小控制**************************
	oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
	oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';
	oMaskR.style.width=oMskL.style.width=document.documentElement.clientWidth/2+'px';
	oMaskR.style.height=oMskL.style.height=document.documentElement.clientHeight+'px';
//********************大小控制结束*******************************

}