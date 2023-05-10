// Convertidor de temperatura: Crea una página web que pida al usuario la temperatura en grados Celsius (°C), utilizando prompt(), y devuelva, en la consola, la temperatura en grados Farenheit (°F) utilizando console.log(). La fórmula matemática para pasar de °C a °F es: T(°F) = ( T(°C) × 1.8 ) + 32.

let celsius = prompt("escribe los grados celcius que quieras convertir a farenheit")
// T(°F) = ( T(°C) × 1.8 ) + 32.
let farenheit = ( celsius * 1.8 ) + 32;

document.write(celsius + " grados celsius en Farenheit son: " + farenheit + " grados farenheit.");