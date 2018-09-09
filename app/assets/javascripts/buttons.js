$(document).on("ready", function(){
  $(".button-whoIam").css("display", "none");
  $(".button-portfolio").css("display", "none");
  $(".button-whatIdo").css("display", "none");
  $(".button-yes-header").mouseenter(function(){
		$(".button-whoIam").show("drop", {
      direction: "left",
      duration: 500,
      easing: 'easeOutQuint'
    });
    $(".button-portfolio").show("drop", {
      direction: "down",
      duration: 500,
      easing: 'easeOutQuint'
    });
    $(".button-whatIdo").show("drop", {
      direction: "right",
      duration: 500,
      easing: 'easeOutQuint'
    });
    $(".link-no-header").hide("fade", {
      direction: "right",
      duration: 500,
      easing: 'easeOutQuint'
    });
    $(".link-no-header-2").hide("fade", {
      direction: "right",
      duration: 500,
      easing: 'easeOutQuint'
    });
	});
	
	$(".intro").css("display", "none");
	$(".button-whoIam").mouseenter(function(){
	  $(".intro").finish();
	  $(".intro2").css("display", "none")
		$(".intro").toggle("fade", {
      //direction: "left",
      duration: 500,
      easing: 'easeOutQuint'
    });
	});
	
	$(".intro2").css("display", "none");
	$(".button-whatIdo").mouseenter(function(){
	  $(".intro2").finish();
	  $(".intro").css("display", "none")
		$(".intro2").toggle("fade", {
      duration: 500,
      easing: 'easeOutQuint'
    });
	});
	
	$(".link-no-header").mouseenter(function() {
	  $(this).hide();
	  $(".link-no-header-2").fadeIn(250);
	});
});