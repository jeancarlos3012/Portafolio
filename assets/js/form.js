document.addEventListener('DOMContentLoaded', function () {
  const dialog = document.getElementById("dialog");

  const showButton = document.getElementById('contactMeBtn');

  const closeButton = document.getElementById("close_button");

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", () => {
    dialog.showModal();
  });

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });




  //form -emailJS

  const btnSend = document.getElementById('btn-send');
  const form = document.getElementById('form')

  btnSend.addEventListener('click', function (e) {
    e.preventDefault();


    const serviceID = 'service_7hh0jlg';
    const templateID = 'template_jtsq46o';

    emailjs.sendForm(serviceID, templateID, form)
      .then(() => {
        window.alert('Sent!');
        form.reset();
        dialog.close();

      })
      .catch((error) => {
        alert(JSON.stringify(error));
      })



  })
})