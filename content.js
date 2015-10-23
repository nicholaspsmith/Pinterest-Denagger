setTimeout(function(){
  // remove nags
  var nags = document.getElementsByClassName('Nags')[0];
  nags.remove();
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
  message.innerHTML = 'Pinterest has been de-nagged';

  document.body.appendChild(message);

  setTimeout(function(){
    message.parentNode.removeChild(message);
  },4000);
}, 100);
