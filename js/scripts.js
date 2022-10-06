
const menuButton = document.querySelector('.nav-button button');

menuButton.addEventListener('click', function () {
  document.body.classList.toggle('mob-menu-open');
  menuButton.classList.toggle('open');
});
