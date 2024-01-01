$(document).ready(function(){
    $('.projects-carousel').slick({
      infinite: true,
      slidesToShow: 1, // Change the number of visible slides as needed
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 3000, // Set autoplay speed in milliseconds
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });