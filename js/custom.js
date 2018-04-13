/*Show and hide menu */

$(document).ready(function(){
 
'use strict';
$(window).scroll(function(){
'use strict';

if ($(window).scrollTop()>80) {
	$('.navbar').css({
     

	});

	
}
else{

  $('.navbar').css({
      

	});

  $('.navbar-default').css({
      
       


	});

  $('.navbar-brand img').css({
   
  
   
  });

  $('.navbar-nav > li > a').css({
    
   

  });


}
});

});


/*add smooth scrolling */
$(document).ready(function(){
 'use strict';
 $('.nav-item').click(function(){

  if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;



  }
}


 });
});

/* active menu item on click */
$(document).ready(function(){
  'use strict';

  $('.navbar-nav li a').click(function(){
    'use strict';
    $('.navbar-nav li a').parent().removeClass("active");

    $(this).parent().addClass("active");
  });


});

/* highlight menu item on scroll */
$(document).ready(function(){
 'use strict';
 $(window).scroll(function(){
  'use strict';
  $("section").each(function(){
   'use strict';
    var bb=$(this).attr("id");
    var hrg=$(this).outerHeight();
    var grttop=$(this).offset().top-70;
    if ($(window).scrollTop()>grttop && $(window).scrollTop()<grttop+height) {
    	$("navbar-nav li a[href='#"+bb +"']").parent().addClass("active");
    }
    else{
    	$("navbar-nav li a[href='#"+bb +"']").parent().removeClass("active");
    }
  });
 });
});


/* Silders */

/*
$(document).ready(function(){
$('.carousel[data-type="multi"] .item').each(function(){
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(':first');
  }
  next.children(':first-child').clone().appendTo($(this));
  
  for (var i=0;i<4;i++) {
    next=next.next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    
    next.children(':first-child').clone().appendTo($(this));
  }
});
});

*/