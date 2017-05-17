$(document).ready(function() {
  let $tarmo = $('#tarmo');
  let $lhurgo = $('#lhurgo');
  $('#go').click(function() {
    var saffiWidth = $('#saffi').width();
    var trackWidth = $(document).width() - saffiWidth;

    $('#go').removeClass('infinite');
    $('img').removeClass('rollIn');
    $('#saffi').addClass('infinite bounce');
    $('#saffi').animate({left: trackWidth}, 4000);

    $(document).keydown(function(key) {
      var positionOne = $($tarmo).position();
      var positionTwo = $($lhurgo).position();
      if (positionOne.left + $($lhurgo).width() >= trackWidth) {
        $(document).off('keydown');
        $('#container').append('<img id="dinner" src="imgs/winner.png"></img>');
        $('h1').text('Tarmo Wins!!!');
      }
      if (positionTwo.left + $tarmo).width() >= trackWidth) {
        $(document).off('keydown');
        $('#container').append('<img id="dinner" src="imgs/winner.png"></img>');
        ('h1').text('Lhurgo Wins!!!!');
      }
      switch(key.which) {
        //65 = a
        case 65:
          $tarmo.css('left', positionOne.left + + 'px');
          break;
          //76 = l
        case 76:
          $lhurgo.css('left', positionOne.left + + 'px');
          break;
      }
    })
  })

});
