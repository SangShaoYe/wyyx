define(function(){
	var func = function(){

		//居中显示
		function resetLeft(nodes){
			var clientWidth = document.body.clientWidth;	
			nodes.each(function(){
				var oLeft = - (1920 - clientWidth) / 2 + "px";
				$(this).css("left", oLeft);
			})
		}
		function setButton(node1,node2){
			var clientWidth = document.body.clientWidth;
			var oLeft = -(1920 - clientWidth) / 2 + 365 + "px";
			node1.css("left",oLeft);
			var oRight = -(1920 - clientWidth) / 2 + 365 + "px";
			node2.css("right",oRight);
		}

		setButton($("#btn-left"),$("#btn-right"));

		$(window).resize(function(){
			var $imgs = $(".js-img").find("img");
			resetLeft($imgs);
			setButton($("#btn-left"),$("#btn-right"));
		})		

		//轮播
		var timer = null;
		var count = 1;
		timer = setInterval(replace,5000)

		//hover取消定时器
		$(".js-img").hover(function(){
			clearInterval(timer);
		}, function(){
			timer = setInterval(replace,5000);
		})

		//hover
		$(".banner").find("button").each(function(){
			$(this).hover(function(){
				$(this).css("background-color","#b4a078");
				// clearInterval(timer);
			},function(){
				$(this).css("background-color","#D0C4AF");
				// timer = setInterval(replace,5000);
			})
		})

		//点击左右按钮切换
		$("#btn-left").on("click",function(){
			clearInterval(timer);				
			if(count == 0){
				count = 6;
			}
			count-=1;
			var num1 = count - 1;
			var num2 = num1 + 1;
			if(num2 == 6){
				num2 = 0;
			}
			$(".js-img").not($(".js-img").eq(num2)).css("z-index", -2);
			$(".js-img").eq(num2).css("z-index", -1);
			$(".js-img").eq(num1).css("z-index", 0).css("opacity", 0)
			.animate({"opacity":1}, 200);
			$(".btn-list").find("li").removeClass("active");
			$(".btn-list").find("li").eq(count - 1).addClass("active");

		})

		$("#btn-right").on("click",function(){
			clearInterval(timer);					
			if(count == 6){
				count = 0;
			}
			count+=1;
			var num1 = count - 1;
			var num2 = num1 - 1;
			if(num2 == -1){
				num2 = 5;
			}
			$(".js-img").not($(".js-img").eq(num2)).css("z-index", -2);
			$(".js-img").eq(num2).css("z-index", -1);
			$(".js-img").eq(num1).css("z-index", 0).css("opacity", 0)
			.stop().animate({"opacity":1}, 200);
			$(".btn-list").find("li").removeClass("active");
			$(".btn-list").find("li").eq(count - 1).addClass("active");

		})
		//hover列表按钮切换
		var lastNum = -1;
		$(".btn-list").on("mouseover","li",function(){

			clearInterval(timer);
			$(".btn-list").find("li").removeClass("active");
			$(this).addClass("active");
			count = $(this).index();
			var num = count;
			if(num != lastNum){
				$(".js-img").not($(".js-img").eq(lastNum)).css("z-index", -2);
				$(".js-img").eq(lastNum).css("z-index", -1);
				$(".js-img").eq(num).css("z-index",0).css("opacity",0)
				.stop().animate({"opacity":1},200);
			}		
			lastNum = num;
			count++;
		})

/*		$(".btn-list").on("mouseout","li",function(){
			timer = setInterval(replace,5000);
		})*/

		//定时器核心函数
		function replace(){
			if(count == 6){
				count = 0;
				$(".js-img").css("z-index",0);
			}
			count+=1;
			var num = count - 1;
			$(".js-img").eq(num).css("z-index",count).css("opacity",0)
			.stop().animate({"opacity":1},200);
			
			$(".btn-list").find("li").removeClass("active");
			$(".btn-list").find("li").eq(count - 1).addClass("active");
			lastNum = count;
		}

	}
	
	return {
		func:func
	}
})