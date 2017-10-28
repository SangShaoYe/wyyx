define(["jquery","showAll"], function($, showAll){

	var func = function(){

		$(".field").find("span").css("cursor","not-allowed");
		
		$(".specialProperty").find(".tab").attr("name","");

		var activeNum = 0;

		$(".specialProperty").on("click",".tab",function(){
			$(this).closest(".specialProperty").find(".tab").removeClass("active");
			$(this).closest(".specialProperty").find("i").removeClass("choose");
			var thisName = $(this).attr("name");

			var thisTitle = $(this).attr("title");

			if(thisTitle == "直径40CM"){
				$("#num").html("29.00");

			}else if(thisTitle == "直径55CM"){
				$("#num").html("49.00");
			}

			if(thisName == ""){
				$(this).addClass("active");
				$(this).prev().addClass("choose");
				$(this).closest(".specialProperty").find(".tab").attr("name","");
				$(this).attr("name","selected");
			}else{
				$(this).attr("name","");
			}

			activeNum = $(".specialProperty").find(".active").length;

			if(activeNum <= 1){
				$(".field").find("span").css("cursor","not-allowed");
			}else if(activeNum == 2){
				$(".field").find(".more").css("cursor","pointer");
			}
		})

		var thisNum = $(".num-ipt").attr("value");

		$(".more").on("click",function(){
			if(activeNum == 2){				
				thisNum++;
				$(".less").css("cursor","pointer");
				$(".num-ipt").attr("value",thisNum);
			}else{
				alert("库存不足");
			}		
		})

		$(".less").on("click",function(){
			if(thisNum > 2){
				$(this).css("cursor","pointer");
				thisNum --;
				$(".num-ipt").attr("value",thisNum);
			}else if(thisNum == 2){
				$(this).css("cursor","not-allowed");
				thisNum --;
				$(".num-ipt").attr("value",thisNum);
			}else{
				alert("本商品一件起售");
			}
		})

		$(".less").on("mouseover", function(){
			if(thisNum == 1 || activeNum != 2){				
				$(this).css("cursor","not-allowed");
			}
		})

		$(".intoCart").on("click", function(){
			if(activeNum != 2){
				alert("请选择商品规格")
			}else{

				var name = "日式蓬软太鼓抱枕";
				var prop1 = $(".prop1").find(".active").attr("title");
				var prop2 = $(".prop2").find(".active").attr("title");
				var num = Number($(".num-ipt").attr("value"));
				var price = parseFloat($("#num").html()).toFixed(2);
				var source = $(".prop2").find(".active").find("img").attr("src");

				var first = $.cookie("goods") == null ? true : false;
				if(first){
					$.cookie("goods", '[{\"name\":\"' +  name + '\",\"size\":\"' + prop1 + '\",\"color\":\"' + prop2 + '\",\"num\":' + num
					 + ',\"price\":\"' + price + '\",\"src\":\"' + source + '\"}]', {expires: 7});
				}else{
					var cookieStr = $.cookie("goods");
					var arr = eval(cookieStr);

					var isYes = false;
					
					for(var i in arr){
						if(arr[i].size == prop1 && arr[i].color == prop2){
							arr[i].num += num;
							isYes = true;
						}
					}
					if(!isYes){
						var obj = {name:name, size:prop1, color:prop2, num:num, price:price, src:source};
						arr.push(obj);
					}

					$.cookie("goods", JSON.stringify(arr), {expires: 7});
					
				}
				showAll.func();
			}	
		})
	}

	return {
		func:func
	}
	
})