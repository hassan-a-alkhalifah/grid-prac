// $(".area").each(function(index) {
//   setTimeout(function() {
//     $(".area").eq(i).addClass("is-visible");
//   }, 200 * i);
// });

// $('.area').each(function(i){
//   setTimeout(function(){
//     $('.area').eq(i).addClass('is-visible');
//   }, 200);
// });

function displayOnTimeout(classExtension) {
  if (classExtension < 11) {
    setTimeout(function(){
      $('.area' + classExtension).addClass('is-visible');
      displayOnTimeout(classExtension + 1);
    }, 500);
  }
}

$(document).ready(function() {
  // for(var i = 1; i < 3; i++) {
  //   setTimeout(function(){
  //     console.log('here');
  //     $('.area' + i).addClass('is-visible');
  //     console.log(i);
  //   }, 20 * i);
  // }
  displayOnTimeout(0);



});
