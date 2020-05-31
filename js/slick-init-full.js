$(document).ready(function(){
	$('#slider-01').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});
    $('#slider-02').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});
    
    $('#slider-03').slick({
        autoplay:false,
        autoplaySpeed:3000,
		arrows:true,
		dots:true,
        pauseOnDotsHover:true,
		slidesToShow:1,
		speed:350,
		responsive:[
			{
				breakpoint: 768,
				settings: {
					arrows:false,
				}
			},
			{
				breakpoint: 640,
				settings: {
                    arrows:false,
				}
			}
		]
	});
});

