var oBox = document.getElementById('box');
var oBig_mask=document.getElementById('big_mask');
var oH_Box = document.getElementById('H_Box');
var oInner = document.getElementById('inner');
var oUl = document.getElementById('ul1');
var oLi = oUl.getElementsByTagName('li');
var oBg = oLi[oLi.length-1];
var oBtn_out=document.getElementById('btn_out');
var aH2 = oBtn_out.getElementsByTagName('h2');
var oBlack = document.getElementById('black');
var oContent = document.getElementById('content');
var aInner_outer = getByClass(document,'inner_outer');
var aBtn_inner = getByClass(document,'btn_inner');
var aInner_one = getByClass(document,'inner_one');

var oInner_outer_a  = document.getElementById('inner_outer_a');
var oBtn_inner_a = document.getElementById('btn_inner_a');
var oInner_a = document.getElementById('inner_a');


var oInner_outer_b  = document.getElementById('inner_outer_b');
var oInner_b = document.getElementById('inner_b');
var oBtn_inner_b = document.getElementById('btn_inner_b');


var oInner_outer_c  = document.getElementById('inner_outer_c');
var oInner_c = document.getElementById('inner_c');
var oBtn_inner_c = document.getElementById('btn_inner_c');


var oInner_outer_d  = document.getElementById('inner_outer_d');
var oInner_d = document.getElementById('inner_d');
var oBtn_inner_d = document.getElementById('btn_inner_d');


var oInner_outer_e  = document.getElementById('inner_outer_e');
var oInner_e = document.getElementById('inner_e');
var oBtn_inner_e = document.getElementById('btn_inner_e');



var oInner_outer_f  = document.getElementById('inner_outer_f');
var oInner_f = document.getElementById('inner_f');
var oBtn_inner_f = document.getElementById('btn_inner_f');

var Aimer = null;
var Bimer = null;
oInner_a.onmouseover=oInner_outer_a.onmouseover=function(){
	oBlack.style.display='block';
	miaovStartMove(oBlack,{opacity:80},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
	for(i=0;i<aInner_one.length;i++){
		aInner_one[i].style.display='none';
		}
	oInner_a.style.display='block';
	//oBtn_inner_a.style.background='#b0d6bf';
	miaovStartMove(oBtn_inner_a,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
	}
oInner_a.onmouseout=oInner_outer_a.onmouseout=function(){
	
	miaovStartMove(oBtn_inner_a,{opacity:40},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
	Aimer = setInterval(function(){
		miaovStartMove(oBlack,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){
			oBlack.style.display='none';
			});
	    
		oInner_a.style.display='none';
		},200)
	}



	
oInner_b.onmouseover=oInner_outer_b.onmouseover=function(){
	oBlack.style.display='block';
	miaovStartMove(oBlack,{opacity:80},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
		for(i=0;i<aInner_one.length;i++){
		aInner_one[i].style.display='none';
		}
	oInner_b.style.display='block';
	miaovStartMove(oBtn_inner_b,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
	}
oInner_b.onmouseout=oInner_outer_b.onmouseout=function(){
	
	miaovStartMove(oBtn_inner_b,{opacity:40},MIAOV_MOVE_TYPE.BUFFER);
	//oBtn_inner_b.style.background='#fff';
	clearInterval(Aimer);
	Aimer = setInterval(function(){
		miaovStartMove(oBlack,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){oBlack.style.display='none';});
	    
		oInner_b.style.display='none';
		},200)
	
	}
	



oInner_c.onmouseover=oInner_outer_c.onmouseover=function(){
	oBlack.style.display='block';
	miaovStartMove(oBlack,{opacity:80},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
		for(i=0;i<aInner_one.length;i++){
		aInner_one[i].style.display='none';
		}
	oInner_c.style.display='block';
	miaovStartMove(oBtn_inner_c,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
	}
oInner_c.onmouseout=oInner_outer_c.onmouseout=function(){

	miaovStartMove(oBtn_inner_c,{opacity:40},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
	Aimer = setInterval(function(){
		miaovStartMove(oBlack,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){oBlack.style.display='none';});

		oInner_c.style.display='none';
		},200)
	
	}






oInner_d.onmouseover=oInner_outer_d.onmouseover=function(){
	oBlack.style.display='block';
	miaovStartMove(oBlack,{opacity:80},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
		for(i=0;i<aInner_one.length;i++){
		aInner_one[i].style.display='none';
		}
	oInner_d.style.display='block';
	miaovStartMove(oBtn_inner_d,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
	}
oInner_d.onmouseout=oInner_outer_d.onmouseout=function(){
	
	miaovStartMove(oBtn_inner_d,{opacity:40},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
	Aimer = setInterval(function(){
		miaovStartMove(oBlack,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){oBlack.style.display='none';});
		oInner_d.style.display='none';
		},200)
	
	}






oInner_e.onmouseover=oInner_outer_e.onmouseover=function(){
	oBlack.style.display='block';
	miaovStartMove(oBlack,{opacity:80},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
		for(i=0;i<aInner_one.length;i++){
		aInner_one[i].style.display='none';
		}
	oInner_e.style.display='block';
	miaovStartMove(oBtn_inner_e,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
	}
oInner_e.onmouseout=oInner_outer_e.onmouseout=function(){
	
	miaovStartMove(oBtn_inner_e,{opacity:40},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
	Aimer = setInterval(function(){
		miaovStartMove(oBlack,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){oBlack.style.display='none';});
		oInner_e.style.display='none';
		},200)
	
	}

	
	
	
oInner_f.onmouseover=oInner_outer_f.onmouseover=function(){
	oBlack.style.display='block';
	miaovStartMove(oBlack,{opacity:80},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
		for(i=0;i<aInner_one.length;i++){
		aInner_one[i].style.display='none';
		}
	oInner_f.style.display='block';
	miaovStartMove(oBtn_inner_f,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
	}
oInner_f.onmouseout=oInner_outer_f.onmouseout=function(){
	
	miaovStartMove(oBtn_inner_f,{opacity:40},MIAOV_MOVE_TYPE.BUFFER);
	clearInterval(Aimer);
	Aimer = setInterval(function(){
		miaovStartMove(oBlack,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){oBlack.style.display='none';});
		oInner_f.style.display='none';
		},200)
	
	}

// 获取class
function getByClass(oParent, sClass) {
    var aEle = document.getElementsByTagName('*');
    var result = [];
    var re = new RegExp('\\b' + sClass+ '\\b', 'i');

    for(var i = 0; i < aEle.length; i++) {   
        if(re.test(aEle[i].className)) {  //test() 判断某个字符串 是否匹配某个模式，
            result.push(aEle[i]);
        }
    }
    return result;

}


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
//*************浏览器版本判断**************************************
	
	
	oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
	oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';