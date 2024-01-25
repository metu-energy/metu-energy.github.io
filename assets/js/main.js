/* this only works for one button*/
/*
document.querySelector('.nav-link').addEventListener('click', function (e) {
  e.preventDefault();
  const headerHeight = document.getElementById('custom-header').offsetHeight; // Get the header's height
  const targetElement = document.querySelector(this.getAttribute('href'));
  const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({
    top: targetOffset - headerHeight,
    behavior: 'smooth' // You can remove this if you don't want smooth scrolling
  });
});
*/

/* this works out with multiple buttons*/
document.querySelectorAll('.nav-link').forEach(function(link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const headerHeight = document.getElementById('custom-header').offsetHeight; // Get the header's height
    const targetElement = document.querySelector(this.getAttribute('href'));
    const targetOffset = targetElement.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: targetOffset - headerHeight,
      behavior: 'smooth' // You can remove this if you don't want smooth scrolling
    });

  });
});

