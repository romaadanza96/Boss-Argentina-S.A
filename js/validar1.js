function validar1(){
var nombre, apellido, ciudad, prov, telefono, correo, empresa, expresion;
nombre = document.getElementById("name1").value;
apellido = document.getElementById("lastName1").value;
ciudad = document.getElementById("city1").value;
prov = document.getElementById("provincia1").value;
telefono = document.getElementById("phone1").value;
correo = document.getElementById("exampleInputEmail11").value;
empresa = document.getElementById("company1").value;
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