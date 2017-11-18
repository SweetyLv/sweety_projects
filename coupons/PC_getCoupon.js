<!-- author by sweetylv -->
var dd = $(".coupon_tiket li").length;
function appendText(){
	var aText3 = document.createElement("a");
	//aText3.innerHTML="<img src="${PCRESOURCE_PATH}res/PCimg/qidai.png">";
	aText3.innerHTML='<img src="http://res.gbhui.com/res/PCimg/qidai.png">';
	$(".wait_content").append(aText3);
	$(".wait_content a").addClass("sha_1711 wait_coupon");
}
for(var i=0;i<9-dd;i++){
	appendText();
}
