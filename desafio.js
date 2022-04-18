let materia = prompt("Ingrese la materia:");
while (materia != "ESC") {
  let nota1 = prompt("Ingrese la primer nota de la materia:");
  let nota2 = prompt("Ingrese la segunda nota de la materia:");
  let nota3 = prompt("Ingrese la tercer nota de la materia:");
  let promedio =
    (parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3;
  if (promedio > 10 || promedio < 0) {
    alert("Datos ingresados erróneos. Pruebe otra vez.");
  } else if (promedio >= 6 && promedio <= 10) {
    alert("Su promedio en " + materia + " es de : " + promedio);
    alert("Aprobado.");
  } else if (promedio < 6 && nota1 > 3 && nota2 > 3 && nota3 > 3) {
    alert("Su promedio en " + materia + " es de : " + promedio);
    alert("Debe recuperar.");
  } else if (promedio < 6 || nota1 <= 3 || nota2 <= 3 || nota3 <= 3) {
    alert("Su promedio en " + materia + " es de : " + promedio);
    alert("No aprobado.");
  }
  materia = prompt("Ingrese otra materia:");
}
if (materia == "ESC") {
  alert("Gracias vuelva prontos");
}
