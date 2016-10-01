$(document).ready(function(){
  $.getJSON('https://api.twitch.tv/kraken/channels/charliekappa?client_id=fkyh8yy1cvieny2uhhd2msmizfc5wed&callback=?', function(json) {
    console.log(json);

  });

});
