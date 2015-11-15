function createfonts() {
	for (var i = 1; i <= 4; i++) {
		var valor = Math.floor((Math.random() * 3) + 2);
		$("#herefonts").append("<div class='kol-"+valor+" textmedium' style='font-family:fuente"+i+"'><div class='kol-90 centerkol whereisthefont'>"+$("#textuser").val()+"</div></div>")
	}
}