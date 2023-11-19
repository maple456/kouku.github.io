// JavaScript Document

$(function(){
	$(".body-3-right button").click(function(){
		var target = $(this).attr("value");
		
	$(".body-3-food div").each(function(){
		$(this).animate({"opacity":0},300,function(){
			$(this).hide();
			
			if($(this).hasClass(target) || target == "all" ){
				$(this).show();
				$(this).animate({"opacity":1},300);
			}
		});
		});
	});
});

$(".b4-img-1").hide();
$(".b4-img-2").hide();
$(".b4-img-3").hide();
$(".b4-img-4").hide();
$(".b4-img-1-text").hide();
$(".b4-img-2-text").hide();
$(".b4-img-3-text").hide();
$(".b4-img-4-text").hide();


$(document).ready(function(){
	$(window).scroll(function() {
       var scroHei = $(window).scrollTop();//滾動的高度
       if (scroHei > 400) {
           	$(".top").addClass("top-1");
           } else {
            $(".top").removeClass("top-1");    }
		
		if(scroHei >= $('#top4').offset().top ){
			$(".b4-img-1").show();
			$(".b4-img-1").addClass("b4-slide-1");
			$(".b4-img-1-text").delay(1300).fadeIn(300);
			
			$(".b4-img-2").delay(800).show(300);
			$(".b4-img-2").delay(800).addClass("b4-slide-2");
			$(".b4-img-2-text").delay(2000).fadeIn(300);
			
			$(".b4-img-3").delay(1500).show(300);
			$(".b4-img-3").delay(1500).addClass("b4-slide-1");
			$(".b4-img-3-text").delay(3000).fadeIn(300);
			
			$(".b4-img-4").delay(2000).show(300);
			$(".b4-img-4").delay(2000).addClass("b4-slide-2");
			$(".b4-img-4-text").delay(4000).fadeIn(300);
		}
			
		
      });
	

	
	$(".goto1").click(function(){
		$("html,body").animate({scrollTop:$('#goto1').offset().top},1000);
	});
    $(".goto2").click(function(){
		$("html,body").animate({scrollTop:$('#goto2').offset().top},1000);
	});
    $(".goto3").click(function(){
		$("html,body").animate({scrollTop:$('#goto3').offset().top},1000);
	});
    $(".goto4").click(function(){
		$("html,body").animate({scrollTop:$('#goto4').offset().top},1000);
	});
    $(".goto5").click(function(){
		$("html,body").animate({scrollTop:$('#goto5').offset().top},1000);
	});
    
    $(".body-2-food-1").mouseenter(function(){
       $(".food-1").addClass("food-2");
         $(".food-1").removeClass("food-3");
    });
    
     $(".body-2-food-1").mouseleave(function(){
       $(".food-1").addClass("food-3");
          $(".food-1").removeClass("food-2");
    });
    
     $(".body-2-food-2").mouseenter(function(){
       $(".food-1-a").addClass("food-2");
         $(".food-1-a").removeClass("food-3");
    });
    
     $(".body-2-food-2").mouseleave(function(){
       $(".food-1-a").addClass("food-3");
          $(".food-1-a").removeClass("food-2");
    });
    
     $(".body-2-food-3").mouseenter(function(){
       $(".food-1-b").addClass("food-2");
         $(".food-1-b").removeClass("food-3");
    });
    
     $(".body-2-food-3").mouseleave(function(){
       $(".food-1-b").addClass("food-3");
          $(".food-1-b").removeClass("food-2");
    });
    
    $(".body-2-food-1").click(function(){
       $(".body-2-line-1").animate({"width" : "95%" },"fast");
         $(".body-2-line-2").animate({"width" : "60%" },"fast");
         $(".body-2-line-3").animate({"width" : "55%" },"fast");
    });
    
     $(".body-2-food-2").click(function(){
       $(".body-2-line-1").animate({"width" : "70%" },"fast");
         $(".body-2-line-2").animate({"width" : "95%" },"fast");
         $(".body-2-line-3").animate({"width" : "60%" },"fast");
    });
    
     $(".body-2-food-3").click(function(){
       $(".body-2-line-1").animate({"width" : "50%" },"fast");
         $(".body-2-line-2").animate({"width" : "90%" },"fast");
         $(".body-2-line-3").animate({"width" : "100%" },"fast");
    });
	
	
	$(".food-img").mouseenter(function(){
		$(".slide1").addClass("slide-1");
		$(".slide1").removeClass("slide-2");
	});
	
	$(".food-img").mouseleave(function(){
		$(".slide1").addClass("slide-2");
		$(".slide1").removeClass("slide-1");
	});
	
	
		$(".food-img-2").mouseenter(function(){
		$(".slide2").addClass("slide-1");
		$(".slide2").removeClass("slide-2");
	});
	
	$(".food-img-2").mouseleave(function(){
		$(".slide2").addClass("slide-2");
		$(".slide2").removeClass("slide-1");
	});
	
	
	
	$(".food-img-3").mouseenter(function(){
		$(".slide3").addClass("slide-1");
		$(".slide3").removeClass("slide-2");
	});
	
	$(".food-img-3").mouseleave(function(){
		$(".slide3").addClass("slide-2");
		$(".slide3").removeClass("slide-1");
	});
	
	
	$(".food-img-3").mouseenter(function(){
		$(".slide3").addClass("slide-1");
		$(".slide3").removeClass("slide-2");
	});
	
	$(".food-img-3").mouseleave(function(){
		$(".slide3").addClass("slide-2");
		$(".slide-3").removeClass("slide-1");
	});
	
	$(".food-img-4").mouseenter(function(){
		$(".slide4").addClass("slide-1");
		$(".slide4").removeClass("slide-2");
	});
	
	$(".food-img-4").mouseleave(function(){
		$(".slide4").addClass("slide-2");
		$(".slide4").removeClass("slide-1");
	});
	
	$(".food-img-5").mouseenter(function(){
		$(".slide5").addClass("slide-1");
		$(".slide5").removeClass("slide-2");
	});
	
	$(".food-img-5").mouseleave(function(){
		$(".slide5").addClass("slide-2");
		$(".slide5").removeClass("slide-1");
	});
	
	$(".food-img-6").mouseenter(function(){
		$(".slide6").addClass("slide-1");
		$(".slide6").removeClass("slide-2");
	});
	
	$(".food-img-6").mouseleave(function(){
		$(".slide6").addClass("slide-2");
		$(".slide6").removeClass("slide-1");
	});
	
	$(".titlebox").delay(2500).fadeOut(500);
	
});

$(document).ready(function(){
	
	$(".start-box img").hide();
	
	$(".s-box-back-1").addClass("s-box-1");
	$(".s-box-black").addClass("s-box-2");
	$(".black-s").addClass("s-box");
	
	$(".start-box img").delay(2800).fadeIn(500);
	$(".start-box").delay(4000).fadeOut(800);
	
});
