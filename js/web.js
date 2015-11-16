var link1 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Cabin+Sketch";
var link2 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Damion";
var link3 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Marko+One";
var link4 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:McLaren";
var link5 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Amatic+SC";
var link6 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Architects+Daughter";
var link7 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Bangers";
var link8 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Black+Ops+One";
var link9 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Coming+Soon";
var link10 = "https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Covered+By+Your+Grace";

var a=[link1,link2,link3,link4,link5,link6,link7,link8,link9,link10];

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
	for (var i = 0; i < 10; i++) {
		var valor = Math.floor((Math.random() * 3) + 2);
		$("#herefonts").append("<a href='"+a[i]+"' target='_blank'><div class='kol-"+valor+" textmedium' style='font-family:fuente"+i+"'><div class='kol-90 centerkol whereisthefont'>"+$("#textuser").val()+"</div></div></a>")
	}
}

function programarAviso(){
	$(".container").css("opacity","1");
    setTimeout(function(){createfonts()},1500);
}