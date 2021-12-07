$(function(){
   $('#nav-btn').on('click',function(){
    $(this).toggleClass('-active');
    $('#nav').toggleClass('-active');
   });
});

$(function(){
   new WOW().init();
});