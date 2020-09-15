var $options = {
    dots: true,
	arrows: false,
	infinite: true,
	speed: 300,
	slidesToShow: 1,
	autoplay: true,
	autoplaySpeed: 10000,
}


function scrollTo(element){
	var scroll_el = $(element).attr('href');
	if ($(scroll_el).length != 0) {
		$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 50 }, 800);
	}
	return false;
}

$('.toggle').click(function(){

	if ($(this).hasClass('toggle--active')) {
		$(this).removeClass('toggle--active');

		$('.aside').removeClass('aside--active');
	}
	else {
		$(this).addClass('toggle--active');

		$('.aside').addClass('aside--active');
	}
});

$('.js-s-rules__button').click(function(){
	$('.s-rules__wrap').removeClass('s-rules__wrap--hidden');
});

$('.menu .menu__item').click(function(event){
	event.preventDefault()
	scrollTo(this);
	$('.aside').removeClass('aside--active');
	$('.toggle').removeClass('toggle--active');
});

$('body').on('click', '.js-s-features__link', function(event){
	event.preventDefault();
	scrollTo(this);
});


$(document).ready(function(){
	setTimeout(function(){
        $('.preloader').fadeOut();
   	}, 2000);
   	
	$('#slider-header').slick($options);
});


var DATA = function(){
  this.data = [];
  this.url = 'http://localhost:3000/json/data.json';
}

DATA.prototype.drawFeature = function(title){
	return  '<div class="titles">'+
			  '<div class="text-center">'+
			    '<h3 class="h3 titles__head">'+title+'</h3>'+
			  '</div>'+
			'</div>';
}


DATA.prototype.drawFeature = function(){
	var self = this,
		html = '';

	$.each(self.data.feature.items, function (index, item) {
		html += '<div class="col-12 col-md-12 col-lg-4">'+
				  '<div class="s-features__item">'+
				    '<div class="flex flex-column align-middle s-features__front">'+
				      '<div class="text-center">'+
				        '<h5 class="h5 text-uppercase">'+item.title+'</h5>'+
				      '</div>'+
				        '<div class="icon icon--cursor">'+
				          '<svg height="100%" width="100%" viewBox="-59 0 475 475.56972" xmlns="http://www.w3.org/2000/svg">'+
				            '<path d="m318.917969 187.566406h-.667969c-9.121094-.050781-17.933594 3.300782-24.71875 9.398438-5.492188-15.199219-19.449219-26.125-35.796875-26.125-10.019531.070312-19.589844 4.183594-26.53125 11.414062-6.382813-12.921875-19.1875-21.6875-33.910156-21.6875h-.710938c-7.890625-.121094-15.589843 2.445313-21.832031 7.273438v-92.121094c0-22.261719-17.332031-40.371094-38.414062-40.371094-21.058594 0-38.300782 18.097656-38.3125 40.34375l-.175782 182.773438-10.34375-12.5625c-9.070312-11.292969-22.421875-18.304688-36.867187-19.363282-14.148438-.96875-28.066407 3.953126-38.457031 13.609376l-9 7.457031c-2.902344 2.40625-3.730469 6.507812-1.992188 9.851562l87.503906 168.199219c16 30.738281 46.441406 49.914062 79.445313 49.914062h98.613281v-.085937c50 0 90.539062-43.386719 90.589844-96.660156.019531-23.835938-.070313-41.601563-.054688-56 .050782-38.523438.011719-52.738281-.085937-95.179688-.050781-22.210937-17.257813-40.078125-38.28125-40.078125zm22.25 135.203125c-.015625 14.402344-.039063 32.238281-.0625 56.074219-.042969 44.464844-33.609375 80.722656-74.824219 80.722656h-98.140625c-27.015625 0-52.019531-15.878906-65.25-41.300781l-84.527344-162.425781 4.171875-3.480469c.105469-.085937.207032-.1875.308594-.277344 7.175781-6.753906 16.832031-10.222656 26.664062-9.578125 10.050782.769532 19.324219 5.683594 25.609376 13.5625l24.488281 29.796875c2.140625 2.613281 5.695312 3.59375 8.875 2.457031 3.179687-1.136718 5.304687-4.152343 5.304687-7.527343l.144532-205.09375c.007812-13.429688 10.164062-24.355469 22.414062-24.355469s22.40625 10.9375 22.40625 24.375v123.660156c0 .429688-.019531.863282-.019531 1.300782 0 .1875.019531.378906.019531.5625v52.871093c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-54.464843c0-12.957032 9.898438-23.082032 21.832031-23.082032h.710938c12.257812 0 22.457031 10.683594 22.457031 24.121094v48.378906c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-37.957031c0-13.441406 9.710938-24.375 22.035156-24.375 12.253906 0 21.964844 10.929687 21.964844 24.375v35.808594c0 4.417969 3.582031 8 8 8s8-3.582031 8-8v-19.390625c0-13.441406 10.242188-23.960938 22.5-23.960938h.667969c12.226562 0 22.191406 10.699219 22.222656 24.097656.097656 42.410157.078125 56.609376.027344 95.105469zm0 0"></path>'+
				            '<path d="m72.609375 79.171875c4.417969 0 8-3.582031 8-8 .128906-30.527344 24.914063-55.203125 55.4375-55.203125 30.527344 0 55.308594 24.675781 55.4375 55.203125 0 4.417969 3.582031 8 8 8s8-3.582031 8-8c-.148437-39.351563-32.085937-71.171875-71.4375-71.171875-39.347656 0-71.289063 31.820312-71.4375 71.171875 0 4.417969 3.582031 8 8 8zm0 0"></path>'+
				          '</svg>'+
				        '</div>'+
				    '</div>'+
				    '<div class="s-features__back">'+item.description+'</div>'+
				  '</div>'+
				'</div>';
	});

	$('.js-s-features__wrap').html(html);
	$('.js-s-features__video').html('<iframe width="100%" height="100%" src="'+self.data.feature.video+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>');
}


DATA.prototype.drawPhoto = function(){
	var self = this,
		html = '';

	$.each(self.data.photo.items, function (index, item) {
		html += '<div class="s-photo__item">'+
					'<img src="./img/s-photo/'+item+'" alt="" class="s-photo__img">'+
				'</div>';
	});

	$('.js-s-photo__list').html(html);
}

DATA.prototype.drawNews = function(){
	var self = this,
		html = '';

	$.each(self.data.news.items, function (index, item) {
		html += '<div class="col-12 col-md-12 col-lg-4 s-news__item">'+
					'<article class="article">'+
						'<div class="article__video mb-15">'+
							'<iframe width="100%" height="100%" src="'+item.src+'" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen />'+
						'</div>'+
						'<a href="'+item.link+'" target="_blank" class="font font--md font--medium mb-10 article__title">'+item.title+'</a>'+
						'<p class="font font--sm font--primary mb-10 article__date">'+item.date+'</p>'+
						'<div class="article__content">'+
							'<p class="font">'+item.description+'</p>'+
						'</div>'+
					'</arcticle>'+
				'</div>';
	});

	$('.js-s-news__wrap').html(html);
}

DATA.prototype.drawRules = function(){
	var self = this,
		html = '';

	html += '<div class="text-center s-rules__title">'+
				'<h5 class="h5">'+self.data.info.title+'</h5>'+
				'<p class="font font--medium">'+self.data.info.subtitle+'</p>'+
			'</div>'+
			'<div class="s-rules__block">'+
				'<ul class="list">';
	$.each(self.data.info.items.rules, function (index, item) {
			html += '<li class="list__item">'+
						'<p class="font">'+item+'</p>'+
					'</li>';
	});
	html +=		'</ul>'+
			'</div>'+
			'<div class="text-center s-rules__title">'+
				'<h5 class="h5">'+self.data.info.items.prohibited.title+'</h5>'+
			'</div>'+
			'<div class="s-rules__block">'+
				'<ul class="list">';
	$.each(self.data.info.items.prohibited.items, function (index, item) {
			html += '<li class="list__item">'+
						'<p class="font">'+item+'</p>'+
					'</li>';
	});
	html +=		'</ul>'+
			'</div>'+
			'<div class="text-center s-rules__title">'+
				'<h5 class="h5">'+self.data.info.items.penalty.title+'</h5>'+
				'<p class="font mb-10">'+self.data.info.items.penalty.description+'</p>'+
				'<p class="font font--medium">'+self.data.info.items.penalty.subtitle+'</p>'+
			'</div>'+
			'<div class="text-center s-rules__title">'+
				'<h5 class="h5">'+self.data.info.items.penalty.slogan+'</h5>'+
			'</div>';

	$('.js-s-rules__wrap').html(html);
}

DATA.prototype.drawTestimonials = function(){
	var self = this,
		html = '';

	$.each(self.data.testimonials.items, function (index, item) {
		html += '<div class="s-testimonials__item">'+
					'<div class="s-testimonials__text">'+
						'<i class="fal fa-quote-left s-testimonials__icon"></i>'+
						'<div class="text-left">'+item.review+'</div>'+
					'</div>'+
					'<div class="s-testimonials__img">'+
						'<img src="./img/s-testimonials/'+item.img+'", alt="'+item.people+'" class="img" />'+
					'</div>'+
					'<div class="text-center">'+
						'<p class="font font--medium font--md text-uppercase>'+item.people+'</p>'+
						'<p class="font.text-uppercase">'+item.date+'</p>'+
					'</div>'+
				'</div>';
	});

	$('#slider-testimonials').html(html);
	$('#slider-testimonials').slick($options);
}

DATA.prototype.getData = function(){
	var self = this;

	$.ajax({
		async: false,
		url: self.url,
		dataType: 'json',
		success: function(json){
			self.data = json;

			self.drawFeature();
			self.drawPhoto();
			self.drawNews();
			self.drawRules();
			self.drawTestimonials();
		},
		error:function(xhr, status, error){
		   console.log(xhr.responseText, status, error);
		}      
	});
}

var data = new DATA();
data.getData();


