var loadImg = function(){
	setTimeout(function(){
		$(".loader-imagen").addClass("ocultar")
	},2000);
}
$("index.html").ready(loadImg);
var onKeypress = function(evento){
	var ascii = evento.keyCode;
	if((ascii>=48 && ascii<=57) || ascii==37 || ascii==39 || ascii==8){
		return true;
	} else{
		return false;
	}
}
var cantDigCelular = function(){
	var cuadradoNegro = $("#cuadrado-negro");
	var longitud = $("#input-celular").val().length;
	if (longitud == 9) {
		$("#obtener-codigo").attr("href", "comprobacion-codigo.html");
	} else {
		cuadradoNegro.text("El celular debe tener 9 dígitos");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
		$("#obtener-codigo").removeAttr("href");
	}
}
var generarCodigo = function(){
	var longitud = $("#input-celular").val().length;
	if(longitud == 9){
		window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
		alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
		window.localStorage.setItem("celular", $("#input-celular").val());
	}
}
var comprobarCodigo = function(){
	var codigo1 = $(".input-codigo").eq(0).val();
	var codigo2 = $(".input-codigo").eq(1).val();
	var codigo3 = $(".input-codigo").eq(2).val();
	var codigo = codigo1 + codigo2 + codigo3;
	var cuadradoNegro = $("#cuadrado-negro");
	if(codigo == window.localStorage.getItem("numeroAleatorio")){
		$("#codigo-comprobado").attr("href", "registro-datos.html");
	} else {
		$("#codigo-comprobado").removeAttr("href");
		cuadradoNegro.text("Código erróneo");
		cuadradoNegro.removeClass("ocultar");
		$(".input-codigo").val("");
		$(".input-codigo").eq(0).focus();
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000)
	}
}
var onKeydownCodigo = function(evento){
	var ascii = evento.keyCode;
	var longitud = $(this).val().length;
	if((ascii>=48 && ascii<=57  && longitud==0) || ascii==8){
		return true;
	} else{
		return false;
	}
}
var onkeyupCodigo = function(evento){
	var longitud = $(this).val().length;
	var ascii = evento.keyCode;
	if(longitud==1){
		$(this).next().focus();
	}
	if(ascii==8){
		$(this).prev().focus();
	}
}
var generarCodigo2 = function(){
	window.localStorage.setItem("numeroAleatorio", Math.round(Math.random()*900)+99);
	alert("LAB - " + window.localStorage.getItem("numeroAleatorio"));
	$(".input-codigo").val("");
	$(".input-codigo").eq(0).focus();
	$("#input-correo").focus();
}
var mayusculas = function(){
	var valor = $(this).val();
	var primeraLetraMayusc = valor.charAt(0).toUpperCase();
	var valorMayusc = primeraLetraMayusc + valor.substr(1,valor.length);
	$(this).val(valorMayusc);
}
var soloLetras = function(evento){
	var ascii = evento.keyCode;
	if ((ascii<97 || ascii>122) && (ascii<65 || ascii>90) && ascii!=45 && ascii!=241 && ascii!=209 && ascii!=32 && ascii!=225 && ascii!=233 && ascii!=237 && ascii!=243 && ascii!=250 && ascii!=193 && ascii!=201 && ascii!=205 && ascii!=211 && ascii!=218 && ascii!=91){
		return false;
	}
	else{
		return true;
	}
}
var maximoNombre = function(){
	var cuadradoNegro = $("#cuadrado-negro");
	var nombre = $(".input-datos").eq(0).val();
	if(nombre.length>=20){
		cuadradoNegro.text("Ha excedido el máx de caracteres (20 máx)");
		cuadradoNegro.removeClass("ocultar");
		$(this).next().focus();
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}

}
var maximoApellido = function(){
	var cuadradoNegro = $("#cuadrado-negro");
	var apellido = $(".input-datos").eq(1).val();
	if(apellido.length>=20){
		cuadradoNegro.text("Ha excedido el máx de caracteres (20 máx)");
		cuadradoNegro.removeClass("ocultar");
		$("#input-correo").focus();
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}

}
var validarCorreo = function(){
	var regexCorreo = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/);
	var cuadradoNegro = $("#cuadrado-negro");
	var nombre = $(".input-datos").eq(0).val().length;
	var apellido = $(".input-datos").eq(1).val().length;
	var correo = $("#input-correo").val().length;
	var checkBox = $("#check").prop("checked");
	var validacionCorreo = $("#input-correo").val().match(regexCorreo);
	if(validacionCorreo && checkBox){
		$("#registrarse").attr("href", "ubicacion.html");
		window.localStorage.setItem("nombre",$(".input-datos").eq(0).val());
		window.localStorage.setItem("apellido",$(".input-datos").eq(1).val());
		window.localStorage.setItem("correo",$("#input-correo").val());
		var diaJoin = new Date();
		var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
		window.localStorage.setItem("join",diaJoin.getDate()+ " " +meses[diaJoin.getMonth()]+ " " +diaJoin.getFullYear());
	}
	else if(!checkBox){
		$("#registrarse").removeAttr("href");
		cuadradoNegro.text("Accept the terms and conditions");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}else if(!validacionCorreo){
		$("#registrarse").removeAttr("href");
		cuadradoNegro.text("Invalid mail format");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(correo<5){
		cuadradoNegro.text("Email must be at least 5 characters");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(correo>=50){
		cuadradoNegro.text("Mail must be at most 50 characters");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(correo==0){
		cuadradoNegro.text("Enter your email");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}

	if(nombre==0){
		cuadradoNegro.text("Enter your name");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(apellido==0){
		cuadradoNegro.text("Enter your Last name");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(apellido==0 && correo==0){
		cuadradoNegro.text("Enter your last name and email");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(nombre==0 && correo==0){
		cuadradoNegro.text("Enter your name and email");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(apellido==0 && nombre==0){
		cuadradoNegro.text("Enter your first and last name");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
	if(apellido==0 && nombre==0 && correo==0){
		cuadradoNegro.text("Enter your details");
		cuadradoNegro.removeClass("ocultar");
		setTimeout(function(){ cuadradoNegro.addClass("ocultar"); }, 3000);
	}
}
/*	window.localStorage.setItem("homeSave","Add the address of your home");
	window.localStorage.setItem("workSave","Add the address of your work");
	window.localStorage.setItem("musicSave","Add your favorite music");*/
function previewFile() {
	var preview = document.querySelector('img');
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();
	reader.onload = function () {
		preview.src = reader.result;
		var listo = $("#foto").attr("src");
		window.localStorage.setItem("fotoGuardado", listo);
	}
	if (file) {
		reader.readAsDataURL(file);
	} else {
		preview.src = "";
	}
}
function saveInputs(){
	window.localStorage.setItem("homeSave",$("#textHome").val());
	window.localStorage.setItem("workSave",$("#textWork").val());
	window.localStorage.setItem("musicSave",$("#textMusic").val());
}
$("#elegirFoto").change(previewFile);
	function mostrarCambios(){
		$("#homeShow").text(window.localStorage.getItem("homeSave"));
		$("#workShow").text(window.localStorage.getItem("workSave"));
		$("#musicShow").text(window.localStorage.getItem("musicSave"));
		$(".user2").attr("src" , window.localStorage.getItem("fotoGuardado"));
		$(".user2").addClass("user2");
	}
$("editar-perfil.html").ready(mostrarCambios);
var cargar = function(){
	$("#input-celular").focus();
	$("#input-celular").keypress(onKeypress);
	$("#obtener-codigo").click(cantDigCelular);
	$("#num").text(window.localStorage.getItem("celular"));
	$("#obtener-codigo").click(generarCodigo);
	$(".input-codigo").eq(0).focus();
	$(".input-codigo").keyup(onkeyupCodigo);
	$(".input-codigo").keydown(onKeydownCodigo);
	$("#reenviar-codigo").click(generarCodigo2);
	$("#codigo-comprobado").click(comprobarCodigo);
	$(".input-datos").eq(0).focus();
	$(".input-datos").blur(mayusculas);
	$(".input-datos").keypress(soloLetras);
	$(".input-datos").eq(0).keydown(maximoNombre);
	$(".input-datos").eq(1).keydown(maximoApellido);
	$("#registrarse").click(validarCorreo);
	$("#usuario-editable").text(window.localStorage.getItem("nombre"));
	$("#join").text(window.localStorage.getItem("join"));
	$(".circle").attr("src" , window.localStorage.getItem("fotoGuardado"));
	$("#usuario").attr("src" , window.localStorage.getItem("fotoGuardado"));
}
$(document).ready(cargar);
