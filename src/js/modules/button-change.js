let infoButton = document.getElementById('collapsedButton');

infoButton.addEventListener('click', ()=> {
  if(infoButton.getAttribute('aria-expanded') === 'false') {
    infoButton.childNodes[1].innerText = 'Закрыть блок';
    infoButton.classList.add('section-info__btn--reversed');
  } else {
    infoButton.childNodes[1].innerText = 'Читать далее';
    infoButton.classList.remove('section-info__btn--reversed');
  }
})

