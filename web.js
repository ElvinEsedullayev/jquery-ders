$(function(){
	$('.menu').on({
		mouseover : function(){
			$(this).css('color','yellow');
		},
		mouseleave : function(){
			$(this).css('color','antiquewhite');
		}
	});


	animasyon();

	function animasyon(){

		var sayi =1;

		setInterval(function(){

			var a = 'spor' + sayi + '.jpg';

			$('#h-goruntu').fadeOut(3000,function(){
				$(this).queue(function(){
					$(this).attr('src',a);
					$(this).dequeue();
				});

				$(this).fadeIn(3000);
			});


			sayi++;

			if(sayi == 7){
				sayi = 1;
			}

		},6000);
	}


	$('#kapama').on({
		mouseover: function(){
			$(this).css('cursor','pointer');
		},
		click: function(){
			$('#cerez').css('display','none');
		}
	});


	$('.kirmizi').on({
		mouseover: function(){
			$(this).css('color','red');
		},
		mouseleave: function(){
			$(this).css('color','gray');
		}
	});

	$('.mavi').on({
		mouseover: function(){
			$(this).css('color','blue');
		},
		mouseleave: function(){
			$(this).css('color','gray');
		}
	});
})