/*公用代码*/
(function($){
	//插件名称setEmpty
	$.fn.setEmpty=function(){
		var thisInput = $(this);
		var appendImg = "<img src='images/close.png' class='empty-btn fn-hide J_empty'>";
		var wrapEle = "<div class='inputBox'></div>";

		thisInput.wrap(wrapEle);
		thisInput.parent().append(appendImg);
		thisInput.on("keyup",function(){
			$(this).siblings(".J_empty").show();
		});
		thisInput.siblings(".J_empty").on("click",function(){
			$(this).hide().siblings(thisInput).val("");
		});								
	}
})(jQuery);