var oFation = document.getElementById('fation');
var aFantion_li = oFation.getElementsByTagName('li');
var oFation_btn_left = document.getElementById('fation_btn_left');
var oFation_btn_right = document.getElementById('fation_btn_right');

var aLiInit_Fantion=[];
for(i=0;i<aFantion_li.length;i++){
	aLiInit_Fantion[i] = getStyle(aFantion_li[i],'color');
	aFantion_li[i].onmousedown=function(){
	   return false;	
	}
}
var Dimer = null;
Dimer = setInterval(function(){
	gotoImg(false);
},50);
function gotoImg(bLeft)
{
	if(bLeft)
	{                                 
		aLiInit_Fantion.push(aLiInit_Fantion.shift());
	}
	else
	{                                  
		aLiInit_Fantion.unshift(aLiInit_Fantion.pop());
	}
	for(i=0;i<aFantion_li.length;i++){
		aFantion_li[i].style.color=aLiInit_Fantion[i];
		}
	
};


function getStyle(obj,attr)
{
	if(obj.currentStyle)
	{
		return obj.currentStyle[attr];
	}
	else
	{
		return getComputedStyle(obj,false)[attr];
	}
}