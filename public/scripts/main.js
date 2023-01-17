const headerToggle = document.querySelector(".header-toggle");
const menuHeader = document.querySelector(".header-menu");
const expandClass = "is-expand";
headerToggle.addEventListener("click", function () {
  menuHeader.classList.add(expandClass);
});
window.addEventListener("click", function (e) {
  if (!menuHeader.contains(e.target) && !e.target.matches(".header-toggle")) {
    menuHeader.classList.remove(expandClass);
  }
  ;
});
// slick slider
$(document).ready(function () {
  $('.quote-container').slick({
    prevArrow: '<div class="slick-prev"><i class="fal fa-angle-left" aria-hidden="true"></i></div>',
    nextArrow: '<div class="slick-next"><i class="fal fa-angle-right" aria-hidden="true"></i></div>',
    responsive: [{
      breakpoint: 767,
      settings: {
        arrows: false
      }
    }]
  });
});