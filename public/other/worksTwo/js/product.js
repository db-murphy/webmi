
window.onload=function(){
function getElementsByClassName(oParent, sClass)
{
	var aTmp=oParent.getElementsByTagName('*');
	var aResult=[];
	var i=0;
	
	for(i=0;i<aTmp.length;i++)
	{
		if(aTmp[i].className==sClass)
		{
			aResult.push(aTmp[i]);
		}
	}
	
	return aResult;
}
	var oAutomatic=document.getElementById('automatic');
	var oBtn_L = document.getElementById('btn_prev');
    var oBtn_R = document.getElementById('btn_next');
	var aLi=oAutomatic.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var aLiInit=[];
	var iInterval=150;
	
	var i=0;
	for(i=0;i<aLi.length;i++)
	{
		aLiInit[i]={};
		aLi[i].width=aLiInit[i].w=aLi[i].getElementsByTagName('img')[0].offsetWidth;
		aLi[i].height=aLiInit[i].h=aLi[i].getElementsByTagName('img')[0].offsetHeight;
		aLi[i].left=aLiInit[i].l=aLi[i].offsetLeft;
		aLi[i].top=aLiInit[i].t=aLi[i].offsetTop;
		aLi[i].alpha=aLiInit[i].alpha=0;
		aLi[i].z=aLiInit[i].z=0;
	
	}
	aLi[0].alpha=aLiInit[0].alpha=20;
    aLi[1].alpha=aLiInit[1].alpha=30;
	aLi[2].alpha=aLiInit[2].alpha=40;
	aLi[3].alpha=aLiInit[3].alpha=100;
	aLi[4].alpha=aLiInit[4].alpha=40;
	aLi[5].alpha=aLiInit[5].alpha=30;
	aLi[6].alpha=aLiInit[6].alpha=20;
	
	aLi[0].z=aLiInit[0].z=1;
	aLi[1].z=aLiInit[1].z=2;
	aLi[2].z=aLiInit[2].z=3;
	aLi[3].z=aLiInit[3].z=4;
	aLi[4].z=aLiInit[4].z=3;
	aLi[5].z=aLiInit[5].z=2;
	aLi[6].z=aLiInit[6].z=1;
	
	oBtn_L.onmousedown=function ()
	{
		gotoImg(true);
	};
	oBtn_R.onmousedown=function ()
	{
		gotoImg(false);
	};
	function gotoImg(bLeft)
	{
		if(bLeft)
		{                                 
			aLiInit.push(aLiInit.shift());
		}
		else
		{                                  
			aLiInit.unshift(aLiInit.pop());
		}
		
		
		for(i=0;i<aLi.length;i++)
		{                                   
			startMove(aLi[i], {left: aLiInit[i].l, top: aLiInit[i].t, width: aLiInit[i].w, height:aLiInit[i].h, alpha:aLiInit[i].alpha, zIndex:aLiInit[i].z}, 300);
		}
	};
function startMove(obj, oParams, iTime)
{
	var iInterval=45;                         
	var iEndTime=(new Date()).getTime()+iTime;
	var iTimes=Math.ceil(iTime/iInterval);   
	                                        
	var oSpeed={};                          
	
	if(typeof obj.timer=='undefined')
	{
		obj.timer=null;                      
	}
	
	for(key in oParams)                       
	{
		oSpeed[key]=(oParams[key]-obj[key])/iTimes;
		                                      
	}
	
	if(obj.timer)
	{                                         
		clearInterval(obj.timer);
	}
	obj.timer=setInterval
	(                                            
		function ()
		{                                   
			doMove(obj, oParams, oSpeed, iEndTime);
		}, iInterval
	);
}
function doMove(obj, oTarget, oSpeed, iEndTime)
{
	var iNow=(new Date()).getTime();
	if(iNow>=iEndTime)
	{
		clearInterval(obj.timer);
		obj.timer=null;
		
		for(key in oTarget)
		{
			obj[key]=oTarget[key];
			switch(key)
			{
				case 'alpha':
					obj.style.opacity=oTarget[key]/100;
					obj.style.filter="alpha(opacity:"+oTarget[key]+")";
					break;
				case 'zIndex':
					obj.style.zIndex=oTarget[key];
					break;
				case 'width':
				case 'height':
					obj.style[key]=obj.getElementsByTagName('img')[0].style[key]=oTarget[key]+'px';
					break;
				default:
					obj.style[key]=oTarget[key]+'px';
					break;
			}
		}
		
		
	}
	else
	{
		for(key in oTarget)
		{
			obj[key]+=oSpeed[key];
			
			switch(key)
			{
				case 'alpha':
					obj.style.opacity=obj[key]/100;
					obj.style.filter="alpha(opacity:"+obj[key]+")";
					break;
				case 'zIndex':
					obj.style.zIndex=oTarget[key];
					break;
				case 'width':
				case 'height':
					obj.style[key]=obj.getElementsByTagName('img')[0].style[key]=obj[key]+'px';
					break;
					
				default:
					obj.style[key]=obj[key]+'px';
					break;
			}
		}
	}
}
}

