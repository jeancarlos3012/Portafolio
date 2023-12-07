document.addEventListener('DOMContentLoaded', function () {
  const yearText = document.getElementById('yearText')
  yearText.textContent = `© ${new Date().getFullYear()}`

})