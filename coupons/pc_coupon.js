$(function(){
	var couponno = '';
	$(document).on('click','.copy_contant',function(){
		var couponno = $(this).attr('couponno');
		if(couponno != '' && couponno != null && couponno != undefined){
			$.ajax({
				url: BasePath+"/coupon/getOlineCoupon.ihtml",
			 	type: "POST",
				async:false,
				cache:false,
				data: {'schemeNo':couponno},
			    error: function (XMLHttpReuqest, textStautus, errothrown) {
			        console.log(textStautus);
			        console.log(errothrown);
			    },
				success: function(data){
					var nowdata = JSON.parse(data);
					if(nowdata.data.status == 'nolgn'){
						if(confirm("领取优惠券前请先登录！")){
			    			toLogin();
			    		}else{
			    			return;
			    		}
					}else if(nowdata.data.status == 'exp'){
						alert("领取优惠券出错，请刷新后重新领取！");
						return;
					}else if(nowdata.data.status == 'success'){
						$(".coupon_importent").css("z-index","10");
						$(".success").show();
						$(".btnclose").show();
						$(".zhezhao").show();
						$(".btnclose").click(function(){
							$(".success").hide();
							$(".btnclose").hide();
							$(".zhezhao").hide();
							});
						return;
					}
				}
			})
		}else{
			alert('暂无其他优惠券，敬请期待！');
		}
		
	});
});

