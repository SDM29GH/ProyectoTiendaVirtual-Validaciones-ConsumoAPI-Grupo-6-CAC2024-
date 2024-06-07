function mostrarProducto() {
    fetch('https://fakestoreapi.com/products/')
    .then(res=>res.json())
    .then(json=>{
        console.log(json)
        productoJSON = json[0]
        console.log(productoJSON)
        console.log(productoJSON.title)

        const productosContainer = document.getElementById('user-info');
        productosContainer.innerHTML = '';

        const productos = json;
        productos.forEach(function(producto){
            const productoElement = document.createElement('div');
            productoElement.classList.add('user-info-producto');
        
            const imagenProducto = document.createElement('img');
            imagenProducto.src = `${producto.image}`;
            imagenProducto.alt = producto.title;
        
            const detalleProductos = document.createElement('div');
            detalleProductos.classList.add('detalle-producto');
        
            const nombreProducto = document.createElement('h2');
            nombreProducto.textContent = producto.title;
        
            const descripcionProducto = document.createElement('p');
            descripcionProducto.textContent = producto.description;
        
            detalleProductos.appendChild(nombreProducto);
            detalleProductos.appendChild(descripcionProducto);
            productoElement.appendChild(imagenProducto);
            productoElement.appendChild(detalleProductos);
            productosContainer.appendChild(productoElement);
        })
    })
    .catch(error=>{
        console.log("pagina no disponible");
    });
}

mostrarProducto();