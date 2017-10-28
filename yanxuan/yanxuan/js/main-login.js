require.config({
	paths:{
		"tabNav":"tabNav.module",
		"scrollTab":"scrollTab.module",
		"showCart":"showCart.module",
		"jquery":"jquery",
		"cookie":"jquery.cookie",
		"showAll":"showAll.module",
	}
})



require(["tabNav","jquery"], function(tabNav, $){
	tabNav.func();
})



require(["scrollTab","jquery"], function(scrollTab, $){
	scrollTab.func();
})

require(["showCart","jquery","cookie"], function(showCart, $, $){
	showCart.func();
})
