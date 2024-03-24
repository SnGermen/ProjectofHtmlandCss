(() => {
  let popUp = document.querySelector('.popUp')

  document.querySelector('.open__popUp').onclick = function () {
    popUp.style.display = 'block'
  }

  document.querySelector('.header__mobile-menu-buttun').onclick = function () {
    popUp.style.display = 'none'
  }
})()
