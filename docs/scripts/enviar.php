<?php
  $destino = "diuardet@gmail.com";
  $nombre = $_Post["Nombre"]
  $correo = $_Post["Correo"]
  $mensaje = $_Post["Mensaje"]
  $asunto = "Contacto desde tu CV por " . $Nombre;
  $contenido = "Nombre: " . $Nombre . "\nCorreo: " . $Correo . "\n\nMensaje: " . $Mensaje;
  mail($destino, $asunto, $contenido);
  $var="Hola Mundo!!!";
  echo "<script>alert('$var')</script>";
  header("Location:index.html")
?>
