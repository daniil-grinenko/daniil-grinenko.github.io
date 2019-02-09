// $(document).ready(function() {
//   $("a.aPhoto").click(function() {
//     var elementClick = $(this).attr("href")
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({
//       scrollTop: destination
//     }, 800);
//     return false;
//   });
// });
//   	$(document).ready(function() {
//   $("a.aCorel").click(function() {
//     var elementClick = $(this).attr("href")
//     var destination = $(elementClick).offset().top;
//     jQuery("html:not(:animated),body:not(:animated)").animate({
//       scrollTop: destination
//     }, 800);
//     return false;
//   });
// });
$(document).ready(function () {
  $("a[href*=#]").on("click", function (e) {
    var anchor = $(this);
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 2000);
    e.preventDefault();
    return false;
  });
});