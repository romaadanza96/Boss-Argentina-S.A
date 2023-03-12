function validar(){
var nombre, apellido, ciudad, prov, telefono, correo, empresa, expresion;
nombre = document.getElementById("name").value;
apellido = document.getElementById("lastName").value;
ciudad = document.getElementById("city").value;
prov = document.getElementById("provincia").value;
telefono = document.getElementById("phone").value;
correo = document.getElementById("exampleInputEmail1").value;
empresa = document.getElementById("company").value;
expresion = /\w+@\w+\.+[a-z]/;

if (nombre === "" || apellido === "" || ciudad === "" || prov === "" || telefono === "" || correo === "" || empresa === "") {
	alert("¡Todos los campos del formulario son OBLIGATORIOS!")
	return false;
}
else if(nombre.length>30){
	alert("El nombre es muy largo.")
	return false;
}
else if(apellido.length>30){
	alert("El apellido es muy largo.")
	return false;
}
else if(correo.length>100){
	alert("El correo es muy largo.")
	return false;
}
else if(!expresion.test(correo)){
alert("El correo no es VÁLIDO.")
return false;
}
else if(isNaN(telefono)){
	alert("El teléfono ingresado no es válido.")
	return false;
}
}