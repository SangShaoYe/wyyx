define(function(){
	var func = function(parent,src){
		var myImg = (function(){
			var imgNode = document.createElement("img");
			parent.appendChild(imgNode);
			return {
				setSrc: function(src){
					imgNode.src = src;
				}
			}
		})();

		var proxyImg = (function(){
			var img = new Image(); 
			img.onload = function(){ 	
				myImg.setSrc(this.src);
			}
			return {
				setSrc: function(src){
					myImg.setSrc("../img/wait.png");
					img.src = src;
				}
			}
		})();

		proxyImg.setSrc(src);
	}

	return {
		func:func
	}
})