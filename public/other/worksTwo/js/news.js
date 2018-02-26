var oBox = document.getElementById('box');
var oBig_mask=document.getElementById('big_mask');
var oH_Box = document.getElementById('H_Box');
var oInner = document.getElementById('inner');
var oUl = document.getElementById('ul1');
var oLi = oUl.getElementsByTagName('li');
var oBg = oLi[oLi.length-1];
var oBlack = document.getElementById('black');
var aNewslist = getByClass(document,'news_list');
var oNews_con = document.getElementById('news_con');
var aP = oNews_con.getElementsByTagName('p');
var oNews_ul = document.getElementById('news_ul');
var aLi = oNews_ul.getElementsByTagName('li');
var oNews_outer = document.getElementById('news_outer');
var oNews_top_right = document.getElementById('news_top_right');
var oNews_top_left = document.getElementById('news_top_left');
var aNews_top_left_p = oNews_top_left.getElementsByTagName('p')[0];
var aNews_top_left_span = oNews_top_left.getElementsByTagName('span')[0];
var oNews_content = document.getElementById('news_content');
var oNews_bottom_right = document.getElementById('news_bottom_right');
var aNews_bottom_right_img = oNews_bottom_right.getElementsByTagName('img');
oBlack.onclick=oNews_top_right.onclick=function(){
	miaovStartMove(oDiv,{top:0},MIAOV_MOVE_TYPE.BUFFER);
	miaovStartMove(oNews_content,{top:0},MIAOV_MOVE_TYPE.BUFFER);
	miaovStartMove(oNews_outer,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){
		oNews_outer.style.display='none';
		});
   	
	miaovStartMove(oBlack,{opacity:0},MIAOV_MOVE_TYPE.BUFFER,function(){
		oBlack.style.display='none';
		});
	
}
for(i=0;i<aLi.length;i++){
	aLi[i].index=i;
	aLi[i].onmouseover=function(){
		aP[this.index].style.filter='alpha(opacity:50)';
		aP[this.index].style.opacity=0.5;
		miaovStartMove(aP[this.index],{opacity:50},MIAOV_MOVE_TYPE.BUFFER);
		}
	aLi[i].onmouseout=function(){
		miaovStartMove(aP[this.index],{opacity:0},MIAOV_MOVE_TYPE.BUFFER);
		}
	aLi[i].onclick=function(){
		for(i=0;i<aNews_bottom_right_img.length;i++){
			aNews_bottom_right_img[i].style.display = 'none';
		}
		aNews_bottom_right_img[this.index].style.display='block';
		var sInnterHtml="<p>" + news_content_InnerText[this.index] + "</p>";
		var PInnterHtml=news_content_left_p[this.index];
		var SpanInnterHtml = news_content_span[this.index];
		oNews_content.innerHTML = sInnterHtml;
		aNews_top_left_p.innerHTML = PInnterHtml;
		aNews_top_left_span.innerHTML = SpanInnterHtml;
		oNews_outer.style.display='block';
		miaovStartMove(oNews_outer,{opacity:100},MIAOV_MOVE_TYPE.BUFFER);
	    oBlack.style.display='block';
		miaovStartMove(oBlack,{opacity:80},MIAOV_MOVE_TYPE.BUFFER);
		}
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
	

	
	
	oBlack.style.width=oBig_mask.style.width=oBox.style.width=document.documentElement.clientWidth+'px';
	oBlack.style.height=oBig_mask.style.height=oBox.style.height=document.documentElement.clientHeight+'px';