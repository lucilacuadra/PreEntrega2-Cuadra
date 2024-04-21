


function setUp() {

    var logoAnimado = document.getElementById("logoU");
    logoAnimado.addEventListener(
        "click",function() {window.scrollBy({top: 0});}, false);
}


const carrito = document.querySelector('#carrito');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');
const listaCursos = document.querySelector('#lista-cursos');
let articulosCarrito = [];

cargarEventListener();
function cargarEventListener(){

    listaCursos.addEventListener('click', agregarCurso)


    carrito.addEventListener('click', eliminaCurso)


    document.addEventListener('DOMContentLoaded', () => {
        articulosCarrito = JSON.parse( localStorage.getItem('carrito')) || [];

        carritoHTML();
    });



    vaciarCarritoBtn.addEventListener('click', () => {
        articulosCarrito = [];
        limpiarHTML();
    })
}


function agregarCurso(e){
    e.preventDefault();
    if ( e.target.classList.contains('agregar-carrito') ){
        const cursoSeleccionado = e.target.parentElement.parentElement;
        leerDatosCurso(cursoSeleccionado);
    }
}

function eliminaCurso(e){
    e.preventDefault();
    if ( e.target.classList.contains('borrar-curso') ){
        const idCurso = e.target.getAttribute('data-id');


        articulosCarrito.forEach( curso => {
            if( curso.id === idCurso){
                if( curso.cantidad > 1 ) {
                    curso.cantidad--;
                    carritoHTML();
                } else {
                    articulosCarrito = articulosCarrito.filter(curso => curso.id !== idCurso);
                    carritoHTML();
                }
            }
        })
    }
}

function leerDatosCurso(curso){
    const infoCurso = {
        imagen: curso.querySelector('img').src,
        titulo: curso.querySelector('h4').textContent,
        precio: curso.querySelector('.precio span').textContent,
        id: curso.querySelector('a').getAttribute('data-id'),
        cantidad: 1
    }


    const existe = articulosCarrito.some(curso => curso.id === infoCurso.id);
    if (existe) {
        const cursos = articulosCarrito.map(curso => {
            if (curso.id === infoCurso.id) {
                curso.cantidad++;
                return curso 
            } else {
                return curso 
            }
        })
        articulosCarrito = [...cursos]
    } else {
        articulosCarrito = [...articulosCarrito, infoCurso]
    }

    console.log(articulosCarrito);
    carritoHTML();
}


function carritoHTML(){

    limpiarHTML();

    articulosCarrito.forEach( curso => {
        const { imagen, titulo, precio, cantidad, id } = curso;
        const row = document.createElement('tr');
        row.innerHTML =
            `<td>
                <img src="${imagen}" width="100">
            </td>
            <td>
                ${titulo}
            </td>
            <td>
                ${precio}
            </td>
            <td>
                ${cantidad}
            </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${id}" >
                    X
                </a>
            </td>`;

        contenedorCarrito.appendChild(row);
    });

    sincronizarStorage();
}

function sincronizarStorage() {
    localStorage.setItem('carrito', JSON.stringify(articulosCarrito));
}


function limpiarHTML(){


    while( contenedorCarrito.firstChild ){
        contenedorCarrito.removeChild(contenedorCarrito.firstChild)
    }
}

window.addEventListener('load', setUp, false);  
