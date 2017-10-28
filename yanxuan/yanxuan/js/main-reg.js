require.config({
	paths:{
		"jquery":"jquery",
		"vertify":"vertify.module",
	}
})



require(["vertify","jquery"], function(vertify, $){
	vertify.func();
})
