$(document).ready(function(){
//    icon in header
    $("i.icon").click(function(){
        $(".nav-list").slideToggle(1000);
    });
//    end icon in header
    
     $(window).scroll(function(){
         
         var sc=$(window).scrollTop();
         if( sc  < 10000){
              $('.timer').countTo();
             $(window).off('scroll');
         }
     });
    
    
//    portofolio

    $(".buttons button").click(function(){
        $(this).addClass('active-btn').siblings().removeClass("active-btn");
        var cssfilter=$(this).attr('id');
        if(cssfilter === 'all'){
            $(".port-imges > div").fadeIn();
        }else{
             $(".port-imges > div").fadeOut();
            $(".port-imges").contents().filter('.'+cssfilter).fadeIn();
        }
    
    });
//    section our team
//  $(".owl-carousel").owlCarousel();
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3 
        }
    }
});
    
     $('#sli').owlCarousel({
      animateOut: 'slideOutDown',
    animateIn: 'flipInX',
         animateOut: 'fadeOut',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450
});
    
//    choose section
    $(".choose .video a i").hover(function(){
          $(".choose .video .offset").text("click to show video");
    });
  
    $(".c-panel li").click(function(){
        var p = $(this).data("role");
        $(this).addClass("active-btn").siblings().removeClass("active-btn");
         $(".content > div").hide(); 
        $(".content").contents().filter("#"+p).fadeIn(1000);
    });
    
    
//    popup video in choose section
     $('.pop').magnificPopup({type:'iframe'});

//    scroll top
$(window).scroll(function(){
    var sro=$(this).scrollTop();
    if(sro > 800){
        $(".scrolltop").fadeIn();
    }
    else{
        $(".scrolltop").fadeOut();
    }
});
     $(".scrolltop").click(function(){
         $("html , body").animate({
             scrollTop :0
         },1500);   
     });
    
    
//    smoth scroll

   $("header nav .nav-list .list a").click(function(){
       $("html , body").animate({
           scrollTop : $('#'+$(this).data('value')).offset().top
       })
   });
    
    
    
    
    
    
    
    
    });