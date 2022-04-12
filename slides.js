$(document).ready(function(){
    $('.slides-show').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow:`<button type='button' class='slick-prev pull-left'><ion-icon name="arrow-back-outline"></ion-icon> </i></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'><ion-icon name="arrow-forward-outline"></ion-icon> </i></button>`
    });
  });


  $(document).ready(function(){
    $('.avatar-show').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        prevArrow:`<button type='button' class='slick-prev pull-left'></button>`,
        nextArrow:`<button type='button' class='slick-next pull-right'></button>`
    });
  });