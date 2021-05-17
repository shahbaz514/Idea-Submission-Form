$(document).ready(function() {
    console.log('just for test');
    
    $('#submit').bind("click",function() 
    { 
        var docVal = $('#file-1').val(); 
        if(docVal=='') 
        { 
            alert("empty input file"); 
            return false; 
        } 


    }); 
});

$(document).ready(function () {
	$('.png_input input[type="file"]').attr('accept','image/x-png,image/jpeg');
$('.doc_input input[type="file"]').attr('accept','application/msword, application/pdf');
  $('.application-form-select').niceSelect();

  //Application form file inputs logic
  if ($('.application-form-file-input').length) {
    $('.application-form-file-input').each(function () {
      let $label = $(this).find('.application-form-file-input__label');
      let $input = $(this).find('.application-form-file-input__input');
      let placeholder = $(this).data('placeholder');

      $input.on('change', function (e) {
        if (e.target.files && e.target.files.length) {
          let filename = e.target.files[0].name;
          $label.text(filename);
        } else {
          $label.text(placeholder);
        }
      });
    });
  }

  // Texareas maxlength display
  if ($('.application-form-textarea').length) {
    $('.application-form-textarea').each(function () {
      let $input = $(this).find('.application-form-textarea__input');
      if ($input[0].hasAttribute('maxlength')) {
        let $symbols_count = $(this).find(
          '.application-form-textarea__symbols-count'
        );
        let max_symbols_count = $input.attr('maxlength');
        $symbols_count.text(max_symbols_count + '/0');
        $input.on('input', function (e) {
          $symbols_count.text(max_symbols_count + '/' + this.value.length);
        });
      }
    });
  }

  //application form logic
  if ($('.p-app-form__application-form').length) {
    $('input[name="have_idea"]').on('change', function () {
      let $idea_desc = $('.js-idea-desc');
      if (this.value === 'Yes') {
        $idea_desc.removeClass('is-hidden');
        $idea_desc.find('textarea').attr('required', true);
      } else {
        $idea_desc.addClass('is-hidden');
        $idea_desc.find('textarea').attr('required', false);
      }
    });

    $('.p-app-form__application-form').on('submit', function (e) {
      e.preventDefault();
      const data = new FormData(this);

      $.ajax({
        type: 'POST',
        url: ajaxUrl,
        processData: false,
        contentType: false,
        data: data,
        success: function (response) {
			console.log(response);
		   if (response === '1') {
            $('.app-form-success').addClass('app-form-success__open');
			$('body').css('overflow', 'hidden');
           }
        },
      });
    });
	
    function closeAppFormPopup() {
      $('.app-form-success').removeClass('app-form-success__open');
      $('body').css('overflow', '');
      location.reload();
    }
    $('.app-form-success__close, .app-form-success__overlay').on(
      'click',
      closeAppFormPopup
    );
  }
});

$('.slick-vertical').slick({
  vertical: true,
  verticalSwiping: true,
  slidesToShow: 1,
  slidesToScroll: 1,

  speed: 700,
  autoplay: false,
  dots: true,

  prevArrow: $('.btn-next'),
  nextArrow: $('.btn-prev'),

  responsive: [
    {
      breakpoint: 500,
      settings: {
        verticalSwiping: false
      }
    }
  ]
});

$('.js-block-info').slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    arrows: true,
    dots: true,
    prevArrow: $('.sponsors-slider-arrow.prev'),
    nextArrow: $('.sponsors-slider-arrow.next'),
	
	responsive: [
	 {
      breakpoint: 769,
      settings: {
       infinite: true,
    	slidesToShow: 6,
    	slidesToScroll: 1,
		arrows: true,
		dots: true,
      },
    },
	{
      breakpoint: 678,
      settings: {
       infinite: true,
    	slidesToShow: 5,
    	slidesToScroll: 1,
		arrows: true,
		dots: true,
      },
    },
	{
      breakpoint: 598,
      settings: {
       infinite: true,
    	slidesToShow: 4,
    	slidesToScroll: 1,
		arrows: true,
		dots: true,
      },
    },
    {
      breakpoint: 501,
      settings: {
       infinite: true,
    	slidesToShow: 2,
    	slidesToScroll: 1,
		arrows: true,
		dots: true,
      },
    },
	{
      breakpoint: 421,
      settings: {
        infinite: true,
    	slidesToShow: 1,
    	slidesToScroll: 1,
		arrows: true,
		dots: true,
      },
    },		
  ]
	
 })

//Adaptive height for vertical slider
if ( window.innerWidth <= 768 ) {
  var maxHeight = -1;
  $('.slick-vertical .slick-slide').each(function() {
    if ($(this).height() > maxHeight) {
      maxHeight = $(this).height();
    }
  });
  $('.slick-vertical .slick-slide').each(function() {
    if ($(this).height() < maxHeight) {
      $(this).css('margin', Math.ceil((maxHeight-$(this).height())/2) + 'px 0');
    }
  });
}

/* sponsors */
if ( window.innerWidth <= 500 ) {
  $('.js-block-info').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 2,
    arrows: true,
    dots: true,
    prevArrow: $('.sponsors-slider-arrow.prev'),
    nextArrow: $('.sponsors-slider-arrow.next')
  })
}

/*This file was exported by "Export WP Page to Static HTML" plugin which created by ReCorp (https://myrecorp.com) */