const burgerIcon = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.mob-navbar');

burgerIcon.addEventListener('click', () => {
  navList.classList.toggle('change');
});
burgerIcon.addEventListener('click', () => {
  burgerIcon.classList.toggle('burger-menu-x');
})


