
const SUPER_KONTR = 50;
const KONTR = 65;
const BYUDJET = 80;


var elForm = document.querySelector('.form-js');

elForm.addEventListener('submit', function (e) {
  e.preventDefault();

  var ball = parseInt(document.querySelector('.input-ball-js').value.trim());

  var elCheck = document.querySelector('.check-js');

  var elOutput = document.querySelector('.result-js');

  if (elCheck.checked) {
    elOutput.textContent = "Biz korrupsiyaga qarshimiz";
  }
  else if (ball < SUPER_KONTR) {
    elOutput.textContent = "Yiqildingiz";
  }
  else if (ball < KONTR) {
    elOutput.textContent = "Super kontraktga pul yig`ing";
  }
  else if (ball < BYUDJET) {
    elOutput.textContent = "Kontraktni to`lang va o`qing";
  }
  else if (ball >= BYUDJET) {
    elOutput.textContent = "Teppa tekingga o`qiysiz";
  }
  else {
    elOutput.textContent = "Bo`ladigan ballni kiriting";
  }


})