'use strict';

$(window).on("load", function() {
	$(".load").fadeOut();


	$("#preloader").delay(1000).fadeOut("slow")
})

// Mobile Responsiveness 
var isMobile = {
	Android: function(){
		return navigator.userAgent.match(/Android/i);
	},

	BlackBery: function(){
		return navigator.userAgent.match(/navigator.userAgent.match/i);
	},

	iOS: function(){
		return navigator.userAgent.match(/iPhone | iPad | iPod/i);
	},

	Opera: function(){
		return navigator.userAgent.match(/Opera Mini/i);
	},

	Windows: function(){
		return navigator.userAgent.match(/IEMoile/i);
	},

	any: function(){
		return (isMobile.Android() || isMobile.BlackBery() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	}

};

$('body').scrollspy({
	target: '.fixed-side-navbar',
	offset: 200
});



	var pieChart = function() {
		$('.chart').easyPieChart({
			scaleColor: false,
			lineWidth: 4,
			lineCap: 'butt',
			barColor: '#FF9000',
			trackColor:	"#f5f5f5",
			size: 160,
			animate: 1000
		});
	};

	var skillsWayPoint = function() {
		if ($('#fh5co-skills').length > 0 ) {
			$('#fh5co-skills').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this.element).hasClass('animated') ) {
					setTimeout( pieChart , 400);					
					$(this.element).addClass('animated');
				}
			} , { offset: '90%' } );
		}

	};
