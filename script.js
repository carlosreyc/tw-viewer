$(document).ready(function(){
  $.getJSON('https://api.twitch.tv/kraken/channels/charliekappa?client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json) {
    console.log(json);
    console.log(json.display_name);
    $("div.name1").html(json.display_name);
    $("a.link1").attr('href', json.url);
    $("div.status1").html(json.status);
  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=riotgames&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    console.log(json);

  });
  $.getJSON('https://api.twitch.tv/kraken/streams?channel=charliekappa&client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json){
    console.log(json);

  });

});
