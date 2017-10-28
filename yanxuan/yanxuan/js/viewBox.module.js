define(function(){

	var func = function(node){
		var $list = node.find(".list");
		$list.on("mouseover","li",function(){
			$list.find("li").removeClass("active");
			$(this).addClass("active");
			var $index = $(this).index() + 1;
			if($index == 1){
				$("#viewBox").attr("src","../img/detail/image" + $index + ".png" );
			}else{
				$("#viewBox").attr("src","../img/detail/image" + $index + ".jpg" );
			}
		})
	}
	
	return {
		func:func
	}
})