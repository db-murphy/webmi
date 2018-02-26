    var browser=navigator.appName;
    var oBox = document.getElementById('box');
    var oNav = document.getElementById('nav_main');
	var oBig_mask=document.getElementById('big_mask');
	var oHeader = document.getElementById('header');
    var oImgAll = document.getElementsByTagName('img');
	oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
	oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';
    var k=0;
	for(var i=0;i<oImgAll.length;i++){
		(function(i){
			
			var yImg = new Image();
			
			yImg.onload = function(){
				k++;
				progressFn(parseInt(k/oImgAll.length*100));
				
				if(k==oImgAll.length){
				    oBig_mask.style.display='none';
					oHeader.style.display =oNav.style.display =oBox.style.display='block';
				}
				else{
				    oHeader.style.display =oNav.style.display =oBox.style.display='none';
					}
			};
			
			yImg.src = oImgAll[i].src;
		})(i);
	}

function progressFn(cent){
	var oDiv1 = document.getElementById('progressBox');
	var oDiv2 = document.getElementById('progressBar');
	var oDiv3 = document.getElementById('progressText');
	var allWidth = parseInt(getStyle(oDiv1,'width'));
	
	oDiv3.innerHTML = cent + '%';
	miaovStartMove(oDiv2,{width:cent * (allWidth/100)},MIAOV_MOVE_TYPE.BUFFER);
	
	function getStyle(obj,attr){
		if(obj.currentStyle){
			return obj.currentStyle[attr];
		} 
		else{
			return getComputedStyle(obj)[attr];
		}
	}
	
}