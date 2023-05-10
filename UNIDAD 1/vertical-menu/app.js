

let itemsList = document.getElementsByClassName("item")
console.log(itemsList);
console.log(itemsList[3]);
console.log(itemsList[3].firstElementChild);

console.log(itemsList[3].firstElementChild.firstChild);

 // Primer elemento que cumpla la condicion
//     document.querySelectorAll() // Todos los elementos que cumplan la condicion\
let title = document.querySelector("#title")
console.log(title);
console.log(title.firstChild);

let navbar = document.querySelector("#navbar")
console.log(navbar);
let item = document.querySelector(".item")
console.log(item);

let items = document.querySelectorAll(".item")
console.log(items);
h