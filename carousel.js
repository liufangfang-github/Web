window.onload = function(){
var objList = {
	id:"show-image",
	imageSrcList:[
		"images/1.jpg",
		"images/2.jpg",
		"images/3.jpg",
		"images/4.jpg",
	]
}

	function carousel(obj){
		this.initData(obj);
	}

carousel.prototype = {
	imageCount:0,
	index:0,
	timer:null,
	initData:function(obj){
		if(typeof obj == "object"){
			this.id = obj.id;
			this.imageURLList = obj.imageSrcList;
			this.imageCount = obj.imageSrcList.length;
		}else{
			console.log("参数传入有误！");
			return false;
		}

	},

	initDOM:function(){
		var node = document.getElementById(this.id);
		for(var i=0;i<this.imageURLList.length;i++){
			var $li = document.createElement("li"); 
			var $image = document.createElement("img");
			$image.src = this.imageURLList[i];
			$li.appendChild($image);
			node.appendChild($li);
		}
	},

	showImage:function(){
			var opacity = 100;
			var node = document.getElementById(this.id);
			var ul_lis=node.getElementsByTagName('li');
			var beforeIndex = 0;
			this.index++;
			if(this.index >= this.imageCount){
				this.index = 0;
				beforeIndex = this.imageCount-1;
			}else{
				beforeIndex = this.index-1;
			}

			if (node.style.opacity != undefined) { 
			///兼容FF和GG和新版本IE 
				ul_lis[beforeIndex].style.opacity = 1 - opacity / 100; 
				ul_lis[this.index].style.opacity = opacity / 100; 

			} else { 
			///兼容老版本ie 
				ul_lis[beforeIndex].style.filter = 1 -"alpha(opacity=" + opacity + ")"; 
				ul_lis[this.index].style.filter = "alpha(opacity=" + opacity + ")"; 
			} 
	},

	showing:function(){
		var self = this;
		this.timer = setInterval(function(){
			self.showImage();
		},2000)
	}
}

	var carousel_image = new carousel(objList);
	carousel_image.initDOM();
	carousel_image.showing();

}