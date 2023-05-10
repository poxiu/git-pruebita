// let banderas = ["bolivia.png", "peru.png", "albania.png",
// "grecia.png", "india.png", "south-korea.png", "ghana.png",
// "uganda.png", "australia.png", "islas-cook.png"];

let bolivia = document.createElement("imgBandera");
bolivia.src = "./assets/banderas-trivias/banderas del mundo/america/bolivia.png";

let peru = document.createElement("imgBandera");
peru.src = "./assets/banderas-trivias/banderas del mundo/america/peru.png";

let albania = document.createElement("imgBandera");
albania.src = "./assets/banderas-trivias/banderas del mundo/europa/albania.png";

let grecia = document.createElement("imgBandera");
grecia.src = "./assets/banderas-trivias/banderas del mundo/europa/grecia.png";

let corea = document.createElement("imgBandera");
corea.src = "./assets/banderas-trivias/banderas del mundo/asia/south-korea.png";

let india = document.createElement("imgBandera");
india.src = "./assets/banderas-trivias/banderas del mundo/asia/india.png";

let uganda = document.createElement("imgBandera");
uganda.src = "./assets/banderas-trivias/banderas del mundo/africa/uganda.png";

let ghana = document.createElement("imgBandera");
ghana.src = "./assets/banderas-trivias/banderas del mundo/africa/ghana.png";

let australia = document.createElement("imgBandera");
australia.src = "./assets/banderas-trivias/banderas del mundo/oceania/australia.png";

let islas = document.createElement("imgBandera");
islas.src = "./assets/banderas-trivias/banderas del mundo/oceania/islas-cook.png";



let banderas = [
    "bolivia", 
    "peru", 
    "albania", 
    "grecia", 
    "corea", 
    "india", 
    "uganda", 
    "ghana", 
    "australia", 
    "islas"
];

let correcta = [0,1,2,1,1,0,1,0,1,2];

let opciones = [
    ["Bolivia", "Ghana", "Malí"],
    ["polonia", "Perú", "Indonesia"],
    ["Montenegro", "austria", "Albania"],
    ["Finlandia", "Grecia", "islandia"],
    ["Corea del Norte", "Corea del Sur", "Taiwán"],
    ["India", "Irán", "Irak"],
    ["Mozambique", "Uganda", "Zimbabwe"],
    ["Ghana", "Senegal", "Guinea"],
    ["Nueva Zelanda", "Australia", "Fiji"],
    ["Tuvalu", "Islas Marianas", "islas Cook"],
];

// let puntajePorOpcion = [ //cambiar si es que se puede
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1],
//     [0, 1, 0],
//     [0, 1, 0],
//     [1, 0, 0],
//     [0, 1, 0],
//     [1, 0, 0],
//     [0, 1, 0],
//     [0, 0, 1],
// ];

let posActual = 0;
let cantadidAcertada = 0;

function comenzarJuego(){
    posActual = 0;
    cantadidAcertada = 0;
    document.getElementById("pantalla-inicial").style.display = "none";
    document.getElementById("pantalla-juego").style.display = "block";
    siguienteBandera();
}

function siguienteBandera(){ 
    if (banderas.lenght <= posActual){
        terminarJuego();
        
    }
    else //./assets/banderas-trivias/banderas del mundo/america/
        document.getElementById("imgBandera").scr = "img/" + banderas[posActual];
        document.getElementById("op0").innerHTML = opciones[posActual][0];
        document.getElementById("op1").innerHTML = opciones[posActual][1];
        document.getElementById("op2").innerHTML = opciones[posActual][2];
}
