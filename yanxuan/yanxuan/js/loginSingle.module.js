define(function(){
	
	var func = function(){
		var oDiv = null;
		var create = function(){
			if(!oDiv){
				var oDiv = document.createElement("div");

				oDiv.className = "over-page lg-frame";
				document.getElementsByTagName("body")[0].appendChild(oDiv);
				var html = '<div class="bg over-page"></div><div class="login-module"><div class="login-page"><div class="btn-close"></div><div class="head">网易帐号登录</div><form class="body"><div class="inputBox"><div class="u-logo"><p class="u-logo-img"></p></div><div class="u-input"><input type="text" name="email" class="input-text" placeholder="邮箱账号"></div><div class="u-tip"><p class="u-clear"></p></div></div><div class="separate"></div><div class="inputBox"><div class="u-logo"><p class="u-logo-img password"></p></div><div class="u-input"><input type="password" name="email" class="input-text" placeholder="输入密码"></div></div><div class="login-box"><a href="#">登&nbsp;&nbsp;录</a></div><div class="unlogin"><a href="" class="forget-pwd">忘记密码？</a><a href="register.html" class="change-page">去注册</a></div><div class="ologin"><div class="otip">其他登录方式</div><div class="olist"><a href="" class="weixin"></a><a href="" class="qq"></a><a href="" class="weibo"></a><a href="" class="qiyeyou"></a></div></div></form></div></div>'
				
				$(".lg-frame").html(html);
			}
		}
		create();
		$(".btn-close").on("click",function(){
			var $parent = $(this).closest(".lg-frame");
			$parent.remove();
		})
		
	}

	return {
		func:func
	}
})