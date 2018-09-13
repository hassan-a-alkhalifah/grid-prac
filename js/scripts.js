
$(document).ready(function(){
  $("li").click(function(){
    $(this).next("ul").toggle();
  })
  $(".svgDiv,.svgDivHidden").click(function(){
    $(".sideBarWrapper").toggle();
  })
})
