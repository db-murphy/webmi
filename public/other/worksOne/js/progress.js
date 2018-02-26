
var oImgUrlReq =[
	  {"imgSrc":"img/mac_1.jpg"},
	  {"imgSrc":"img/mac_2.jpg"},
	  {"imgSrc":"img/mac_3.jpg"},
	  
	  
	  {"imgSrc":"img/camram_1.jpg"},
	  {"imgSrc":"img/camram_2.jpg"},
	  {"imgSrc":"img/camram_3.jpg"},
	  {"imgSrc":"img/contact_text_bg.png"},
	  
	  {"imgSrc":"img/fllower_1.jpg"},
	  {"imgSrc":"img/fllower_2.jpg"},
	  
	  
	  
	  {"imgSrc":"img/jingtou_1.jpg"},
	  {"imgSrc":"img/jingtou_2.jpg"},
	  {"imgSrc":"img/jingtou_3.jpg"},
	  {"imgSrc":"img/jingtou_4.jpg"},
	  {"imgSrc":"img/jingtou_5.jpg"},
	  {"imgSrc":"img/jingtou_6.jpg"},
	  {"imgSrc":"img/jingtou_7.jpg"},
	  {"imgSrc":"img/jingtou_8.jpg"},
	  
	  {"imgSrc":"img/nav_bg.png"},
	  {"imgSrc":"img/nav_bg_hover.png"},
	  
	  {"imgSrc":"img/qicai_list_bg.png"},
	  {"imgSrc":"img/qicai_list_bg_hover.png"},
	  
	  {"imgSrc":"img/qicai_nav_bg.jpg"},
	  {"imgSrc":"img/qicai_nav_bg_hover.jpg"}
	  
]

 var k=0;
 var aImg = $("img");
 for(var i=0;i<aImg.length;i++){
	(function(i){
		var yImg = new Image();
		yImg.onload = function(){
			k++;
			progressFn(parseInt(k/aImg.length*100));
			if(k==aImg.length){
				
			   oBigMask.fadeOut('slow',function(){
				  oBigMask.css("display","none");
				  });
			}
		};
		//alert(oImgUrlReq[i].imgSrc);
		yImg.src = aImg[i].src;
	})(i);
   }
 function progressFn(cent){
	var oDiv3 = $("#bigMaskContent div.bigMaskContentBottom");
	oDiv3.text(cent + "%");
}
for(j=0;j<oImgUrlReq.length;j++){
	(function(j){
		var jiazaiImg = new Image();
		jiazaiImg.src = oImgUrlReq[j].imgSrc;
	})(j);
}