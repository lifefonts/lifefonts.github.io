var link1 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Cabin+Sketch";
var link2 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Damion";
var link3 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Marko+One";
var link4 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:McLaren";



$(window).resize(function () {
	$("header").css('height', $(window).height() + "px");
	$("#herefonts").css('height', $(window).height() + "px");
});

$(document).ready(function () {
	$("header").css('height', $(window).height() + "px");
	$("#herefonts").css('height', $(window).height() + "px");
});


function createfonts() {
	$(".container").css("opacity","0");
	$("#herefonts").css("display","block");
	$("#herefonts").html("");
	$('html, body').animate({scrollTop:$("#herefonts").offset().top},1000);
	for (var i = 1; i <= 4; i++) {
		var valor = Math.floor((Math.random() * 3) + 2);
		$("#herefonts").append("<a href='"+link+i+"' targe='_blank'><div class='kol-"+valor+" textmedium' style='font-family:fuente"+i+"'><div class='kol-90 centerkol whereisthefont'>"+$("#textuser").val()+"</div></div></a>")
	}
}

function programarAviso(){
	$(".container").css("opacity","1");
    setTimeout(function(){createfonts()},1500);
}