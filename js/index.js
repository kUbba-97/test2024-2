let hamburger=document.querySelector(".hamburger");
hamburger.onclick = function () {
let navBar=document.querySelector(".nav-bar1");
navBar.classList.toggle("active");
}

// swiper js for products 

let swiperCard = new Swiper('.card--content', {

    loop: true,
    spaceBetween:32,
    grabCursor:true,
    pagination: {
      el: '.swiper-pagination',
      clickable:true,
      dynamicBullets:true,

    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  breakPoints:{
600:{
    slidesPerView:2,
},
968:{
    slidesPerView:3,

},
  },
  });
 