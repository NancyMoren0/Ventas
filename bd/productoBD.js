const productoBD = require("./conexion").productos;
const Producto=require("../modelos/ProductoModelo");
const { productos } = require("./conexion");
//const { encriptarPassword, validarPassword, usuarioAutorizado,adminAutorizado}= require("../middlewares/funcionesPassword");
//console.log(usuariosBD);

function validarDatos(producto){
    var valido = false;
    if(producto.cantidad!=undefined && producto.nombre!=undefined && producto.precio!=undefined){
     valido=true;
    }
    return valido;

}

async function mostrarProductos(){
    const productos = await productoBD.get(); //await para cuando tarda
    //console.log(usuarios);
    productosValidos=[];
    productos.forEach(producto => {
    const producto1=new Producto({id:producto.id,...producto.data()});   //todo esto es un objeto
    if(validarDatos (producto1.getProducto)){
        productosValidos.push(producto1.getProducto);
    }
    
  
    });
    //console.log(usuariosValidos);
    return productosValidos;
}
//mostrarUsuarios();
async function localizado(id) {
//el .doc es de documento
//console.log(usuario.data);
    const producto= await productoBD.doc(id).get();
    const producto1= new Producto({id:producto.id,...producto.data()});
    var productoValido;
    if(validarDatos(producto1.getProducto)){
        productoValido=producto1.getProducto;
    }
    //console.log(usuarioValido);
    return productoValido;
}
//buscarPorID("UsL4kNhxAq1EPLUsW4CR");


async function nuevoProducto(data) {
   /* const{salt, hash}=encriptarPassword(data.password);
    data.password=hash;
    data.salt=salt;*/
    data.tipoProducto="producto";
    const producto1=new Producto (data);
    //console.log(usuario1.getUsuario);
    var productoValido=false;
    if(validarDatos(producto1.getProducto)){
       await productoBD.doc().set(producto1.getProducto); 
       productoValido=true;
    }
    return productoValido;
    
}

async function borrarProducto(id) {
   var productoValido=await localizado(id);
   productoBorrado=false;
   if(productoValido){
     await productoBD.doc(id).delete();
     productoBorrado=true;
   }
   return productoBorrado;
}

module.exports={
    mostrarProductos,
    nuevoProducto,
    borrarProducto,
    localizado
}
//Tarea
//REvisar cuando si existe el usuario, pero el usuario es incorrecto
//borrarUsuario("2D2JjGiQyJcZuse8zxQi");
/*data={
    nombre:"Moreno",
    usuario:"dos",
    password:"dm"
}
//console.log (nuevoUsuario);
async function prueba() {
    console.log(await nuevoUsuario(data));
    
}
prueba();*/