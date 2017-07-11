window.onload = function (){
	fnTab( 'pic1', [ 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/'],[ 'images/roll_01.jpg', 'images/roll_02.jpg', 'images/roll_03.jpg'], [ 'pic1_1', 'pic1_2', 'pic1_3'], 'onmouseover' );
	fnTab( 'pic_f1', [ 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/'],[ 'images/floor1_01.jpg', 'images/floor1_02.jpg', 'images/floor1_03.jpg'], [ 'pic1_1', 'pic1_2', 'pic1_3'], 'onmouseover' );
	fnTab( 'pic_f2', [ 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/'],[ 'images/floor2_01.jpg', 'images/floor2_02.jpg', 'images/floor2_03.jpg'], [ 'pic1_1', 'pic1_2', 'pic1_3'], 'onmouseover' );
	fnTab( 'pic_f3', [ 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/'],[ 'images/floor3_01.jpg', 'images/floor3_02.jpg', 'images/floor3_03.jpg'], [ 'pic1_1', 'pic1_2', 'pic1_3'], 'onmouseover' );
	fnTab( 'pic_f4', [ 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/'],[ 'images/floor4_01.jpg', 'images/floor4_02.jpg', 'images/floor4_03.jpg'], [ 'pic1_1', 'pic1_2', 'pic1_3'], 'onmouseover' );
	fnTab( 'pic_f5', [ 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/', 'https://github.com/SweetyLv/sweety_sugar/blob/master/beauty_girl/'],[ 'images/floor5_01.jpg', 'images/floor5_02.jpg', 'images/floor5_03.jpg'], [ 'pic1_1', 'pic1_2', 'pic1_3'], 'onmouseover' );
};

function fnTab( id,aUrl,arrUrl, arrText, evt ){
	var oDiv = document.getElementById(id);
	var oA = oDiv.getElementsByTagName('a')[0];
	var oImg = oDiv.getElementsByTagName('img')[0];
	var oSpan = oDiv.getElementsByTagName('span')[0];
	var oP = oDiv.getElementsByTagName('p')[0];
	var oUl = oDiv.getElementsByTagName('ul')[0];
	var aLi = oUl.getElementsByTagName('li');
	var num = 0;
	
	////////////////////////////////////////////////////////////////////////
	
	var timer = null;
	
	function autoPlay(){
		timer = setInterval(function(){
			num++;
			num%=arrUrl.length;
			fnTab();
		}, 6000);
	}
	// autoPlay();
	
	setTimeout( autoPlay, 6000 );
	
	oDiv.onmouseover = function (){
		clearTimeout( timer );
	};
	oDiv.onmouseout = autoPlay;
	
	////////////////////////////////////////////////////////////////////////
		
	for( var i=0; i<arrUrl.length; i++ ){
		oUl.innerHTML += '<li></li>';
	}
	
	for( var i=0; i<aUrl.length; i++ ){
	}
	
	// 初始化
	function fnTab(){
		oA.href = aUrl[num];
		oImg.src = arrUrl[num];
		for( var i=0; i<aLi.length; i++ ){
			aLi[i].className = '';
		}
		aLi[num].className = 'active';
	}
	fnTab();
	
	for( var i=0; i<aLi.length; i++ ){
		aLi[i].index = i;			// 索引值
		aLi[i][evt] = function (){
			num = this.index;
			fnTab();
		};
	}
}
