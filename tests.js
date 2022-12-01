let isChanging = false;
var myInterval;
function bg() {
  isChanging = !isChanging;
  if (isChanging) {
    clearInterval(myInterval);
  } else {
    myInterval = setInterval(changecolor, 100); 
  }
}

function changecolor() {
    var rcolor = Math.round(Math.random() * 10);
    var gcolor = Math.round(Math.random() * 10);
    var bcolor = Math.round(Math.random() * 10);

    const body = document.body;
    bodygi.style.backgroundColor = `#${rcolor}${gcolor}${bcolor}`;
}
