$(function(){	
	var scrollDis=1000;
	flowMenu();
	$(window).scroll(function(){
       flowMenu();
	});
	
	$('.projectlist li').mouseenter(function(){
		var num=$(this).index();
		$(this).addClass('liactive').siblings().removeClass('liactive');
		$('.project').eq(num).show().siblings().hide();
	});
	
	tabs($('.tabs li'),'target','current');
	scrollToElm($('.casetitle li,.orderbtn'),'target','current',scrollDis);
	eeqFixImg($('.successcaseimg li'));
	
	$('.submitbtns').click(function(){
		$(this).parent().submit();
	});
	
	$('.product-list .product-list-p').click(function(){
		$(this).parent().addClass('current').siblings().removeClass('current');
	});
});

/*
$(function () {
    $.fn.fsrPMD = function (options) {
        var defaults = {
            Event: 'mouseover',       //事件
            Id: 'div',              //容器ID
            Bq: 'ul',               //标签
            Fx: "down",             //图片路径
            Time: 1000         //时间
        };
        var options = $.extend(defaults, options); //合并  将defaults 与 options合并
        //响应

        var me = $("#" + options.Id)[0]; //将jq对象转换成dom元素    $("#" + options.Id).get(0)
        var $me = $(me);
        if (options.Fx == "down") {
            $me.append("<" + options.Bq + "></" + options.Bq + ">");  //将标签添加进去
            var bq = me.children[0];				//找到第一个标签	
            var bq1 = me.children[1];				//找到第二个标签
            bq1.innerHTML = bq.innerHTML;
            var pmdDown = setInterval(function () {
                me.scrollTop++;
                if (me.scrollTop == bq.offsetHeight) {
                    me.scrollTop = 0;
                }
            }, options.Time)
            $(this).die().bind("mouseout", function () {
                pmdDown = setInterval(function () {

                    me.scrollTop++;
                    if (me.scrollTop == bq.offsetHeight) {
                        me.scrollTop = 0;
                    }
                }, options.Time)
            }).bind(options.Event, function () {
                clearTimeout(pmdDown);
            });
        }
        else if (options.Fx == "left") {            
            tr = $me.find(options.Bq).parent();
            var bq = tr[0].innerHTML
            var bq1 = bq;
            tr.append(bq1);
            var pmdLeft = setInterval(function () {
                
                if (tr[0].offsetWidth/2 - me.scrollLeft <= 0)
                    me.scrollLeft -= tr[0].offsetWidth / 2
                else {
                    me.scrollLeft++;
                }
            }, options.Time)
        }
        $(this).die().bind("mouseout", function () {
            pmdLeft = setInterval(function () {
                if (tr[0].offsetWidth / 2 - me.scrollLeft <= 0)
                    me.scrollLeft -= tr[0].offsetWidth / 2
                else {
                    me.scrollLeft++;
                }
            }, options.Time)
        }).bind(options.Event, function () {
            clearTimeout(pmdLeft);
        });
    }
});
*/
//flowMenu
function flowMenu(){
   var nowtop=$(window).scrollTop()+100;
   var $floatBox = $('#float_box');
   var $goTop = $('.btn-goTop');
   if(nowtop<425){
      $floatBox.fadeOut(300);
   }else if(nowtop>=425){
      $floatBox.css('top',nowtop+'px').fadeIn(300);
   };
   if(nowtop>=1000){
      $goTop.fadeIn(300);
   }else{
      $goTop.fadeOut(300);
   };
}

//TABs
function tabs(targetObject,targetName,nowItemClassName){
   var $targetObject = targetObject;
   $targetObject.mouseenter(function(){
      var $item = $(this);
      var targetMark = $item.attr(targetName);
      var $target = $('.'+targetMark).length==0 ? $('#'+targetMark) : $('.'+targetMark);
      $item.addClass(nowItemClassName).siblings().removeClass(nowItemClassName);
      $target.addClass(nowItemClassName).siblings().removeClass(nowItemClassName);
   });
}

//Scroll
function scrollToElm(targetObject,targetName,nowItemClassName,scrollDis){
   var $targetObject = targetObject;
   $targetObject.click(function(){
      var $item = $(this);
      var targetMark = $item.attr(targetName);
      var $target = $('#'+targetMark).length==0 ? $('.'+targetMark) : $('#'+targetMark);
      $('html,body').animate({scrollTop:$target.offset().top},scrollDis);
 /*     if($item.is('li')){
         $item.addClass(nowItemClassName).siblings().removeClass(nowItemClassName);
      }*/
   });
}

//FixImg
function eeqFixImg($items){
	$items.each(function(){
		var $itemBox = $(this);
		var $target = $itemBox.find('img');
		
		var checkImg = setInterval(function(){
			if($target.width()>0){
				clearInterval(checkImg);
				setImg();
			}
		},300);
		
		function setImg(){
			var itemBoxWidth = $itemBox.width();
			var itemBoxHeight = $itemBox.height();
			var itemBoxProp = itemBoxWidth/itemBoxHeight;
			var targetWidth = $target.width();
			var targetHeight = $target.height();
			var targetProp = targetWidth/targetHeight;
			
			if(itemBoxProp>targetProp){
				//console.log(1);
				$target.width(itemBoxWidth).height($target.width()/targetProp);
			}else{
				//console.log(2);
				$target.height(itemBoxHeight).width($target.height()*targetProp);
			}
			$itemBox.css({
				'position':'relative',
				'overflow':'hidden'
			});
			$target.css({
				position:'absolute',
				left:'50%',
				top:'50%',
				'margin-left':-$target.width()/2,
				'margin-top':-$target.height()/2,
				display:'block'
			});
		}
		
	});
}
//suSlider upAndDown
function suSlider(target,dis){
	var countList=($(target+' li').length)/2;
	var t = n = 0;
	
	$(target+' .numList li').click(function() { 
		$(this).addClass('numlicur').siblings().removeClass('numlicur');
		var getTop=$(target+' .resultlist1').position();
		console.log(getTop);
		var num=$(this).text()-1;
		var newP=num*(-73);
		$(target+' ul').animate({top:newP},600);
	}); 
	$('.arrow-down').click(function() {		
		var curlinum=$(target+' .numList li.numlicur').index();
		if (curlinum!=0){
			n=curlinum-1;
			$(target+ ' .numList li').eq(n).trigger('click');
		}
		else{
			return;
		};
	});
	$('.arrow-up').click(function() {
		showAuto();
	});
	function showAuto() {
		var curlinum=$(target+' .numList li.numlicur').index();
		if (curlinum!=(countList-1)){	
			n=curlinum+1;
			$(target+' .numList li').eq(n).trigger('click');
		}
		else{
			return;	
		}
	}
}
//suSlider leftAndRight
function suSlider2(target,dis){
	var countList=($(target+' li').length)/2;
	var t = n = 0;
	
	$(target+' .numList li').click(function() { 
		$(this).addClass('numlicur').siblings().removeClass('numlicur');
		var getLeft=$(target+' .vi-lists').position();
		var num=$(this).text()-1;
		var newP=num*(-173);
		$(target+' ul').animate({left:newP},600);
	}); 
	$('.prevlist').click(function() {
		var curlinum=$(target+' .numList li.numlicur').index();
		if (curlinum!=0){
			n=curlinum-5;
			$(target+ ' .numList li').eq(n).trigger('click');
		}
		else{
			return;
		};
	});
	$('.nextlist').click(function() {
		showAuto();
	});
	function showAuto() {
		var curlinum=$(target+' .numList li.numlicur').index();
		if (curlinum!=(countList-1)){	
			n=curlinum+5;
			$(target+' .numList li').eq(n).trigger('click');
		}
		else{
			return;	
		}
	}
}