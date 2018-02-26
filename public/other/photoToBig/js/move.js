//版权 北京智能社©, 保留所有权利

function getStyle(obj, name)
{
	//return obj.currentStyle?obj.currentStyle[name]:getComputedStyle(obj, false)[name];
	
	//obj.currentStyle[name]||getComputedStyle(obj, false)[name]
	return (obj.currentStyle||getComputedStyle(obj, false))[name];
}

function startMove(obj, json, options)
{
	//参数
	options=options || {};
	options.time=options.time||700;
	options.type=options.type||'buffer';
	
	//算次数
	var count=parseInt(options.time/30);
	
	//算起点、距离
	var start={};
	var dis={};
	
	obj.start=start;
	obj.dis=dis;
	obj.n=0;
	
	var allSame=true;
	
	for(var i in json)
	{
		if(i=='opacity')
		{
			start[i]=parseFloat(getStyle(obj, i))*100;
		}
		else
		{
			start[i]=parseInt(getStyle(obj, i));
		}
		dis[i]=json[i]-start[i];
		
		if(json[i]!=start[i])
		{
			allSame=false;
		}
	}
	
	if(allSame)
	{
		options.end && options.end();
		return;
	}
	
	//定时器
	//clearInterval(obj.timer);
	//如果之前的运动还没结束，继续
	if(!obj.timer)
	{
		obj.timer=setInterval(function (){
			obj.n++;
			
			for(var i in json)
			{
				//算当前值
				switch(options.type)
				{
					case 'linear':
						var cur=obj.start[i]+obj.dis[i]*obj.n/count;
						break;
					case 'buffer':
						var a=1-obj.n/count;
						var cur=obj.start[i]+obj.dis[i]*(1-a*a*a);
						break;
					default:
						var a=1-obj.n/count;
						var cur=obj.start[i]+obj.dis[i]*(1-a*a*a);
						break;
				}
				
				if(i=='opacity')
				{
					obj.style.filter='alpha(opacity:'+cur+')';
					obj.style.opacity=cur/100;
				}
				else
				{
					obj.style[i]=cur+'px';
				}
			}
			
			if(obj.n==count)
			{
				clearInterval(obj.timer);
				obj.timer=null;
				
				options.end && options.end();
			}
		}, 30);
	}
}