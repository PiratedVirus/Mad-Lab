$('document').ready( function(){

	$('.spinner-wrap').click(function() {

		var $this = $(this),
			audio = $('audio.curr')[0],
			bpm   =$this.siblings('audio').data('bpm');
			pulse = (60/bpm)*1000;



		if(audio.paused === false){
			audio.pause();
			audio.currentTime=0;
			$this.removeClass('playing');
			clearInterval(intervals);
			
		}else{	
			audio.play(); 
			$this.addClass('playing');
			pulsing();
			intervals = setInterval(function(){
				pulsing();
			},pulse);
		}

		function pulsing(){
			$this.addClass('pulse');

			setTimeout(function(){
				$this.removeClass('pulse');

			},pulse-100);

	// $('.nxt').click(function(){

	// 	var two = $this.siblings('audio.curr').removeClass('curr').next();
	// 	console.log(two.length());

		


	// });
		}
	});

});