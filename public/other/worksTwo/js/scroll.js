function myAddEvent(obj, sEvent, fn)
{
	if(obj.attachEvent)
	{
		obj.attachEvent('on'+sEvent, fn);
	}
	else
	{
		obj.addEventListener(sEvent, fn, false);
	}
}


	var oDiv=document.getElementById('scroll_move');
	var oParent=document.getElementById('scroll_out');
	var oDivtwo=document.getElementById('child_left');
	var oDivthree=document.getElementById('news_content');
	var oNews_bottom_left = document.getElementById('news_bottom_left');
	var oArrow_top = document.getElementById('arrow_top');
	var oArrow_bottom = document.getElementById('arrow_bottom');
	function onMouseWheel(ev)
	{
		var oEvent=ev||event;
		var bDown=true;
		
		bDown=oEvent.wheelDelta?oEvent.wheelDelta<0:oEvent.detail>0;
		
		if(bDown)
		{
			setLeft(oDiv.offsetTop+10);
		}
		else
		{
			setLeft(oDiv.offsetTop-10);
		}
		
		if(oEvent.preventDefault)
		{
			oEvent.preventDefault();
		}
		
		return false;
	}
	
	myAddEvent(oNews_bottom_left, 'mousewheel', onMouseWheel);
	myAddEvent(oNews_bottom_left, 'DOMMouseScroll', onMouseWheel);
	
	oDiv.onmousedown=function (ev)
	{
		var oEvent=ev||event;
		var disY=oEvent.clientY-oDiv.offsetTop;
		if(oDiv.setCapture)
		{
		document.onmousemove=function (ev)
		{
			var oEvent=ev||event;
			var l=oEvent.clientY-disY;
			
			setLeft(l);
		};
		
		document.onmouseup=function ()
		{
			document.onmousemove=null;
			document.onmouseup=null;
			oDiv.releaseCapture();
		};
		oDiv.setCapture();
	  }
	    else
		{
			document.onmousemove=function (ev)
			{
				var oEvent=ev||event;
			    var l=oEvent.clientY-disY;
			
			setLeft(l);
			};
			
			document.onmouseup=function ()
			{
				document.onmousemove=null;
				document.onmouseup=null;
			};
		}
		return false;
	};
	oArrow_top.onclick=function(){
		var oDiv_Top = oDiv.offsetTop;
		var T = oDiv_Top-8;
		setLeft(T);
	}
	oArrow_bottom.onclick=function(){
		var oDiv_Top = oDiv.offsetTop;
		var T = oDiv_Top+8;
		setLeft(T);
	}
	function setLeft(l)
	{
		if(l<0)
		{
			l=0;
		}
		else if(l>oParent.offsetHeight-oDiv.offsetHeight)
		{
			l=oParent.offsetHeight-oDiv.offsetHeight;
		}
		
		oDiv.style.top=l+'px';
		var scale=l/(oParent.offsetHeight-oDiv.offsetHeight);
		
		oDivthree.style.top=-(oDivthree.offsetHeight-oDivtwo.offsetHeight)*scale+'px';
		
	}
