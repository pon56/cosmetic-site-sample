const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 'auto',
    spaceBetween: 40,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
  });