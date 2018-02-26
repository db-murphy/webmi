var oImg = document.getElementsByTagName('img');
var i=0;
	for(i=0;i<oImg.length;i++){
		if(document.documentElement.clientHeight>=document.documentElement.clientWidth*1200/1920){
			
			oImg[i].style.height=document.documentElement.clientHeight+'px';
			oImg[i].style.width=document.documentElement.clientHeight*1920/1200+'px';
			
			}
		else if(document.documentElement.clientHeight<document.documentElement.clientWidth*1200/1920){
			oImg[i].style.width=document.documentElement.clientWidth+'px';
			oImg[i].style.height=document.documentElement.clientWidth*1200/1920+'px';
			
		}
	}
window.onresize=function(){
	var oBox = document.getElementById('box');
	var oImg = document.getElementsByTagName('img');
	var oMskL=document.getElementById('mask_Left');
	var oMaskR=document.getElementById('mask_Right');
	var oBig_mask=document.getElementById('big_mask');
	
	


	
//*******************幻灯片大小控制**************************
	oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
	oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';
	oMaskR.style.width=oMskL.style.width=document.documentElement.clientWidth/2+'px';
	oMaskR.style.height=oMskL.style.height=document.documentElement.clientHeight+'px';
	var i=0;
	for(i=0;i<oImg.length;i++){
		if(document.documentElement.clientHeight>=document.documentElement.clientWidth*1200/1920){
			
			oImg[i].style.height=document.documentElement.clientHeight+'px';
			oImg[i].style.width=document.documentElement.clientHeight*1920/1200+'px';
			
			}
		else if(document.documentElement.clientHeight<document.documentElement.clientWidth*1200/1920){
			oImg[i].style.width=document.documentElement.clientWidth+'px';
			oImg[i].style.height=document.documentElement.clientWidth*1200/1920+'px';
			
			}
		}
//********************大小控制结束*******************************
}