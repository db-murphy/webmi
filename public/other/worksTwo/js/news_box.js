var oBg_big = document.getElementById('bg');
var oImg = oBg_big.getElementsByTagName('img');
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
	var oBg_big = document.getElementById('bg');
    var oImg = oBg_big.getElementsByTagName('img');
	var oBox = document.getElementById('box');
	var oBig_mask=document.getElementById('big_mask');
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
	
	


	
//*******************幻灯片大小控制**************************
	oBlack.style.width=oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
	oBlack.style.height=oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';
//********************大小控制结束*******************************
}