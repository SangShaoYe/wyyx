define(function(){

	var func = function(){
		
		var resetWidth = function(){
			var clientWidth = document.body.clientWidth + "px";
			$(".cartList-frame").css("width", clientWidth);
			$(".cartList-frame").each(function(){
				var oLeft = - $(this).parent().offset().left + "px";
				$(this).css("left", oLeft);
			})
		}
		$(window).resize(function(){
			resetWidth();
		})
		resetWidth();
		
		var selected = function(){
			var count = 0;
			$(".m-tabNav").on("mouseenter",".nav-item",function(){
				count++;
				
				$(".nav-sort").removeClass("active");
				$(".cartList-frame").hide();
				var $thisSort = $(this).find(".nav-sort");
				$thisSort.addClass("active");
				if(count == 1){
					$thisSort.next().fadeIn(200);
				}else{
					$thisSort.next().show();
				}		
			})
			$(".m-tabNav").on("mouseleave", function(){
				$(this).find(".nav-sort").removeClass("active");
				$(this).find(".cartList-frame").fadeOut(200);
				count = 0;
			})
		}
		selected();
	}
	
	return {
		func:func
	}
})