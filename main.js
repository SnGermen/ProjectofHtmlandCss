(() => {
  let popUp = document.querySelector('.popUp')

  document.querySelector('.button_primery').onclick = function () {
    popUp.style.display = 'block'
  }

  document.querySelector('.popUp__form-button').onclick = function () {
    popUp.style.display = 'none'
  }
})()
