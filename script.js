function playSound(name) {
  const henryAudio = document.getElementById('henrySound');
  const btsAudio = document.getElementById('btsSound');

  if (name === 'henry') {
    henryAudio.play();
    showPopup('not gay');
  } else if (name === 'bts') {
    btsAudio.play();
    showPopup('gay');
  }
}

function showPopup(message) {
  const popup = document.getElementById('popup');
  const popupText = document.getElementById('popupText');

  popupText.textContent = message;


  popup.style.display = 'block';
  popup.style.animation = 'none';
  void popup.offsetWidth; 
  popup.style.animation = 'fadeIn 0.4s ease forwards';

  setTimeout(() => {
    popup.style.display = 'none';
  }, 2000);
}
