require.config({
	paths:{
		"tabNav":"tabNav.module",
		"imgScale":"imgScale.module",
		"imgLoad":"imgLoad.module",
		"infoLoad":"infoLoad.module",
		"imgAgency":"imgAgency.module",
		"scrollTab":"scrollTab.module",
		"viewBox":"viewBox.module",
		"infoPart":"infoPart.module",
		"showCart":"showCart.module",
		"jquery":"jquery",
		"cookie":"jquery.cookie",
		"showAll":"showAll.module",
		"loginSingle":"loginSingle.module",
	}
})



require(["tabNav","jquery"], function(tabNav, $){
	tabNav.func();
})

require(["scrollTab","jquery"], function(scrollTab, $){
	scrollTab.func();
})

require(["jquery","imgAgency","imgLoad","infoLoad"], function($, imgAgency, imgLoad, infoLoad){
	imgLoad.func($(".db-content"),"../data/detail/db-img.json");
	infoLoad.func($(".db-right"),"../data/detail/hotSell.json");
})

require(["imgScale","jquery"], function(imgScale, $){
	imgScale.func($(".db-right"));
})
require(["viewBox","jquery"], function(viewBox, $){
	viewBox.func($(".detailHead"));
})
require(["infoPart","jquery","cookie"], function(infoPart, $, $){
	infoPart.func();
})
require(["showCart","jquery","cookie"], function(showCart, $, $){
	showCart.func();
})
require(["loginSingle","jquery"], function(loginSingle, $){
	$(".buyNow").on("click",function(){
		loginSingle.func();
	})
})