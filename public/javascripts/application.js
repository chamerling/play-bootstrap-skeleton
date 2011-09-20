jQuery(document).ready(function($){

// dropdown menu
$("body").bind("click", function (e) {
  $('a.menu').parent("li").removeClass("open");
});

$("a.menu").click(function (e) {
  var $li = $(this).parent("li").toggleClass('open');
  return false;
});


});
