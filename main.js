(() => {
  let popUp = document.querySelector('.popUp')

  document.querySelector('.button--primary').onclick = function () {
    popUp.style.display = 'block'
  }

  document.querySelector('.popUp__form-button').onclick = function () {
    popUp.style.display = 'none'
  }
})()
