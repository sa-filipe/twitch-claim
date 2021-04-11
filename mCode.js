// Barra inferior com informações
(function() {

  var div = document.createElement('div');
  div.style.color = '#fafbfc';
  div.style.width = '100%';
  div.style.padding = '1px';
  div.style.fontWeight = 'bold';
  div.id = 'marquee';
  document.body.appendChild(div);

  document.getElementById('marquee').animate([
    {
      transform: 'translateX(-50%)' 
    },
    {
      transform: 'translateX(100%)'
    }],
    {
      duration: 60000,
      iterations: Infinity
    });

})();

// Loop de coleta
(async function() {

  var count = 0;
  var random = 1;
  var className = 'tw-button tw-button--success';
    
  function sleep(ms) {
      return new Promise(resolve => setTimeout(resolve, ms));
  }
    
  do {
    var element = document.getElementsByClassName(className); 

    // hide video

    if (element.length > 0) { 
      count++;
      document.querySelector('div:nth-child(1) > div > div > div > div.tw-full-height.tw-relative.tw-z-above > div > div > div > button').click();
      await sleep(1000);
    } else {
      if ( random <= 1) {
        random++;
        document.getElementById('marquee').textContent = 'Twitch Claim is running on background!⠀⠀🟣 TWITCH.TV 🟣⠀⠀https://github.com/sa-filipe/twitch-claim';
      } else {
        random-=1;
        document.getElementById('marquee').textContent = 'Twitch Claim is running on background!⠀⠀🟣 COUNTER '+count+' 🟣⠀⠀https://github.com/sa-filipe/twitch-claim';
      }
      await sleep(5000);
    }
  } while (count <= 9999999999);
    
})();
