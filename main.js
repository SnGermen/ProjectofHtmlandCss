(() => {
  let popUp = document.querySelector('.popUp')

  document.querySelector('.button_primary').onclick = function () {
    popUp.style.display = 'block'
  }

  document.querySelector('.popUp__button').onclick = function () {
    popUp.style.display = 'none'
  }
})()
