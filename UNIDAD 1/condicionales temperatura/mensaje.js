
let boton = document.querySelector('buttom')
let temp = document.getElementById('num')
let select = document.querySelector('select');

let parrafo = document.querySelector('p');
parrafo.textContent = "Por favor elige una opcion";

boton.addEventListener("click", escogerClima);

function escogerClima() {
    let opcion = select.value;
    temp = temp
    if (opcion === "sunny" && temperature > 30) {
        parrafo.textContent = "Te recomiendo que salgas a la calle con ropa ligera y lentes de sol";
    } else if (opcion === "rainy") {
        parrafo.textContent = "Te recomiendo que salgas a la calle con un paraguas y un poncho";
    } else if (opcion === "snowing") {
        parrafo.textContent = "Te recomiendo que salgas a la calle con un abrigo grueso y un gorro";
    } else if (opcion === "overcast") {
        parrafo.textContent = "Te recomiendo que salgas a la calle con una buena actitud y no te deprimas :)";
    } else {
        parrafo.textContent = "Por favor elige una opcion";
    }
}

