console.log('Slider');
var slider = tns({
    container: '.simulation-slider .inner-container',
    slideBy: 'page',
    autoplay: false,
    items: 1,
    responsive: {
      640: {
        items: 2
      },
      900: {
        items: 3
      }
    }
});
