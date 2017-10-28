require.config({
	paths:{
		"tabNav":"tabNav.module",
		"scrollTab":"scrollTab.module",
		"jquery":"jquery",
		"cookie":"jquery.cookie",
		"cartOperate":"cartOperate.module",
		"loginSingle":"loginSingle.module",
	}
})



require(["tabNav","jquery"], function(tabNav, $){
	tabNav.func();
})

require(["scrollTab","jquery"], function(scrollTab, $){
	scrollTab.func();
})

require(["cartOperate","jquery","cookie"], function(cartOperate, $, $){
	cartOperate.func();
})
require(["loginSingle","jquery"], function(loginSingle, $){
	$(".btn-order").on("click",function(){
		loginSingle.func();
	})
})
