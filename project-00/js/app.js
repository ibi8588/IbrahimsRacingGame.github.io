console.log("test")
window.onload = function() {
  $('#saffi').animate({
    left: '+=1000px'
  });
}
$(document).ready(function() {
  let $tarmo = $('#tarmo');
  let $lhurgo = $('#lhurgo');
  let maxWidth = $(window).width();
  function winner() {
    if($tarmo.width ==  100) {
      $('#container').append('<img id="dinner" src="imgs/winner.jpg"></img>');
    }
    if($lhurgo.css('style') == 'left: 1000px') {
      $('#container').append('<img id="dinner" src="imgs/winner.jpg"></img>');
    }
  }
  $(document).keypress(function(e) {
    if (e.key === "a") {
      $('#tarmo').animate({
        left: '+=25px'
      });
    } else if (e.key === "l") {
      $('#lhurgo').animate({
        left: '+=25px'
      });
    } else if (e.key === "h") {
      $('#saffi').animate({
        left: '+=25px'
      });
    }
  });
});
