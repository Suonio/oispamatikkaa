// Wait till the browser is ready to render the game (avoids glitches)
window.requestAnimationFrame(function () {
  new GameManager(4, KeyboardInputManager, HTMLActuator, LocalScoreManager);
});


    var imageList = [
        "/img/plus.png",
        "/img/miinus.png",
        "/img/kerto.png",
        "/img/jako.png",
        "/img/sulkeet.png",
        "/img/potenssi.png",
        "/img/muuttuja.png",
        "/img/yhtalo.png",
        "/img/kosini.png",
        "/img/integraali.png",
        "/img/doge.png",
	"/img/katko.png"

    ];
    for(var i = 0; i < imageList.length; i++ ) 
    {
        var imageObject = new Image();
        imageObject.src = imageList[i];
    }
