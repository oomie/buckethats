var toomie = document.getElementById("toomie");
var eva = document.getElementById("eva");
var sakura = document.getElementById("sakura");
var daisy = document.getElementById("daisy");
var rainbow = document.getElementById("rainbow");


if (toomie) {
  toomie.addEventListener("mouseenter" , function(){
    toomie.src="images/toomiecon2.png";
  });
    toomie.addEventListener("mouseleave" , function(){
      toomie.src="images/toomiecon.png";
    });

}

if (eva) {
  eva.addEventListener("mouseenter" , function(){
    eva.src="images/evacon2.png";
  });
    eva.addEventListener("mouseleave" , function(){
      eva.src="images/evacon.png";
    });

}

if (sakura) {
  sakura.addEventListener("mouseenter" , function(){
    sakura.src="images/sakuraB.JPG";
  });
    sakura.addEventListener("mouseleave" , function(){
      sakura.src="images/sakuraW.JPG";
    });

}

if (daisy) {
  daisy.addEventListener("mouseenter" , function(){
    daisy.src="images/daisyW.JPG";
  });
    daisy.addEventListener("mouseleave" , function(){
      daisy.src="images/daisyB.JPG";
    });

}


if (rainbow) {
  rainbow.addEventListener("mouseenter" , function(){
    rainbow.src="images/rainbowB.jpg";
  });
    rainbow.addEventListener("mouseleave" , function(){
      rainbow.src="images/rainbow.JPG";
    });

}
