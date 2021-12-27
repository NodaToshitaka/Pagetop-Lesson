$(function(){
  $('#back a').on('click' ,function(event){
    $('body, html').animate({
      scrollTop:0
    }, 800);
    event.preventDefault();
  });
});

$(function(){
  $('.menu-trigger').on('click',function(event){
    $(this).toggleClass('active');
    $('#sp-menu').fadeToggle();
    event.preventDefault();
  });
});

$("#tab-contents .tab").hide();
$(function(){
  $('#tab-menu a').mouseover(function(){
    $(this).addClass("active");
    $($(this).attr("href")).show();
  });
  $('#tab-menu a').mouseout(function(){
    $("#tab-contents .tab").hide();
    $("#tab-menu .active").removeClass("active");
  })
})