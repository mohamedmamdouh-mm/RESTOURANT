$(document).ready(function(){
   /*Start button*/
   var clicked = false;
   var $header = $('header');
   $header.find('.nav-btn').click(function(){
      var $this  = $(this);
      if(!clicked){
         clicked = true;
         $this.parent().toggleClass('active');
         setTimeout(function(){
            clicked = false;
         }, 2250)
      }
          
   });
   /*End button*/

$(document).on('click' , function(e){
  var clickover = $(e.target);
  if(!clickover.closest('header').length && $('nav').hasClass('active')){
   $('nav').removeClass('active');
  }
});



var $mainSection = $('.main-section');
$(window).scroll(function(){
   if($(window).scrollTop() >= $mainSection.height() - 100){
      $header.addClass('sticky');
   }else{
      $header.removeClass('sticky');
   }
});


function menuSlider(){
   var $sliderContainer = $('.menu-slider');
   var $slider = $sliderContainer.find('.slider');
   var $sliderBanner = $sliderContainer.find('.slider-banner');
   var $sliderItems = $sliderBanner.find('.slider-item');
   var itemsLength = $sliderItems.length;
   var $nextBtn = $sliderContainer.find('.arrow.next');
   var $prevBtn = $sliderContainer.find('.arrow.prev');
   var slideToShow = 3;



   var activeSlides = slideToShow;
   $sliderItems.outerWidth(parseInt($slider.width() / slideToShow));
  var itemWidth;


  var itemsWith;

  function fixWidth(){
   itemWidth = $('.menu-slider .slider-item').outerWidth();
   itemsWith = itemWidth * itemsLength;
   $sliderBanner.width(itemsWith);
  } fixWidth();


  function leftCalc(){
   return itemWidth * itemMove;
}

function responsiveSlide(){
   if($(window).width() <= 991){
   
      slideToShow = 2;
     }else
     {
      slideToShow = 3;
     }
}responsiveSlide();



  $(window).resize(function(){
   responsiveSlide();
   $sliderItems.outerWidth(parseInt($slider.width() / slidesToShow));

  
   fixWidth();

   leftCalc();



  });

  
  var left = 0;
  var itemMove = 0;
  
  var clicked = false;

  function checkStatus(){
     if(activeSlides == itemsLength){
      $nextBtn.addClass('disabled');
     }else
     {
      $nextBtn.removeClass('disabled');
     }


     if(activeSlides == slideToShow){
      $prevBtn.addClass('disabled');
     }else
     {
      $prevBtn.removeClass('disabled');
     }

  }checkStatus();





  $nextBtn.click(function(){
     if(!clicked){

      if(activeSlides != itemsLength){
         clicked = true;
         itemMove;
         left = -leftCalc();
       $sliderBanner.css('left', left);
       activeSlides++;
       setTimeout(function(){
         clicked = false;
       } , 400); 
       checkStatus();   
      }
     }

    
 });

 $prevBtn.click(function(){
    if(!clicked){

    
   if(activeSlides > 3){
      clicked = true;
      itemMove--;
      left = leftCalc();
      left += itemWidth;
      $sliderBanner.css('left', left);
      activeSlides--; 
      setTimeout(function(){
      clicked = false;
    } , 400);  
    checkStatus();   
   }
}
});



}menuSlider();
});