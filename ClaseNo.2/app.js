//Eventos DOM (Document Object Model)
document
    .getElementById("formulario-producto")
    .addEventListener("submit", function (evento) {
        //Evaluar el comportamiento del formulario

        evento.preventDefault();//preventDefault para guardar sin refrescar

        //Obtener los valores del formulario

        const nombre = document.getElementById("nombre").value,
            precio = document.getElementById("precio").value,
            año = docmuent.getElementById("año").value;

        //Crear un nuevo objeto "producto"

        const product = new product(nombre, precio, año);

        //Crear un nuevo usuario de interfaz

        const vi = new UI();

        //Input de validacion de usuario
        if(nombre === ""|| precio === ""|| año ===""){
            vi.showMessage("Por favor insertar datos");
        }

        //Guardar producto
        vi.addProducto(Producto);
        vi.showMessage("Producto agregado");
        vi.resetForm();
    });

    document.getElementById("producto-lista").addEventListener("click",(e) =>{
        const vi = new UI();
        vi.deleteProducto(e.target);
        e.preventDefault();
    })

    class Producto{
        constructor(nombre,precio,año){
            this.nombre = nombre;
            this.precio = precio;
            this.año = año; 
        }
    }

    class UI{
        addProducto(producto){
            const productoLista = document.getElementById("producto-lista");
            const elemento = document.createElement("div");
            elemento.innerHTML = `<div class="tarjeta texto margen4">

            <div class="tarjeta-body">
        
        <strong>Producto</strong> : ${producto.nombre} -
        <strong>Precio</strong> : ${producto.precio} -
        <strong>Año</strong> : ${producto.año}-
        <a href="" class="btn btn-error" name="eliminar">Eliminar</a>
            </div>
        
        </div>
            `;

            productoLista.appendChild(element); //AppendChild = objeto hijo 
        }
        
        //Resetear valor de los formularios
        resetForm(elemento){
            document.getElementById("formulario-producto").reset();
        }
        deleteProducto(elemento){
            if(elemento.nombre === "eliminar" ){
                element.parentElement.parentElement.remove();
                this.showMessage("El prodcuto se a eliminado")
            }
        }
    
        showMessage(mensaje,cssClass){
            const div = document.createElement("div")
            div.className = `alert alert-${cssClass}`;
            div.appendChild(document.createTextNode(mensaje))
    
            //Mostrar en el DOM
            const contenido = document.querySelector(".container");
            const app= document.querySelector("#App");
    
            //Insertar mensaje en el interfaz usuario
        }
    }

   

