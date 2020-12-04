$(function(){
      $('.toggleBtn').on('click', function(){
      $(this).children('i').toggleClass('hiddenDiv');
      $('.myMenu').toggleClass('hideMenu');
    });
  });