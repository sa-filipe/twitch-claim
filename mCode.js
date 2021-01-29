// Barra inferior com informações
(function() {

    var div = document.createElement('div');
    div.style.color = '#fafbfc';
    div.style.width = '100%';
    div.style.padding = '1px';
    div.style.fontWeight = 'bold';
    div.style.textAlign = 'center';
    div.textContent = '🟣 TWITCH.TV 🟣⠀⠀"Twitch Claim Extension" is running on background!⠀⠀Check for updates⠀⠀https://github.com/sa-filipe/twitch-claim';
    document.body.appendChild(div);
    
})();

// Loop da coleta
(async function() {

    var i = 0;
    var className = 'tw-button tw-button--success'; 
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    do {
        var element = document.getElementsByClassName(className); 
        if (element.length > 0) { 
            document.querySelector("div:nth-child(1) > div > div > div > div.tw-full-height.tw-relative.tw-z-above > div > div > div > button").click();
            i++;
            console.log('Claim!')
            await sleep(1000);
        } else {
            await sleep(1000);
        }
    } while (i <= 9999999999);
    
})();
