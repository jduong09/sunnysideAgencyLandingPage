document.addEventListener('DOMContentLoaded', () => {
  const menuList = document.getElementById('menu');
  const menuHamburger = document.getElementById('menu-hamburger');

  menuHamburger.addEventListener('click', () => {
    if (menuList.classList.contains('hide')) {
      menuList.classList.remove('hide');
    } else {
      menuList.classList.add('hide');
    }
  });
}); 