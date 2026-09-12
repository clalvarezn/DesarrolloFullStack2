
function obtenerCarrito(){return JSON.parse(localStorage.getItem('levelupCarrito'))||[]}
function guardarCarrito(carrito){localStorage.setItem('levelupCarrito',JSON.stringify(carrito))}
function agregarCarrito(nombre,precio){
 let carrito=obtenerCarrito();
 let producto=carrito.find(p=>p.nombre===nombre);
 if(producto){producto.cantidad++}else{carrito.push({nombre,precio,cantidad:1})}
 guardarCarrito(carrito);
 alert(nombre+' fue añadido al carrito.');
}
function mostrarCarrito(){
 const cont=document.getElementById('carrito'); const total=document.getElementById('total-carrito');
 if(!cont)return;
 const carrito=obtenerCarrito();
 if(carrito.length===0){cont.innerHTML='<p>Tu carrito está vacío.</p>';total.innerHTML='';return}
 let suma=0;
 cont.innerHTML=carrito.map((p,i)=>{suma+=p.precio*p.cantidad;return `<div class="cart-item"><span>${p.nombre} x ${p.cantidad}</span><strong>$${(p.precio*p.cantidad).toLocaleString('es-CL')}</strong></div>`}).join('');
 total.innerHTML='Total: $'+suma.toLocaleString('es-CL')+'<br><button class="btn" onclick="vaciarCarrito()">Vaciar carrito</button>';
}
function vaciarCarrito(){localStorage.removeItem('levelupCarrito');mostrarCarrito()}
