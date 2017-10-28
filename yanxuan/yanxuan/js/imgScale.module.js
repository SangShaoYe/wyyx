define(function(){
	
	var func = function(node){
		var $className = node.attr("class");
		if($className == 'db-right'){
			node.find(".mask").each(function(){
				var oHeight = 0;
				var oWidth = 0;
				$(this).hover(function(){
					oWidth = $(this).next().width();
					oHeight = $(this).next().height();
					$(this).next().stop().animate({
						"left":"-2%",
						"top":"-2%",
	                    "width":"104%",
	                    "height":"104%"
					},500)	
				},function(){
					$(this).next().stop().animate({
						"left":"0",
						"top":"0",
	                    "width":"100%",
	                    "height":"100%"
					},500)
				})
			})	
		}else{

			node.find(".mask").each(function(){
				var oHeight = 0;
				var oWidth = 0;
				$(this).hover(function(){
					oWidth = $(this).next().width();
					oHeight = $(this).next().height();
					if(oWidth == 250){
						$(this).next().stop().animate({
		                    "width":oWidth * 104 / 100 + "px",
		                    "height":oHeight * 104 / 100 + "px"
						},500)
					}else{
						$(this).next().stop().animate({
							"left":"-2%",
							"top":"-2%",
		                    "width":"104%",
		                    "height":"104%"
						},500)
					}		
				},function(){
					if(oWidth == 250){
						$(this).next().stop().animate({
		                    "width":oWidth + "px",
		                    "height":oHeight + "px"
						},500)
					}else{
						$(this).next().stop().animate({
							"left":"0",
							"top":"0",
		                    "width":"100%",
		                    "height":"100%"
						},500)
					}				
				})
			})
		}		
	} 
	
	return {
		func:func
	}
})