function doMove(obj,attr,target,dir,Endfn){

    dir = parseInt(getStyle(obj,attr)) < target ? dir : -dir;

	clearInterval(oDiv.timer);

	oDiv.timer = setInterval(function(){

	var speed = parseInt(getStyle(obj,attr))+dir;

	if(speed<target && dir<0 || speed>target && dir>0){
		speed=target;
	}

	oDiv.style[attr]=speed + 'px';

	if(speed==target){
		clearInterval(oDiv.timer);
		Endfn && Endfn();
	}
	},30);
}

function getStyle(obj,attr){
	return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr];
}