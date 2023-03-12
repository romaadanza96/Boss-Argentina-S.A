<?php

// llamando a los campos
$nombre = $_POST['name'];
$mensaje = $_POST['lastName'];
$mensaje = $_POST['city'];
$mensaje = $_POST['provincia'];
$telefono = $_POST['phone'];
$correo = $_POST['exampleInputEmail1'];
$empresa = $_POST['company'];
$mensaje = $_POST['mensaje'];

// datos para el correo
$destinatario = "romanadanza@gmail.com";
$asunto = "Contacto desde nuestra web";

$carta = "De: $nombre \n";
$carta .= "De: $apellido \n";
$carta .= "ciudad: $ciudad \n";
$carta .= "provincia: $prov \n";
$carta .= "telefono: $telefono \n";
$carta .= "Correo: $correo \n";
$carta .= "empresa: $empresa \n";
$carta .= "comentarios: $coments";

// enviando mensanje
mail($destinatario, $asunto, $carta);
header('Location:respuesta.html')

?>