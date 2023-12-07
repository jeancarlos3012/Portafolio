document.addEventListener("DOMContentLoaded", function () {
  const changeMode = document.querySelector('#toggleModeBtn');
  const modeText = document.querySelector('#modeText');
  const body = document.querySelector('body')


  changeMode.addEventListener('click', function (e) {

    // Obtener el contenido actual eliminando espacios en blanco al principio y al final
    const currentMode = modeText.textContent.trim();
    // console.log(currentMode);

    // Cambiar entre dark_mode y light_mode
    if (currentMode === 'light_mode') {
      modeText.textContent = 'dark_mode';
      body.classList.remove('body--dark')
    } else {
      modeText.textContent = 'light_mode';
      body.classList.add('body--dark')
    }

    // window.alert('Cambio de modo realizado');
  });

})