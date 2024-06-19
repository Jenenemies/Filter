let $botonTodo = document.querySelector("#filtro-todo")
let $botonPerros = document.querySelector("#filtro-perros")
let $botonGatos = document.querySelector("#filtro-gatos")
let $botonAves = document.querySelector("#filtro-aves")
 

let articulos = document.getElementsByClassName("articulo")
console.log(articulos);
$botonTodo.addEventListener("click", ()=> filtarArticulos("todos"));
$botonPerros.addEventListener("click", ()=> filtarArticulos("perros"));
$botonGatos.addEventListener("click", ()=> filtarArticulos("gatos"));
$botonAves.addEventListener("click", ()=> filtarArticulos("aves"))

function filtarArticulos(title){
 
    //Inicialización; Condición; Acción
    //Si la codición se cumple entrará ene le bucle 
    for(let i = 0; i < articulos.length; i++){

        let articulo = articulos [i];
        //El <article> de la ARRAY en el que nos encontramos, conocer el valor de title="". 
        let articuloTitle = articulo.getAttribute("title");
        //Obtener dicho valor con getAttribute
        console.log(articuloTitle)

        if(title === "todos" || articuloTitle === title){
            articulo.classList.remove("ocultar")
        }else{
            articulo.classList.add("ocultar")
            
        }


    }
}