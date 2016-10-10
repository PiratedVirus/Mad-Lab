$(document).ready(function(){
	$('h2').click( function(){
	
		var $this = $(this),
			log = $this.index(),
			index= $this.children('audio').data('index'),
			audio =	$('audio')[index],
			counter = index;
			console.log(counter,index);
			
		audio.play();	
		// if(audio.paused===false){
		// 	audio.pause();
		// }
	});
	$('.play').click(function(){

		var $this = $(this),
			log = $this.index(),
			indx= $('.details-wrap').children('h2').children('audio').last ().data('index');
			audio =	$('audio')[indx];

			console.log(indx);

		

		if(audio.paused === false){
			audio.pause();
			audio.currentTime=0;

			
		}else{	
			audio.play(); 

		}
	});

	$('.back').click( function(){
		var $this = $(this),
			log = $this.index(),
			indx= $('.details-wrap').children('h2').children('audio').last ().data('index');
			console.log(indx);
			indx = indx -1 ;
			audio =	$('audio')[indx];
			console.log(indx);


		});	
})();