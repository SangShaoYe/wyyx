define(["jquery","imgAgency"], function($, imgAgency){

	var func = function(parent, url){
		$.ajax({
			url:url,
			type:"get",
			dataType:"json",
			success:function(result){
				var thisRst = result[0];
				parent.find(".newCate").each(function(){
					var id = $(this).attr("id");
					var json = thisRst[id];
					var count = 0;
					var thisId = "#" + id;
					$(thisId).find(".contain").each(function(){			
						imgAgency.func($(this).get(0), json[count].src);
						count++;			
					})
					for(var i = 0; i < json.length; i++){
						$(thisId).find(".name").eq(i - 1).find("a").html(json[i].name);
						$(thisId).find(".price").eq(i - 1).find("span").html(json[i].price);
						if(json[i].topTag){
							var $thisParent = $(thisId).find(".sub-head").eq(i - 1);
							var $thisNode = $("<span></span>")
							$thisParent.append($thisNode);
							$thisNode.html(json[i].topTag);
						}
						if(json[i].bottomTag){
							var $thatParent = $(thisId).find(".prdTags").eq(i - 1);
							var $thatNode = $("<span></span>")
							$thatParent.append($thatNode);
							$thatNode.html(json[i].bottomTag);
						}
					}
				})		
			}

		})
	}

	return {
		func:func
	}
	
})