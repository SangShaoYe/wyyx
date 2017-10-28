require.config({
	paths:{
		"tabNav":"tabNav.module",
		"carousel":"carousel.module",
		"imgScale":"imgScale.module",
		"imgLoad":"imgLoad.module",
		"infoLoad":"infoLoad.module",
		"imgAgency":"imgAgency.module",
		"scrollTab":"scrollTab.module",
		"viewBox":"viewBox.module",
		"jquery":"jquery",
	}
})



require(["tabNav","carousel","jquery"], function(tabNav,carousel, $){
	tabNav.func();
	carousel.func();

})



require(["scrollTab","jquery"], function(scrollTab, $){
	scrollTab.func();
})

require(["jquery","imgAgency","imgLoad","infoLoad"], function($, imgAgency, imgLoad, infoLoad){
	imgLoad.func($(".m-saleCenter").find(".body"),"../data/index/saleCenter.json");
	infoLoad.func($(".m-newCates"),"../data/index/newCates.json");
})

require(["imgScale","jquery"], function(imgScale, $){
	imgScale.func($(".m-cate"));
})
require(["viewBox","jquery"], function(viewBox, $){
	viewBox.func($(".detailHead"));
})