
const menuButton = document.querySelector('.nav-button');

menuButton.addEventListener('click', function () {
  document.body.classList.toggle('mob-menu-open');
  menuButton.classList.toggle('open');
});
