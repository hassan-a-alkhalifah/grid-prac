
$(document).ready(function(){
  $("li").click(function(){
    $(this).next("ul").toggle();
  })
  $(".svgDiv,.svgDivHidden").click(function(){
    $(".sideBarWrapper").toggle();
  })
  $(".lessons li").click(function(){
    $(".lessonContent div").hide();
    var clickValue = '.' + this.className;
    console.log(clickValue);
    $(clickValue).show();
    var progLength = parseInt($(this).siblings().length) + 1

    var progBarFill = 100/progLenth * i
    $(".progress").html(' <div class="progress-bar bg-info" role="progressbar" style="width: 25%" <span aria-valuenow="' + progBarFill + '" aria-valuemin="0" aria-valuemax="100"></div>')
  })

})
