window.onload = function(){
	//找到侧边栏的id
	var  btn = document.getElementById("fiexSidebar");
	btn.style.display = "none";

	window.onscroll = function(){
		//获取滚动条距离浏览器顶部的距离
		var backTop = document.documentElement.scrollTop || document.body.scrollTop
		// console.log(backTop);     测试代码
		//获取首屏界面距离浏览器顶部的距离
		var totop = $("#firstScreen").offset().top + 50;
		// console.log(totop);
		if(backTop>totop){
			btn.style.display = "block"
		}
		else{
			btn.style.display = "none"
		}
	}

}