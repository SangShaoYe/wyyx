define(function(){

	var func = function(){

		showNum();

		function showNum(){

			var cookieStr = $.cookie("goods");
			var arr = eval(cookieStr);
			var sum = 0; //用于累加的和
			for(var i in arr){
				sum += arr[i].num;
			}

			$(".cart-num").html(sum);

			var total = 0;
			for(var i in arr){
				total += arr[i].num * arr[i].price;
			}
			total = total.toFixed(2);

			var html = '<div class="totalPrice"><span>商品合计:</span><span>￥' + total + '</span></div><div class="gotoCart"><a href="cart.html" class="gotoCart-btn">去购物车结算</a></div>';
			$(".miniCart-bottom").html(html);
		}
	}

	return{
		func:func
	}

})