var idNumArray = [1,2,3];
var i = 0;	
var displayInterval;
var  oPlay = document.getElementById("play");  
var  oPause = document.getElementById("pause");  
var  oPrev = document.getElementById("preview");  
var  oNext = document.getElementById("turn_right");  
var  oPlay2 = document.getElementById("play2");  
var  oPause2 = document.getElementById("pause2");  
var  oPrev2 = document.getElementById("preview2");  
var  oNext2 = document.getElementById("turn_right2"); 
var  oPause3 = document.getElementById("pause3");
var  oFortynine = document.getElementById("floatleftr7c1");  
var  oSeventynine = document.getElementById("floatleftr9c1");  
var  oNintynine = document.getElementById("floatleftr11c1");  
	function getNextHtml(id){
	   var nextfix = "common";
		var target = document.getElementById(nextfix+id);
		
		//alert(target.innerHTML);
		return target.innerHTML;
	}
	function next(){
	if(i >= idNumArray.length){
			i = 0;
		}
		var common = document.getElementById('common');
		//alert(common);
		common.innerHTML = getNextHtml(idNumArray[i++]);
		console.log("switching to ... ["+ i +"]");
		
	}
	next();
	function prev(){
		if(i>0 && i<=idNumArray.length){
		--i;
		var common = document.getElementById('common');
		common.innerHTML = getNextHtml(idNumArray[i]);
	}else	if(i==0){
		var common = document.getElementById('common');
		i = idNumArray.length;
		common.innerHTML = getNextHtml(idNumArray[i-1]);
	}
		console.log("switching to ... ["+ i +"]");
	}
	oPlay.onclick = function(){
		displayInterval=setInterval("next()",4000);
		}
	oPause.onclick = function(){
		clearInterval(displayInterval);
	}
	oPrev.onclick = function(){
		prev();
	}
	oNext.onclick = function(){
		next();
	}
	oPlay2.onclick = function(){
		displayInterval=setInterval("next()",4000);
		}
	oPause2.onclick = function(){
		clearInterval(displayInterval);
	}
	oPrev2.onclick = function(){
		prev();
	}
	oNext2.onclick = function(){
		next();
	}
	oPause3.onclick = function(){
		clearInterval(displayInterval);
	}
	oFortynine.onclick = function(){
		var common = document.getElementById('common');
		common.innerHTML = getNextHtml(idNumArray[0]);
	}
	oSeventynine.onclick = function(){
		var common = document.getElementById('common');
		common.innerHTML = getNextHtml(idNumArray[1]);
	}
	oNintynine.onclick = function(){
		var common = document.getElementById('common');
		common.innerHTML = getNextHtml(idNumArray[2]);
	}