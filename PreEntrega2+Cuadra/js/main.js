

tituloPrincipal.className = "titulo";

const contenedor = document.getElementById("contenedor");

const parrafo = document.createElement("p");

contenedor.appendChild(parrafo);

class Producto {
    constructor(nombre, precio, url) {
        this.nombre = nombre;
        this.precio = precio;
        this.url = url;
    }
}

const stickerRosa = new Producto("Stickers rosa", 360, "https://tse4.mm.bing.net/th?id=OIP.bCvMedllriP3Wmgdw4vkQQHaJl&pid=Api&P=0");
const stickerOtonio = new Producto("Stickers Otoño", 480, "https://tse3.mm.bing.net/th?id=OIP.gCibLB-Wygw2jCTdZ0WnHAHaGI&pid=Api&P=0");
const stickerBasico = new Producto("Stickers básico", 500, "https://tse3.mm.bing.net/th?id=OIP.H0TcB8h_uqkLGWE9fIkFrQAAAA&pid=Api&P=0");
const stickerPremium = new Producto("Sticker pack +180", 1800, "https://tse3.mm.bing.net/th?id=OIP.gQze4Ufh0tAiPLoJ99c4uwHaHa&pid=Api&P=0");

const arrayProductos = [stickerRosa, stickerOtonio, stickerBasico, stickerPremium];

let Carrito = [] ;

const contenedorProductos = document.getElementById("contenedorProductos");

arrayProductos.forEach( producto => {
    const div = document.createElement("div");
    div.className = "caja";
    div.innerHTML = `<p class = "titulo">Nombre: ${producto.nombre} </p>
                    <p>Precio: ${producto.precio}</p>
                    <img class = "marolio" src ="${producto.url}" alt = "${producto.nombre}">
                    <button>Agregar Al Carrito</button>`;
    contenedorProductos.appendChild(div);
})


//Ejecutar función en el evento click
document.getElementById("btn_open").addEventListener("click", open_close_menu);

//Declaramos variables
var side_menu = document.getElementById("menu_side");
var btn_open = document.getElementById("btn_open");
var body = document.getElementById("body");

//Evento para mostrar y ocultar menú
    function open_close_menu(){
        body.classList.toggle("body_move");
        side_menu.classList.toggle("menu__side_move");
    }

//Si el ancho de la página es menor a 760px, ocultará el menú al recargar la página

if (window.innerWidth < 760){

    body.classList.add("body_move");
    side_menu.classList.add("menu__side_move");
}


window.addEventListener("resize", function(){

    if (window.innerWidth > 760){

        body.classList.remove("body_move");
        side_menu.classList.remove("menu__side_move");
    }

    if (window.innerWidth < 760){

        body.classList.add("body_move");
        side_menu.classList.add("menu__side_move");
    }

});
   