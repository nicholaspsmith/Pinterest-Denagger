function init() {
  removeNags();
  setInterval(removeNags,2000);
  window.onhashchange = change;

  //and read location.hash in the change function instead
  function change(){
    var hash = location.hash;
    removeNags();
  }
}

function removeNags() {
  console.log('removeNags');
  var nags = document.getElementsByClassName('Nags');
  var modals = document.getElementsByClassName('Modal');
  // Re-enable scrolling
  document.getElementsByTagName('body')[0].class = "";
  if (nags.length > 0|| modals.length > 0) {
    // alert user
    var message = document.createElement("div");
    message.className = 'denagger';
    message.style.position = 'fixed';
    message.style.bottom = "10px";
    message.style.left = "10px";
    message.style.background = 'rgba(26, 82, 190, 0.65)';
    message.style.padding = '12px 18px';
    message.style.borderRadius = '20px';
    message.style.color = '#fff';
    message.style.fontFamily = 'sans-serif';
    message.style.fontSize = '16px';
    message.style.zIndex = '9999';
    message.innerHTML = 'Pinterest has been de-nagged';

    document.body.appendChild(message);

    setTimeout(function(){
      message.parentNode.removeChild(message);
    },4000);
  }
  for (var n=0;n<nags.length;n++) {
    nags[n].remove();
  }
  for (var n=0;n<modals.length;n++) {
    modals[n].remove();
  }

}

setTimeout(init, 300);
