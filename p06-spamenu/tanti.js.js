$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".mana").slideToggle("slow");

	$('nav ul li.off').each(function(index, el) {
		var manaID = el.id.split('-')[1];
		$('.mana#' + manaID).hide();
	});
});

$('nav').delegate('.off', 'click', function(event) {
	var pilihMana = this.id.split('-')[1];
	console.log(pilihMana);
	document.location.hash = pilihMana;

	$('.mana:visible').fadeOut('slow', function() {
		$('.mana#' + pilihMana).fadeIn('slow');
	});

	var $this = $(this);
	$this.removeClass('off').addClass("on");
    $this.siblings().addClass('off').removeClass('on');

    });
});