define(function(){
	var func = function(){
		$(".float-frame").css("display","none");
		$(window).scroll(function(){
			if($(window).scrollTop() > 190){
				$(".float-frame").css("opacity","1").css("z-index","100");
				$(".float-frame").slideDown(200);
			}
			if($(window).scrollTop() < 170){	
				$(".float-frame").slideUp(1);
				$(".float-frame").css("opacity","0").css("z-index","-100");
			}
			if($(window).scrollTop() > 1000){
				$("#m-btn-top").css("display","block");
			}else{
				$("#m-btn-top").css("display","none");
			}
		})
		$("#btn-top").click(function(){
			$('body,html').animate({scrollTop: 0},300);
			return false;
		})
	}
	return {
		func:func
	}
})