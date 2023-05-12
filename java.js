let imagenumber = 0;

function updatetv(){
if (imagenumber === 0){
  document.getElementById("tvscreen").style.backgroundImage = "url(images/nipd%201.png)";
}
if (imagenumber === 1){
  console.log('1')
  document.getElementById("tvscreen").style.backgroundImage = "url(images/phishing%201.png)";

}
if (imagenumber === 2){
  console.log('2')
  document.getElementById("tvscreen").style.backgroundImage = "url(images/sorry%20project%201.png)";

}
if (imagenumber === 3){
  console.log('3')
  document.getElementById("tvscreen").style.backgroundImage = "url(images/phishing%201.png)";

}


}

function leftbutton(){
  var audio = new Audio('audio/click.mp3');
  audio.play();
  console.log('Left button has been clicked')
  imagenumber += 1 
  if (imagenumber > 3){
    imagenumber = 0
  }

  else if (imagenumber < 0){
   imagenumber = 0
  } 
  updatetv()
  }



  function rightbutton(){
    var audio = new Audio('audio/click.mp3');
    audio.play();
    console.log('Right button has been clicked');
    
    imagenumber += 1;
    
    if (imagenumber > 3){
      imagenumber = 0;
    }
    else if (imagenumber < 0){
      imagenumber = 0;
    }
    
    updatetv();
  }

setInterval(function() {
  imagenumber += 1 
  if (imagenumber > 3){
    imagenumber = 0
  }

  else if (imagenumber < 0){
   imagenumber = 0
  }      updatetv()

}, 5000);