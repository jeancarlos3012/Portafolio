document.addEventListener('DOMContentLoaded', function () {
  const elementsToTranslate = document.querySelectorAll('[data-translate-en]');

  // console.log(elementsToTranslate);

  const changeLanguageBtn = document.getElementById('changeLanguageBtn')

  let lenguage = 'es'

  changeLanguageBtn.addEventListener('click', function () {
    if (lenguage === 'es') {

      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-en');
        phrase.textContent = translation;

      }
      document.getElementById('downloadCV').href = './assets/cv/cv_en.png';
      lenguage = 'en'

    } else {
      for (const phrase of elementsToTranslate) {
        const translation = phrase.getAttribute('data-translate-es');
        phrase.textContent = translation;

      }
      document.getElementById('downloadCV').href = './assets/cv/cv_es.png';
      lenguage = 'es'
    }

  })
})