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

var link11="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Crafty+Girls";
var link12="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Chewy";
var link13="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Dancing+Script";
var link14="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Gloria+Hallelujah";
var link15="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Homemade+Apple";
var link16="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Indie+Flower";
var link17="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Mountains+of+Christmas";
var link18="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Open+Sans";
var link19="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Pacifico";
var link20="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Permanent+Marker";

var link21="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Reenie+Beanie";
var link22="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Roboto";
var link23="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Rock+Salt";
var link24="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Sacramento";
var link25="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Shadows+Into+Light";
var link26="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Sigmar+One";
var link27="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Special+Elite";
var link28="https://www.google.com/fonts#QuickUsePlace:quickUse/Family:Walter+Turncoat";

var a=[link1,link2,link3,link4,link5,link6,link7,link8,link9,link10,link11,link12,link13,link14,link15,link16,link17,link18,link19,link20,link21,link22,link23,link24,link25,link26,link27,link28];

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
	for (var i = 0; i < 28; i++) {
		var valor = Math.floor((Math.random() * 3) + 2);
		$("#herefonts").append("<a href='"+a[i]+"' target='_blank'><div class='kol-"+valor+" textmedium' style='font-family:fuente"+i+"'><div class='kol-90 centerkol whereisthefont'>"+$("#textuser").val()+"</div></div></a>")
	}
}

function programarAviso(){
	$(".container").css("opacity","1");
    setTimeout(function(){createfonts()},1500);
}