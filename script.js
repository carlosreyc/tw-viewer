$(document).ready(function(){

  $.getJSON('https://api.twitch.tv/kraken/streams?channel=charliekappa&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img1").attr('src','online.png');
      $("#status-1").html(json.streams[0].channel.status);
      $("#viewers-1").html('Viewers:'+json.streams[0].viewers);
      $("#status-1").addClass('on'); } else {
        $("#status-1").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=thevsnz&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img2").attr('src','online.png');
      $("#status-2").html(json.streams[0].channel.status);
      $("#viewers-2").html('Viewers:'+json.streams[0].viewers);
      $("#status-2").addClass('on'); } else {
        $("#status-2").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=summit1g&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img3").attr('src','online.png');
      $("#status-3").html(json.streams[0].channel.status);
      $("#viewers-3").html('Viewers:'+json.streams[0].viewers);
      $("#status-3").addClass('on'); } else {
        $("#status-3").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=shackyhd&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img4").attr('src','online.png');
      $("#status-4").html(json.streams[0].channel.status);
      $("#viewers-4").html('Viewers:'+json.streams[0].viewers);
      $("#status-4").addClass('on'); } else {
        $("#status-4").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=freecodecamp&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img5").attr('src','online.png');
      $("#status-5").html(json.streams[0].channel.status);
      $("#viewers-5").html('Viewers:'+json.streams[0].viewers);
      $("#status-5").addClass('on'); } else {
        $("#status-5").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=carcinogensda&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img6").attr('src','online.png');
      $("#status-6").html(json.streams[0].channel.status);
      $("#viewers-6").html('Viewers:'+json.streams[0].viewers);
      $("#status-6").addClass('on'); } else {
        $("#status-6").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=mopgarden&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img7").attr('src','online.png');
      $("#status-7").html(json.streams[0].channel.status);
      $("#viewers-7").html('Viewers:'+json.streams[0].viewers);
      $("#status-7").addClass('on'); } else {
        $("#status-7").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=nadeshot&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img8").attr('src','online.png');
      $("#status-8").html(json.streams[0].channel.status);
      $("#viewers-8").html('Viewers:'+json.streams[0].viewers);
      $("#status-8").addClass('on'); } else {
        $("#status-8").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=admiral_bahroo&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img9").attr('src','online.png');
      $("#status-9").html(json.streams[0].channel.status);
      $("#viewers-9").html('Viewers:'+json.streams[0].viewers);
      $("#status-9").addClass('on'); } else {
        $("#status-9").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=voyboy&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img10").attr('src','online.png');
      $("#status-10").html(json.streams[0].channel.status);
      $("#viewers-10").html('Viewers:'+json.streams[0].viewers);
      $("#status-10").addClass('on'); } else {
        $("#status-10").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=liaph&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img11").attr('src','online.png');
      $("#status-11").html(json.streams[0].channel.status);
      $("#viewers-11").html('Viewers:'+json.streams[0].viewers);
      $("#status-11").addClass('on'); } else {
        $("#status-11").addClass('off');
      }
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=elurzua&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    if(json.streams.length == 1) {
      $("#img12").attr('src','online.png');
      $("#status-12").html(json.streams[0].channel.status);
      $("#viewers-12").html('Viewers:'+json.streams[0].viewers);

      $("#status-12").addClass('on');
  } else {
    $("#status-12").addClass('off');
  }
  });



  $("div.online").click(function(){
    $(".off").parent().hide();
  });

  $("div.offline").click(function(){
    $(".on").parent().hide();

  });
  $("div.all").click(function(){
    $(".on").parent().show();
    $(".off").parent().show();

  });

(function(){ // Menu FUNCIONANDO!!
  var clicked_btn = '';
  $('.selector').click(function(){
    clicked_btn = $(this);
    clicked_btn.css('width','45px');
    $('.selector').not(this).css('width','20px');
  });
  $('.selector').hover(function(){
    $(this).css('width','45px');
  }, function(){
    $('.selector').not(clicked_btn).css('width','20px');
  });
})();
});
