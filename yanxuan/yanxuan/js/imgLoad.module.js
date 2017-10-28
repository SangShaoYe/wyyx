define(["jquery","imgAgency"], function($, imgAgency){

	var func = function(parent, url){
		$.ajax({
			url:url,
			type:"get",
			dataType:"json",
			success:function(result){
				var count = 0;
				parent.find(".contain").each(function(){
					imgAgency.func($(this).get(0), result[count].src);
					count++;
				})			
			}
		})
	}

	return {
		func:func
	}
	
})