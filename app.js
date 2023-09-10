window.addEventListener ('scroll', function() {
  var navbar = document.querySelector('.navbar');
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  
  if (scrolled > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});











