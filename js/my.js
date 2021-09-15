
const SUPER_KONTR = 50;
const KONTR = 65;
const BYUDJET = 80;


var elForm = document.querySelector('.form-js');

elForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var ball = Number(document.querySelector('.input-ball-js').value.trim());

  var elCheck = document.querySelector('.check-js');

  var elOutput = document.querySelector('.result-js');

  var message = '';

  var backgroundColor = 'white';

  if (elCheck.checked) {
    message = "Biz korrupsiyaga qarshimiz";
    backgroundColor = 'red';
  }

  else if (!isNaN(ball) && ball > 0 && ball <= 200) {
    if (ball < SUPER_KONTR) {
      message = "Yiqildingiz";
      backgroundColor = 'gray';
    }
    else if (ball < KONTR) {
      message = "Super kontraktga pul yig`ing";
      backgroundColor = 'yellow';
    }
    else if (ball < BYUDJET) {
      message = "Kontraktni to`lang va o`qing";
      backgroundColor = 'blue';
    }
    else {
      message = "Teppa tekingga o`qiysiz";
      backgroundColor = 'green';
    }
  }
  else {
    message = "1 dan 200 gacha bo`lgan raqam kiritishingiz mumkin";
    backgroundColor = 'white';
  }
  elOutput.textContent = message;
  elOutput.style.backgroundColor = backgroundColor;
})