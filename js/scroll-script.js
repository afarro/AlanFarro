
/* only apply jQuery after the document is ready */
$(document).ready(function (){
	$(window).scroll(function (){

		$heightOfHeader = $("header").height();
		if($(window).scrollTop() <= $heightOfHeader) {
			$(".fixed").css("position","static");
			//$(".fixed").css("float","left");
		} else {
			$(".fixed").css("position","fixed");
 			$(".fixed").css("top","0px");
			$(".fixed").css("left","0px");
		}
	});//end of $(window).scroll()

});//end of $(document).ready() 