var texto1 = "See Soon!";
var texto2 = "Au revoir";
var texto3 = "That new girl";
var texto4 = "Pinky nose";
var texto5 = "Sweet mouth";
var texto6 = "Beauty cat";
var texto7 = "Unreal life";
var texto8 = "Summer like Spring";
var texto9 = "The moon is full"

var fuente1 = "fuente1";
var fuente2 = "fuente2";
var fuente3 = "fuente3";
var fuente4 = "fuente4";
var fuente5 = "";
var fuente6 = "";
var fuente7 = "";



function loadfontprimary() {
	var rtexto = Math.floor((Math.random() * 9) + 1);
	var rfuente = Math.floor((Math.random() * 4) + 1);

	if (rtexto == 1) {
		$("header h1").html(texto1);
	} else {
		if (rtexto == 2) {
			$("header h1").html(texto2);
		} else {
			if (rtexto == 3) {
				$("header h1").html(texto3);
			} else {
				if (rtexto == 4) {
					$("header h1").html(texto4);
				} else {
					if (rtexto == 5) {
						$("header h1").html(texto5);
					} else {
						if (rtexto == 6) {
							$("header h1").html(texto6);
						} else {
							if (rtexto == 7) {
								$("header h1").html(texto7);
							} else {
								if (rtexto == 8) {
									$("header h1").html(texto8);
								} else {
									if (rtexto == 9) {
										$("header h1").html(texto9);
									}
								}
							}
						}
					}
				}
			}
		}
	}

	if (rfuente == 1) {
		$("header h1").css("font-family", fuente1);
	} else {
		if (rfuente == 2) {
			$("header h1").css("font-family", fuente2);
		} else {
			if (rfuente == 3) {
				$("header h1").css("font-family", fuente3);
			} else {
				if (rfuente == 4) {
					$("header h1").css("font-family", fuente4);
				}
			}
		}
	}
}

var cantifont = 3;
function loadmore(){
	for(var i = cantifont+1; i<=cantifont+3; i++){
		if ( document.getElementById( "font"+i )) {
			$("#font"+i).css("opacity","1");
			$("#font"+i).css("display","block");
			
		}
		resizefont();
	}
	cantifont = cantifont+3;
}