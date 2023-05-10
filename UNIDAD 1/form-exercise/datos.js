function datos() {
  let nombres = document.getElementById("nombres").value;
  console.log(nombres);

  let apellidos = document.getElementById("apellidos").value;
  console.log(apellidos);

  let email = document.getElementById("email").value;
  console.log(email);

  let fechaNacimiento = document.getElementById("fecha-nacimiento").value;
  console.log(fechaNacimiento);

  let fem = document.getElementById("f").checked;
  console.log(fem);

  let masc = document.getElementById("m").checked;
  console.log(masc);

  let estatura = document.getElementById("estatura").value;
  console.log(estatura);

  let peso = document.getElementById("peso").value;
  console.log(peso);

  let deporte = document.getElementById("deporte").checked;
  console.log(deporte);

  let mensaje = "Nombres: " + nombres + "\nApellidos: " + apellidos + "\nEmail: " + email + "\nFecha de Nacimiento: " + fechaNacimiento + "\nMujer: " + fem + "\nhombre: " + masc + "\nEstatura: " + estatura + "\npeso: " + peso + "\ndeporte: " + deporte
  console.log(mensaje)
}