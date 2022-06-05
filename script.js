let tabsBtn = document.querySelectorAll(".tabs-nav__btn");
let tabsItem = document.querySelectorAll(".tabs-item");

tabsBtn.forEach(function (element) {
    element.addEventListener("click", function (e) {
        const path = e.currentTarget.dataset.path;

        tabsBtn.forEach(function(btn){ btn.classList.remove("tabs-nav__btn--active")});
        e.currentTarget.classList.add("tabs-nav__btn--active");

        tabsItem.forEach(function(element){ element.classList.remove("tabs-item--active")});
        document.querySelector(`[data-target="${path}"]`).classList.add("tabs-item--active");
    });
});

new Accordion('.accordion-container');



const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },
});