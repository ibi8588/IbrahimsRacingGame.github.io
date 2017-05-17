$(document).ready(function() {
  let $tarmo = $('#tarmo');
  let $lhurgo = $('lhurgo');
  $('#go').click(function() {
    var saffiWidth = $('#saffi').width();
    var trackWidth = $(document).width() - saffiWidth;

    $('#go').removeClass('rollIn');
  })

});
