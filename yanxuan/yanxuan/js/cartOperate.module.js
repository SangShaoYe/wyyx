define(function(){
	var func = function(){
		//购物车个数
		showNum();

		//列表项刷新
		loadItem();
		
		//按钮操作	
		$(".cart-item").on("mouseover",".less",function(){
			var thisNum = $(this).closest(".selnum").find(".num-ipt").attr("value");
			if(thisNum > 1){
				$(this).css("cursor","pointer");
			}
		})

		$(".cart-item").on("click",".less",function(){
			var $this = $(this);
			var thisNum = $(this).closest(".selnum").find(".num-ipt").attr("value");
			if(thisNum > 2){
				$(this).css("cursor","pointer");
				thisNum --;
				cookieChange($this,thisNum);
				$(this).closest(".selnum").find(".num-ipt").attr("value",thisNum);
				priceCount();
				selectedCount();
			}else if(thisNum == 2){
				$(this).css("cursor","not-allowed");
				thisNum --;
				cookieChange($this,thisNum);
				$(this).closest(".selnum").find(".num-ipt").attr("value",thisNum);
				priceCount();
				selectedCount();
			}else{
				alert("本商品一件起售");
			}
		})

		$(".cart-item").on("click",".more",function(){
			var $this = $(this);
			var thisNum = $(this).closest(".selnum").find(".num-ipt").attr("value");
			thisNum++;
			cookieChange($this,thisNum);
			$(".less").css("cursor","pointer");
			$(this).closest(".selnum").find(".num-ipt").attr("value",thisNum);
			priceCount();
			selectedCount();
		})

		//单选
		$(".cart-item").on("click","input",function(){
			if($(this).attr("class")){
				$(this).removeClass("selected");
			}else{
				$(this).addClass("selected");
			}
			priceCount();
			selectedCount();
		})

		//全选
		$(".allSel").on("click",function(){
			if($(this).attr("class") == "allSel selected"){
				$(".cart-page").find("input").removeClass("selected");
			}else{
				$(".cart-page").find("input").addClass("selected");
			}
			priceCount();
			selectedCount();
		})

		//删除
		$(".cart-group").on("click",".delete", function(){
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			var $prop = $(this).closest(".cart-item").find(".prop").html();
			$prop = $prop.replace(' ','');
			for(var i in arr){	
				var str = arr[i].size + ' ' + arr[i].color;
				str = str.replace(' ','');
				if($prop == str){
					arr.splice(i,1);
				}
			}
			$.cookie("goods", JSON.stringify(arr), {expires: 7});
			showNum();
			$(this).closest(".cart-group").remove();
			priceCount();
			selectedCount();
			var _cookieStr = $.cookie("goods");
			if(_cookieStr == '[]'){
				empty();
			}				
		})

		//购物车数量显示函数
		function showNum(){
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			var sum = 0; //用于累加的和
			for(var i in arr){
				sum += arr[i].num;
			}
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			var a = "";
			var b = "";
			var c = "";
			var d = "";
			for(var i in arr){
				a += arr[i].src+"_";
				b += arr[i].name+"_";
				c += arr[i].price+"_";
				d += arr[i].num+"_";
			}
			alert(a);
			$(".t1").attr("value",a);
			$(".t2").attr("value",b);
			$(".t3").attr("value",c);
			$(".t4").attr("value",d);
			$(".cart-num").html(sum);
		}
		//刷新列表项函数
		function loadItem(){
			empty();
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			if(cookieStr){
				if(cookieStr == '[]'){
					empty();
				}else{
					var html = '';
					for(var i in arr){
						html += '<div class="cart-group"><div class="cart-item"><div class="w item-1"><div class="w-chkbox"><input type="checkbox" name="" class="selected"></div></div><div class="w item-2"><div class="pic"><img src="'+ arr[i].src +'"></div><div class="infoCont"><p class="name">' + arr[i].name + '</p><p class="prop">' + arr[i].size + ' ' + arr[i].color + '</p></div></div><div class="w item-3"><p class="item-price"><span>￥</span><span class="price-text">'+ arr[i].price +'</span></p></div><div class="w item-4"><div class="selnum"><span class="less">-</span><input class="num-ipt" type="text" name="saleNumber" value="' + arr[i].num + '"><span class="more">+</span></div></div><div class="w item-5"><p class="s-price"><span>￥</span><span class="sprice-text">00.00</span></p></div><div class="w item-6"><div class="operate"><a class="collect">移入收藏夹</a></div><div class="operate"><a class="delete">删除</a></div></div></div></div>'
					}

					$(".cb-body").html(html);
					priceCount();
					selectedCount();
				}
			}
		}
		//cookie加减操作
		function cookieChange($this,thisNum){
			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			var $prop = $this.closest(".cart-item").find(".prop").html();
			$prop = $prop.replace(' ','');
			for(var i in arr){	
				var str = arr[i].size + ' ' + arr[i].color;
				str = str.replace(' ','');
				if($prop == str){
					arr[i].num = thisNum;
				}
				$.cookie("goods", JSON.stringify(arr), {expires: 7});
				showNum();
			}
			
		}

		
		//已选计数
		function selectedCount(){
			var count = 0;
			var ttlNum = 0;
			$(".selected").closest(".cart-item").find(".num-ipt").each(function(){
				count += parseInt($(this).attr("value"));
			})
			$(".totalNum").html(count);
			$(".cart-item").find(".num-ipt").each(function(){
				ttlNum += parseInt($(this).attr("value"));
			})
			if(count == ttlNum){
				$(".allSel").addClass("selected");
			}else{
				$(".allSel").removeClass("selected");
			}

		}

		//价格小计函数
		function priceCount(){
			$(".cart-item").each(function(){
				var price = parseFloat($(this).find(".price-text").html());
				var num = $(this).find(".num-ipt").attr("value");
				var sprice = (price * num).toFixed(2);
				$(this).find(".sprice-text").html(sprice);
			})

			var totalPrice = 0;
			$(".selected").closest(".cart-item").find(".sprice-text").each(function(){
				totalPrice += parseFloat($(this).html());
			})

			totalPrice = totalPrice.toFixed(2);
			$(".totalPrice").html("￥" + totalPrice);
		}

		function empty(){
			var _html = '<div class="empty">您的购物车里暂无商品</div>';
			$(".cb-body").html(_html);
			$(".main").find("input").removeClass("selected");
		}
	}

	return{
		func:func
	}
})

