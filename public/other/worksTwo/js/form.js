var aForm = document.getElementsByTagName("form");
	//多个表单
	for (var i = 0; i < aForm.length; i++)
	{ 
	   WellForm(aForm[i]);
	
	}
// 获取class
function getClass(sClass, oParent)
{
	var aClass = [];	
	var reClass = new RegExp("(^| )" + sClass + "( |$)");
	var aElem = (oParent || document).getElementsByTagName("*");
	for (var i = 0; i < aElem.length; i++) reClass.test(aElem[i].className) && aClass.push(aElem[i]);
	return aClass
}
// class是否存在
function hasClass(obj, sClass)
{
	var reg = new RegExp("(^|\\s)" + sClass + "(\\s|$)");
	return reg.test(obj.className)
}
// 添加class
function addClass(obj, sClass)
{
	hasClass(obj, sClass) || (obj.className += " "+sClass)
}
// 删除class
function removeClass(obj, sClass)
{
	if (hasClass(obj, sClass))
	{
		var reg = new RegExp("(^|\\s)" + sClass + "(\\s|$)");
		obj.className = obj.className.replace(reg, "");
	}
}
// 上一个元素
function prevElement(obj)
{
	return obj.previousSibling || obj.previousElementSibling || null	
}
// 下一个元素
function nextElement(obj)
{
	return obj.nextSibling || obj.nextElementSibling || null	
}
function WellForm(form){
	var i = 0;
	var zIndex = 1;
	var aInput = form.getElementsByTagName("input");	


	form.className = "WellForm";
	var aRadio = [];
	for (i = 0; i < aInput.length; i++) aInput[i]["type"] == "radio" && aRadio.push(aInput[i]);
	
	for (i = 0; i < aRadio.length; i++)
	{
		var oRadio = document.createElement("div");
		oRadio.className = "WellRadio";	
		
		aRadio[i].parentNode.insertBefore(oRadio, aRadio[i]);
		oRadio.appendChild(aRadio[i]);
		
		aRadio[i].checked && addClass(aRadio[i].parentNode, "WellRadioH");
		
		oRadio.onclick = function ()
		{
			var siblings = getClass("WellRadio", this.parentNode);
			for (i = 0; i < siblings.length; i++)
			{
				removeClass(siblings[i], "WellRadioH");
				siblings[i].children[0].checked = false;
			}
			addClass(this, "WellRadioH");
			this.children[0].checked = true
		}
	}
	var aButton = [];
	for (i = 0; i < aInput.length; i++) (aInput[i]["type"] == "button" || aInput[i]["type"] == "submit") && aButton.push(aInput[i]);
	for(i=0;i<aButton.length;i++){
		aButton[i].className='WellButton';
		aButton[i].onmouseover=function(){
			addClass(this, "WellButtonH");
		}
		aButton[i].onmouseout=function(){
			removeClass(this, "WellButtonH");
		}
		
	}
	var ainput=[];
	for (i = 0; i < aInput.length; i++) aInput[i]["type"] == "text" && ainput.push(aInput[i]);
    for (i = 0; i < ainput.length; i++){
		ainput[i].style.borderColor='#999';
		ainput[i].style.borderWidth=1+'px';
		ainput[i].style.borderStyle='solid';
		ainput[i].onblur= function(){
		 if(this.value=='')
		 { 
			 this.style.borderColor='red';
		 
		 } 
		 else{
			 this.style.borderColor='#999';
			 }
		 } 
	}
	var oTextarea=form.getElementsByTagName('textarea')[0];
	oTextarea.style.borderColor='#999';
	oTextarea.style.borderWidth=1+'px';
	oTextarea.style.borderStyle='solid';
	oTextarea.onblur=function(){
		if(this.value==''){
			this.style.borderColor='red';
		}
		else{
		    this.style.borderColor='#999'; 	
		}
		
	}
	var aResetting = [];
	for(i=0;i<aInput.length; i++){
		(aInput[i]["type"] == "button") && aResetting.push(aInput[i]);
	}
	aResetting[0].onclick=function(){
	  	for (i = 0; i < ainput.length; i++){
			ainput[i].value='';
		}
		oTextarea.value='';
	}
}