define(function(){

	var func = function(){
		$("form").on("focus",".i-input",function(){
			$(this).css("border-color","#4AAFE9");
		})
		$("form").on("blur",".i-input",function(){
			$(this).css("border-color","#DDDDDD");
		})

		$("form").on("click",".u-clear",function(){
			$(this).closest(".u-input").find(".i-input").val('');
			var $table =$(this).closest(".u-input").find(".popb");
			$table.attr("class","popb");
			$table.find(".text").html("");
			$(this).css("display","none");
		})

		$("form").on("change",".i-input",function(){
			var $this = $(this);
			var $value = $this.val();

			if($this.attr('id') == 'ipt-account'){
				vertifyAccount($this, $value);
			}
			if($this.attr('id') == 'ipt-psw'){
				vertifyPsw($this, $value);
			}
			if($this.attr('id') == 'ipt-cfm'){
				vertifyCfm($this, $value);
			}
			if($this.attr('id') == 'ipt-mb'){
				vertifyMb($this, $value);
			}
			if($value == ''){
				$this.closest(".u-input").find(".u-clear").css("display","none");
				var $table = $this.closest(".u-input").find(".popb");
				$table.attr("class","popb");
				$table.find(".text").html("");
			}else{
				$this.closest(".u-input").find(".u-clear").css("display","block");
			}			
		})

		$("#chkbox").on("click",function(){

			isAbled();
		})

		$(".btn-reg").on("click",function(){
			if($(this).attr('class') == 'btn-reg'){
				alert("注册成功!");
			}
		})
		function vertifyAccount($this, $value){
			var $table = $this.closest(".u-input").find(".popb");
			if($value.length > 18 || $value.length < 6){
				$table.attr("class","popb");
				$table.addClass("err");
				$table.find(".text").html("账号须由6-18个字符组成");
			}else if(/^\d/.test($value)){
				$table.attr("class","popb");
				$table.addClass("err");
				$table.find(".text").html("账号须由字母开头");
			}else if(/\W/ig.test($value)){
				$table.attr("class","popb");
				$table.addClass("err");
				$table.find(".text").html("请用数字、字母或下划线命名");
			}else{
				$table.attr("class","popb");
				$table.addClass("correct");
				$table.find(".text").html("");
				$this.val($value + " @ yeah.net");
				isAbled();
			}
		}

		function vertifyPsw($this, $value){
			var $table = $this.closest(".u-input").find(".popb");
			if($value.length > 18 || $value.length < 6){
				if($value.length < 6){
					$table.attr("class","popb");
					$table.addClass("err");
					$table.find(".text").html("密码过于简单");
				}else{
					$table.attr("class","popb");
					$table.addClass("err");
					$table.find(".text").html("密码须由6-16个字符组成");
				}
			}else if(/\W/ig.test($value)){
				$table.attr("class","popb");
				$table.addClass("err");
				$table.find(".text").html("密码不符合规范");
			}else{
				if($value.length > 5 && $value.length < 9){
					$table.attr("class","popb");
					$table.addClass("correct");
					$table.addClass("warn");
					$table.find(".text").html("你的密码强度较弱");
				}else{
					$table.attr("class","popb");
					$table.addClass("correct");
					$table.find(".text").html("");
					isAbled();
				}				
			}
		}

		function vertifyCfm($this, $value){
			var $table = $this.closest(".u-input").find(".popb");
			var $password = $("#ipt-psw").val();
			if($password == ''){
				$table.attr("class","popb");
				$table.addClass("warn");
				$table.find(".text").html("请先输入密码");
			}else{
				if($value == $password){
					$table.attr("class","popb");
					$table.addClass("correct");
					$table.find(".text").html("");
					isAbled();
				}else{
					$table.attr("class","popb");
					$table.addClass("err");
					$table.find(".text").html("两次输入的密码不一致");
				}
			}
		}

		function vertifyMb($this, $value){
			var $table = $this.closest(".u-input").find(".popb");
			if(/^1[3|4|5|7|8][0-9]{9}$/ig.test($value)){
				$table.attr("class","popb");
				$table.addClass("correct");
				$table.find(".text").html("");
				isAbled();
			}else{
				$table.attr("class","popb");
				$table.addClass("err");
				$table.find(".text").html("手机号码格式不正确");
			}
		}

		function isAbled(){
			var abledNum = 0;
			abledNum = $(".correct").length;
			var isChecked = $("#chkbox").prop('checked');
			if(abledNum == 4 && isChecked == true){
				$(".btn-reg").removeClass("disabled");
			}else{
				$(".btn-reg").addClass("disabled");
			}
		}
	}

	return{
		func:func
	}
})