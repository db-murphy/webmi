$(function(){
  var oBig_box = $("#Big_box");
  var oMask = $("#mask");
  var oHeader = $("#header");
  var oHeader_h1 = $("#header h1");
  var aHeader_span = $("#header span");
  var oContent = $("#content");
  var oImg = $("#content img");
  var oNav_main = $("#nav_main");
  var oFllower_hover = $("#fllower_hover");
  var oUl_Index = $("#nav_main ul.ul_Index")
  var oUl_Qcai = $("#nav_main ul.ul_Qcai")
  var oUl_wedding_photo_list = $("#nav_main ul.ul_wedding_photo_list");
  var oWedding_ul_mask = $("#wedding_ul_mask");
  var oUl_wedding_photo_list_a= $("#nav_main ul.ul_wedding_photo_list li a");
  var oUl_Apple = $("#nav_main ul.ul_Apple");
  var aUl_Apple_li = $("#nav_main ul.ul_Apple li");
  var aUl_Apple_a_return = $("#nav_main ul.ul_Apple a");
  var aA = $("#nav_main ul.ul_Index a");
  var oUl_Apple_bigOne = $("#nav_main ul.ul_Apple_bigOne");
  var aUl_Apple_bigOne_li = $("#nav_main ul.ul_Apple_bigOne li");
  var aWedding_img = $("#wedding_img");
  var aWedding_img_ul_li = $("#wedding_img ul li:not(.photo_logo)");
  var aWedding_img_ul_li_havephoto = $("#wedding_img ul li");
  var aWedding_img_ul_li_a = $("#wedding_img ul li a");
  var aWedding_img_ul_span = $("#wedding_img ul span");
  var aWedding_img_ul_li_a_div = $("#wedding_img ul li a div");
  
  var aWeddingParty_img = $("#weddingParty_img");
  var aWeddingParty_img_ul_li = $("#weddingParty_img ul li:not(.photo_logo)");
  var aWeddingParty_img_ul_li_havephoto = $("#weddingParty_img ul li");
  var aWeddingParty_img_ul_li_a = $("#weddingParty_img ul li a");
  var aWeddingParty_img_ul_span = $("#weddingParty_img ul span");
  var aWeddingParty_img_ul_li_a_div = $("#weddingParty_img ul li a div");
  
  var aQicaiA = $("#nav_main ul.ul_Qcai a");
  var aLi = $("#nav_main ul.ul_Index li");
  var oCon_Qicai = $("#con_Qicai");
  var aCon_Qicai_list_li = $("#con_Qicai ul li");
  
  
  
  var oCon_Qicai_outer = $("#con_Qicai_outer");
  var aAnple_list_li = $("#anple_list li");
  var aAnple_list_ul =$("#anple_list ul");
  var aAanple_list_ul_camram_li = $("#anple_list ul.camram li");
  var aAanple_list_ul_jingtou_li = $("#anple_list ul.jingtou li");
  var aAanple_list_ul_mac_li = $("#anple_list ul.mac li");
  var oAanple_list_ul_camram = $("#anple_list ul.camram");
  var oCamram_mask = $("#camram_mask");
  var oJingtou_mask = $("#jingtou_mask");
  var oMac_mask = $("#mac_mask");
  
  var oContact = $("#contact");
  var oOuter = $("#outer");
  var aContact_footer_nav_a = $("#contact_footer_nav ul li a");
  var oClose_btn = $("#close_click a");
  var oFooter = $("#footer");
  
  var oSmall_click_span = $("#small_click span");
  //var oMaskSize = $();
  oBig_box_width = $(window).width();
  oBig_box_height = $(window).height();
//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333  
  
function PositionResert(){
	    $(aAnple_list_li[0]).css("left",745);
		$(aAnple_list_li[1]).css("left",1043);
		$(aAnple_list_li[2]).css("left",1341);
		$(aAnple_list_li[3]).css("left",1192);
		$(aAnple_list_li[4]).css("left",1341);
		$(aAnple_list_li[5]).css("left",1490);
		$(aAnple_list_li[6]).css("left",1639);
		$(aAnple_list_li[7]).css("left",1788);
		$(aAnple_list_li[8]).css("left",1937);
		$(aAnple_list_li[9]).css("left",2086);
		$(aAnple_list_li[10]).css("left",2235);
		$(aAnple_list_li[11]).css("left",745);
		$(aAnple_list_li[12]).css("left",1043);
		$(aAnple_list_li[13]).css("left",1341);
	}

function Open(index){
			 
		      
			  oCon_Qicai.animate({marginTop:60},300);
		      $("#anple_list").animate({height:190},300);
			  if($("#anple_list").height()==0){
				  oSmall_click_span.css({left:index*130});
				  }
			  else{
				  oSmall_click_span.animate({left:index*130},300);
				  }
			  
			  
			
}
		  
function Close(fnCallBack){
	    if(fnCallBack){
			$("#anple_list").animate({height:0},150,PositionResert);
		    oCon_Qicai.animate({marginTop:100},300,function(){
			oCamram_mask.hide();
			oJingtou_mask.hide();
			oMac_mask.hide();
			fnCallBack();
			});
			}
		else{
			$("#anple_list").animate({height:0},150,PositionResert);
		    oCon_Qicai.animate({marginTop:100},300,function(){
			oCamram_mask.hide();
			oJingtou_mask.hide();
			oMac_mask.hide();
			});
			}
		
		
	}
		  

  $(aCon_Qicai_list_li[0]).click(function(){
	  if(oSmall_click_span.css("left")==0+'px'&&$("#anple_list").height()!=0){
		  Close();
		  }
	  else{
		  PositionResert();
		  oJingtou_mask.hide();
		  oMac_mask.hide();
		  oCamram_mask.show();
		  Open(0);
		  
		  if($("#anple_list").height()!=0){
			  var i = 0;
			  function next(){
				  if(i<3){
				      $(aAanple_list_ul_camram_li[i]).animate({left:i*298},400,'easeOutElastic');
					  timer=setTimeout(next, 100);
					  i++;
				     }
				  }
			  next();
			  }
			else{
				aAanple_list_ul_camram_li.each(function(index){
					$(this).css("left",index*298);
					});
				}
		  }
       
	  });
  $(aCon_Qicai_list_li[1]).click(function(){
       if(oSmall_click_span.css("left")==130+'px'&&$("#anple_list").height()!=0){
		  Close();
		  }
	  else{
		  PositionResert();
		  oCamram_mask.hide();
		  oMac_mask.hide();
		  oJingtou_mask.show();
		  
		  Open(1);
		  if($("#anple_list").height()!=0){
			  var i = 0;
			  function next2(){
				  if(i<8){
				      $(aAanple_list_ul_jingtou_li[i]).animate({left:i*149},300,'easeOutElastic');
					  timer=setTimeout(next2, 50);
					  i++;
				     }
				  }
			  next2();
			  
			  }
		  else{
			  aAanple_list_ul_jingtou_li.each(function(index){
					$(this).css("left",index*149);
					});
			  }
		  }
	  
	  });
  $(aCon_Qicai_list_li[2]).click(function(){
      if(oSmall_click_span.css("left")==260+'px'&&$("#anple_list").height()!=0){
		  Close()
		  }
	  else{
		  PositionResert();
		  oJingtou_mask.hide();
		  oCamram_mask.hide();
		  oMac_mask.show();
		  Open(2);
		  
		  if($("#anple_list").height()!=0){
			  var i = 0;
			  function next4(){
				  if(i<3){
				      $(aAanple_list_ul_mac_li[i]).animate({left:i*298},400,'easeOutElastic');
					  timer=setTimeout(next4, 100);
					  i++;
				     }
				  }
			  next4();
			  }
			else{
				aAanple_list_ul_mac_li.each(function(index){
					$(this).css("left",index*298);
					});
				}
		  }
	  });
//333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333
  oBig_box.css({"width":oBig_box_width, "height":oBig_box_height });
  oContent.css({"width":oBig_box_width/4,"height":oBig_box_width*509/1976,"marginLeft":-oBig_box_width/8,"marginTop":-oBig_box_width*509/3952});
  
  oImg.each(function(){
	  $(this).css({"width":oBig_box_width/4,"height":oBig_box_width*509/1976});
	  
	  });

  aA.each(function(){
	  
	  $(this).mouseover(function(){
	  oFllower_hover.stop().fadeOut(500);
	  })
	  $(this).mouseout(function(){
	  oFllower_hover.fadeIn(500);
	  })
	  })
//************************点击器材按钮*********************************************************
  $("#nav_main ul.ul_Index a.d").click(function(){
	  /*if($.browser.version==6.0){
		  oMask.hide();
	      oContact.fadeOut(400,function(){
		  oOuter.css("left",0);
		  });
		  }*/
	  oWedding_ul_mask.show();
	  oImg.each(function(){
		  $(this).animate({width:0,height:0},300,'easeInSine');
		  });
	  oContent.animate({width:0,height:0,marginTop:0,marginLeft:0},300,'easeInSine',function(){
		  oContent.hide();
		  oCon_Qicai_outer.show();
		  $(aCon_Qicai_list_li[2]).animate({left:"+=390px"},300,'easeOutElastic',function(){
		  $(aCon_Qicai_list_li[1]).animate({left:"+=390px"},300,'easeOutElastic',function(){
			  $(aCon_Qicai_list_li[0]).animate({left:"+=390px"},300,'easeOutElastic');
			  });
		  });
		});
	  
	  
		  
	  aLi.each(function(){
		  $(this).animate({left:148},300,'easeInSine',function(){
			  if($.browser.version==6.0){
	                    oUl_Index.fadeOut(20,function(){
							oUl_Qcai.fadeIn(500);
							});
	               }
			  oUl_Index.fadeOut(500,function(){
				  oUl_Qcai.fadeIn(500);
				  oWedding_ul_mask.hide();
				  });
			  });
		  });
   });
//************************点击器材按钮结束*********************************************************



//************************点击关于按钮*********************************************************
    $("#nav_main ul.ul_Index a.c").click(function(){
		oMask.fadeIn(300);
	    oContact.fadeIn(400);
	   });
//************************点击关于按钮结束*********************************************************



//******************************************从器材展开页面返回首页函数****************************
function Retrun(){
	$(aCon_Qicai_list_li[0]).animate({left:"-=390px"},100,'easeInQuint',function(){
		  $(aCon_Qicai_list_li[1]).animate({left:"-=390px"},100,'easeInQuint',function(){
			  $(aCon_Qicai_list_li[2]).animate({left:"-=390px"},100,'easeInQuint',function(){
				  oCon_Qicai_outer.hide();
				  oContent.show(10,function(){
					  oContent.animate({width:oBig_box_width/4,
					  height:oBig_box_width*509/1976,
					  marginLeft:-oBig_box_width/8,
					  marginTop:-oBig_box_width*509/3952},300,"easeInSine");
					  oImg.each(function(){
						  $(this).animate({width:oBig_box_width/4,height:oBig_box_width*509/1976},300,'easeInSine');
						  });
					  });
				  });
			  });
		  });
	  oUl_Qcai.fadeOut(500,function(){
		  oUl_Index.fadeIn(500,function(){
			  aLi.each(function(index){
		         $(this).animate({left:index*74},400,'easeOutElastic');
		         });
			  });
		  });
	}
//******************************************从器材展开页面返回首页函数**************************






//************************从器材列表返回主菜单***************************************************************
  $("#nav_main ul.ul_Qcai a").click(function(){
	  if($("#anple_list").height()==0){
		  $(aCon_Qicai_list_li[0]).animate({left:"-=390px"},100,'easeInQuint',function(){
		  $(aCon_Qicai_list_li[1]).animate({left:"-=390px"},100,'easeInQuint',function(){
			  $(aCon_Qicai_list_li[2]).animate({left:"-=390px"},100,'easeInQuint',function(){
				  oCon_Qicai_outer.hide();
				  oContent.show(10,function(){
					  oContent.animate({width:oBig_box_width/4,
					  height:oBig_box_width*509/1976,
					  marginLeft:-oBig_box_width/8,
					  marginTop:-oBig_box_width*509/3952},300,"easeInSine");
					  oImg.each(function(){
						  $(this).animate({width:oBig_box_width/4,height:oBig_box_width*509/1976},300,'easeInSine');
						  });
					  });
				  });
			  });
		  });
	  oUl_Qcai.fadeOut(500,function(){
		  oUl_Index.fadeIn(500,function(){
			  aLi.each(function(index){
		         $(this).animate({left:index*74},400,'easeOutElastic');
		         });
			  });
		  });
		  }
	   else{
		   Close(Retrun);
		   }
	  });
//************************从器材列表返回主菜单结束***************************************************************	













	


	  
//************************************打开关于div**************************
  aContact_footer_nav_a.each(function(index){
	  $(this).click(function(){
		  oOuter.animate({left:-index*300},300,'easeOutQuint');
		  });
	  });
  oClose_btn.click(function(){
	  oMask.hide();
	  oContact.fadeOut(400,function(){
		  oOuter.css("left",0);
		  });
	 
	  });
//************************************打开关于div结束**************************


//***************************照片页面hover效果***************************************************************
  aWedding_img_ul_li.each(function(index){
	  
	  $(this).hover(function(){
		  $(aWedding_img_ul_span[index]).stop().animate({opacity:1},100);
		  },function(){
			  $(aWedding_img_ul_span[index]).stop().animate({opacity:0},2000);
			  });
	  });
  aWeddingParty_img_ul_li.each(function(index){
	  $(this).hover(function(){
		  $(aWeddingParty_img_ul_span[index]).stop().animate({opacity:1},100);
		  },function(){
			  $(aWeddingParty_img_ul_span[index]).stop().animate({opacity:0},2000);
			  });
	  });
//***************************照片页面hover效果结束***************************************************************


//****************************点击婚礼按钮*************************************************************************
  $("#nav_main ul.ul_Index a.a").click(function(){
	  oWedding_ul_mask.show();
	  aLi.each(function(){
		  $(this).animate({left:148},300,'easeInSine',function(){
			  oUl_Index.fadeOut(500,function(){
				  oUl_wedding_photo_list.fadeIn(500);
				  });
			  });
		  });
	  oHeader.fadeOut(300);
	  oImg.each(function(){
		  $(this).animate({width:0,height:0},300,'easeInSine');
		  });
	  oContent.animate({width:0,height:0,marginTop:0,marginLeft:0},300,'easeInSine',function(){
		  oContent.hide();
		   aWeddingParty_img.fadeIn(1000,function(){
			  $(aWeddingParty_img_ul_li_a_div[10]).animate({opacity:0},50,function(){
		  $(aWeddingParty_img_ul_li_a_div[18]).animate({opacity:0},50,function(){
			  $(aWeddingParty_img_ul_li_a_div[17]).animate({opacity:0},50,function(){
				  $(aWeddingParty_img_ul_li_a_div[16]).animate({opacity:0},50,function(){
					  $(aWeddingParty_img_ul_li_a_div[15]).animate({opacity:0},50,function(){
						  $(aWeddingParty_img_ul_li_a_div[14]).animate({opacity:0},50,function(){
							  $(aWeddingParty_img_ul_li_a_div[13]).animate({opacity:0},50,function(){
								  $(aWeddingParty_img_ul_li_a_div[9]).animate({opacity:0},50,function(){
									  $(aWeddingParty_img_ul_li_a_div[1]).animate({opacity:0},50,function(){
										  $(aWeddingParty_img_ul_li_a_div[2]).animate({opacity:0},50,function(){
											  $(aWeddingParty_img_ul_li_a_div[3]).animate({opacity:0},50,function(){
												  $(aWeddingParty_img_ul_li_a_div[4]).animate({opacity:0},50,function(){
													  $(aWeddingParty_img_ul_li_a_div[5]).animate({opacity:0},50,function(){
														  $(aWeddingParty_img_ul_li_a_div[6]).animate({opacity:0},50,function(){
															  $(aWeddingParty_img_ul_li_a_div[7]).animate({opacity:0},50,function(){
																  $(aWeddingParty_img_ul_li_a_div[11]).animate({opacity:0},50,function(){
																	  $(aWeddingParty_img_ul_li_a_div[19]).animate({opacity:0},50,function(){
																		  $(aWeddingParty_img_ul_li_a_div[27]).animate({opacity:0},50,function(){
																			  $(aWeddingParty_img_ul_li_a_div[26]).animate({opacity:0},50,function(){
																				  $(aWeddingParty_img_ul_li_a_div[25]).animate({opacity:0},50,function(){
																					  $(aWeddingParty_img_ul_li_a_div[24]).animate({opacity:0},50,function(){
																						  $(aWeddingParty_img_ul_li_a_div[23]).animate({opacity:0},50,function(){
																							  $(aWeddingParty_img_ul_li_a_div[22]).animate({opacity:0},50,function(){
																								  $(aWeddingParty_img_ul_li_a_div[21]).animate({opacity:0},50,function(){
																									  $(aWeddingParty_img_ul_li_a_div[20]).animate({opacity:0},50,function(){
																										  $(aWeddingParty_img_ul_li_a_div[12]).animate({opacity:0},50,function(){
																											  $(aWeddingParty_img_ul_li_a_div[8]).animate({opacity:0},50,function(){
																												  $(aWeddingParty_img_ul_li_a_div[0]).animate({opacity:0},50,function(){oWedding_ul_mask.hide();});
																												  });
																											  });
																										  });
																									  });
																								  });
																							  });
																						  });
																					  });
																				  });
																			  });
																		  });
																	  });
																  });
															  });
														  });
													  });
												  });
											  });
										  });
									  });
								  });
							  });
						  });
					  });
				  });
			  });
		  });//..................................................
			    });
		  
		  });
	  });
//****************************点击婚礼按钮结束*************************************************************************

//****************************点击婚纱按钮*************************************************************************
  $("#nav_main ul.ul_Index a.b").click(function(){
	  oWedding_ul_mask.show();
	  aLi.each(function(){
		  $(this).animate({left:148},300,'easeInSine',function(){
			  oUl_Index.fadeOut(500,function(){
				  oUl_wedding_photo_list.fadeIn(500);
				  });
			  });
		  });
	  oHeader.fadeOut(300);
	  oImg.each(function(){
		  $(this).animate({width:0,height:0},300,'easeInSine');
		  });
	  oContent.animate({width:0,height:0,marginTop:0,marginLeft:0},300,'easeInSine',function(){
		  oContent.hide();
		   aWedding_img.fadeIn(1200,function(){
			  $(aWedding_img_ul_li_a_div[10]).animate({opacity:0},50,function(){
		  $(aWedding_img_ul_li_a_div[18]).animate({opacity:0},50,function(){
			  $(aWedding_img_ul_li_a_div[17]).animate({opacity:0},50,function(){
				  $(aWedding_img_ul_li_a_div[16]).animate({opacity:0},50,function(){
					  $(aWedding_img_ul_li_a_div[15]).animate({opacity:0},50,function(){
						  $(aWedding_img_ul_li_a_div[14]).animate({opacity:0},50,function(){
							  $(aWedding_img_ul_li_a_div[13]).animate({opacity:0},50,function(){
								  $(aWedding_img_ul_li_a_div[9]).animate({opacity:0},50,function(){
									  $(aWedding_img_ul_li_a_div[1]).animate({opacity:0},50,function(){
										  $(aWedding_img_ul_li_a_div[2]).animate({opacity:0},50,function(){
											  $(aWedding_img_ul_li_a_div[3]).animate({opacity:0},50,function(){
												  $(aWedding_img_ul_li_a_div[4]).animate({opacity:0},50,function(){
													  $(aWedding_img_ul_li_a_div[5]).animate({opacity:0},50,function(){
														  $(aWedding_img_ul_li_a_div[6]).animate({opacity:0},50,function(){
															  $(aWedding_img_ul_li_a_div[7]).animate({opacity:0},50,function(){
																  $(aWedding_img_ul_li_a_div[11]).animate({opacity:0},50,function(){
																	  $(aWedding_img_ul_li_a_div[19]).animate({opacity:0},50,function(){
																		  $(aWedding_img_ul_li_a_div[27]).animate({opacity:0},50,function(){
																			  $(aWedding_img_ul_li_a_div[26]).animate({opacity:0},50,function(){
																				  $(aWedding_img_ul_li_a_div[25]).animate({opacity:0},50,function(){
																					  $(aWedding_img_ul_li_a_div[24]).animate({opacity:0},50,function(){
																						  $(aWedding_img_ul_li_a_div[23]).animate({opacity:0},50,function(){
																							  $(aWedding_img_ul_li_a_div[22]).animate({opacity:0},50,function(){
																								  $(aWedding_img_ul_li_a_div[21]).animate({opacity:0},50,function(){
																									  $(aWedding_img_ul_li_a_div[20]).animate({opacity:0},50,function(){
																										  $(aWedding_img_ul_li_a_div[12]).animate({opacity:0},50,function(){
																											  $(aWedding_img_ul_li_a_div[8]).animate({opacity:0},50,function(){
																												  $(aWedding_img_ul_li_a_div[0]).animate({opacity:0},50,function(){
																													  oWedding_ul_mask.hide();
																													  });
																												  });
																											  });
																										  });
																									  });
																								  });
																							  });
																						  });
																					  });
																				  });
																			  });
																		  });
																	  });
																  });
															  });
														  });
													  });
												  });
											  });
										  });
									  });
								  });
							  });
						  });
					  });
				  });
			  });
		  });
			    });
		  
		  });
	  });
//****************************点击婚纱按钮结束*************************************************************************

//**************************************在照片页面返回首页**************************************************************
  oUl_wedding_photo_list_a.click(function(){
	  
	  aWeddingParty_img.fadeOut(200);
	  aWedding_img.fadeOut(200,function(){
		   oContent.show(10,function(){
					  oContent.animate({width:oBig_box_width/4,
					  height:oBig_box_width*509/1976,
					  marginLeft:-oBig_box_width/8,
					  marginTop:-oBig_box_width*509/3952},300,"easeInSine");
					  oImg.each(function(){
						  $(this).animate({width:oBig_box_width/4,height:oBig_box_width*509/1976},300,'easeInSine');
						  });
					  });
		  oHeader.fadeIn(300);
		  aWedding_img_ul_li_a_div.each(function(){
			  $(this).animate({opacity:100},1);
			  });
		  aWeddingParty_img_ul_li_a_div.each(function(){
			  $(this).animate({opacity:100},1);
			  });
		  });
	  oUl_wedding_photo_list.fadeOut(500,function(){
		  oUl_Index.fadeIn(500,function(){
			  aLi.each(function(index){
				  $(this).animate({left:index*74},400,'easeOutElastic');
				  });
			  });
		  });
	  });
//**************************************在婚纱页面返回首页结束*************************************************************
  $("#wedding_img ul a").fancybox();
  $("#weddingParty_img ul a").fancybox();
  $(window).resize(function(){
	  
	  oBig_box_width = $(window).width();
      oBig_box_height = $(window).height();
	  oBigMask.css({width:oBig_box_width,height:oBig_box_height});
	  oBig_box.css({"width":oBig_box_width,"height":oBig_box_height });
	  oContent.css({"width":oBig_box_width/4,"height":oBig_box_width*509/1976,"marginLeft":-oBig_box_width/8,"marginTop":-oBig_box_width*509/3952});
	  oImg.each(function(){
	  $(this).css({"width":oBig_box_width/4,"height":oBig_box_width*509/1976});
	  });
	  })
  
})