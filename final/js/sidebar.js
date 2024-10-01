document.getElementById('menuIcon').addEventListener('click', function() {
  var sideMenu = document.getElementById('sideMenu');
  var overlay = document.getElementById('overlay');
  sideMenu.classList.toggle('open'); 
  overlay.classList.toggle('active'); 
});

document.getElementById('overlay').addEventListener('click', function() {
  var sideMenu = document.getElementById('sideMenu');
  var overlay = document.getElementById('overlay');
  sideMenu.classList.remove('open'); 
  overlay.classList.remove('active'); 
});

document.addEventListener('DOMContentLoaded', function () {
  const dropdownIcon = document.querySelector('.dropdown-icon');
  const dropdown = document.querySelector('.dropdown');


dropdownIcon.addEventListener('click', function (event) {
    event.stopPropagation(); 
    dropdown.classList.toggle('open');
  });
});
