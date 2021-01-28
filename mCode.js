// this is the code which will be injected into a given page...
(async function() {

    alert('Claim Started!');

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
    } while (i <= 9999999999999999);
    
})();