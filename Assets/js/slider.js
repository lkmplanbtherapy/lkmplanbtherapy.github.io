$(document).ready(function(){

$('.sliderContainer').magnificPopup({
  type: 'image',
  delegate: 'img',
  gallery: {
	enabled:true
  },
  callbacks: {
    buildControls: function() {
      // re-appends controls inside the main container
      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
    },
    elementParse: function(qw) {
      qw.src = qw.el.attr('src');
    }
  }
});

$('.sliderContainer').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
});

});
