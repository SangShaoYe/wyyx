define(["jquery","showAll"], function($, showAll){
	var func = function(){
		
		showAll.func();
		$(".cartBox").on("mouseover",function(){
			var cookieStr = $.cookie("goods");
			if(cookieStr != "[]"){
				$(".miniCart").css("display","block");
			};
		})
		var count = 0;

		$(".cartBox").on("mouseenter",function(){		
			if(count == 0){
				var cookieStr = $.cookie("goods");
				var arr = eval(cookieStr);
				if(cookieStr){
					var html = "";	
					for(var i in arr){
						html += '<li class="listCont"><img src=\"' + arr[i].src + '\"><div class="content"><p class="title" title=\"' + arr[i].name + '\">' + arr[i].name + '</p><span class="goods-price">￥' + arr[i].price + '</span><br/><p class="prop" title=\"' + arr[i].size + ' ' + arr[i].color + '\">' + arr[i].size + '&nbsp;' + arr[i].color + '</p><span class="goods-num">x&nbsp;' + arr[i].num + '</span><strong class="btn-del">X</strong></div></li>';
					}

					$(".goodsList").html(html);

					$(".cartBox").on("click","strong", function(){
						var $prop = $(this).closest(".listCont").find(".prop").attr("title");
						$prop = $prop.replace(' ','');
						for(var i in arr){	
							var str = arr[i].size + ' ' + arr[i].color;
							str = str.replace(' ','');
							if($prop == str){
								arr.splice(i,1);
							}
						}
						$.cookie("goods", JSON.stringify(arr), {expires: 7});
						showAll.func();
						$(this).closest(".listCont").remove();				
					})			
				}
			}

			count++;
		});


		$(".cartBox").on("mouseout",function(){
			count = 0;
			$(".miniCart").css("display","none");
		});

	}

	return{
		func:func
	}
})